<?php

namespace Tu\DailyRewards\Listener;

use Carbon\CarbonImmutable;
use Flarum\Discussion\Event\UserRead;
use Flarum\Discussion\Event\UserDataSaving;
use Flarum\User\User;
use Illuminate\Database\ConnectionInterface;
use Tu\DailyRewards\Router\Notification;
use Tu\DailyRewards\Router\Status;

class ViewPost
{
    /**
     * 本次请求内缓存阅读进度区间，key: userId:discussionId
     *
     * @var array<string, array{from:int,to:int}>
     */
    protected static $readProgressRanges = [];

    /**
     * @var Status
     */
    protected $status;

    /**
     * @var ConnectionInterface
     */
    protected $db;

    /**
     * @var Notification
     */
    protected $notification;

    public function __construct(Status $status, ConnectionInterface $db, Notification $notification)
    {
        $this->status = $status;
        $this->db = $db;
        $this->notification = $notification;
    }

    /**
     * 在 discussion_user 保存前缓存旧阅读进度，供 UserRead 事件计算增量使用。
     */
    public function handleUserDataSaving(UserDataSaving $event): void
    {
        $state = $event->state;
        if (!$state) {
            return;
        }

        $userId = (int) ($state->user_id ?? 0);
        $discussionId = (int) ($state->discussion_id ?? 0);
        if ($userId <= 0 || $discussionId <= 0) {
            return;
        }

        $from = (int) ($state->getOriginal('last_read_post_number') ?? 0);
        $to = (int) ($state->last_read_post_number ?? 0);
        if ($to <= $from) {
            return;
        }

        static::$readProgressRanges[$this->buildReadRangeKey($userId, $discussionId)] = [
            'from' => $from,
            'to' => $to,
        ];
    }

    /**
     * 监听用户阅读事件：仅在查看未读内容产生阅读进度时写入浏览奖励记录。
     */
    public function handle(UserRead $event): void
    {
        $state = $event->state;
        if (!$state) {
            return;
        }

        $user = $state->user;
        if (!$user instanceof User) {
            return;
        }

        $discussionId = (int) ($state->discussion_id ?? 0);
        $currentReadNumber = (int) ($state->last_read_post_number ?? 0);
        if ($discussionId <= 0 || $currentReadNumber <= 0) {
            return;
        }

        $readRange = $this->pullReadRange($user, $discussionId, $currentReadNumber);
        if (!$readRange) {
            return;
        }

        $eligibleReadCount = $this->countEligibleReadPosts(
            $discussionId,
            $readRange['from'],
            $readRange['to'],
            (int) $user->id
        );
        if ($eligibleReadCount <= 0) {
            return;
        }

        $status = $this->status->getConfig();
        $globalConfig = $status['global'] ?? [];
        $viewConfig = $status['rewards']['view'] ?? [];

        if (!($globalConfig['effectiveEnabled'] ?? false) || !($viewConfig['effectiveEnabled'] ?? false)) {
            return;
        }

        $baseAmount = (int) ($viewConfig['amount'] ?? 0);
        if ($baseAmount <= 0) {
            return;
        }

        $timezone = trim((string) ($globalConfig['timezone'] ?? ''));
        if ($timezone === '') {
            return;
        }

        $rewardAmount = $this->resolveRewardAmount($user, $baseAmount, $viewConfig, $timezone, $eligibleReadCount);
        if ($rewardAmount <= 0) {
            return;
        }

        $now = $this->getNowByTimezone($timezone);

        $this->db->table('tu_daily_rewards_history')->insert([
            'user_id' => $user->id,
            'type' => 'view',
            'amount' => $rewardAmount,
            'claimed_at' => null,
            'created_at' => $now,
        ]);

        $this->notification->notifyPendingReward($user);
    }

    protected function resolveRewardAmount(User $user, int $baseAmount, array $viewConfig, string $timezone, int $eligibleReadCount): int
    {
        if ($eligibleReadCount <= 0) {
            return 0;
        }

        $limitEnabled = (bool) ($viewConfig['limitEnabled'] ?? false);
        if (!$limitEnabled) {
            return $baseAmount * $eligibleReadCount;
        }

        $limitAmount = (int) ($viewConfig['limitAmount'] ?? 0);
        if ($limitAmount <= 0) {
            return 0;
        }

        [$startAt, $endAt] = $this->getCurrentDayWindow($timezone);

        $recordedToday = (int) $this->db->table('tu_daily_rewards_history')
            ->where('user_id', $user->id)
            ->where('type', 'view')
            ->whereBetween('created_at', [$startAt, $endAt])
            ->sum('amount');

        $remaining = $limitAmount - $recordedToday;
        if ($remaining <= 0) {
            return 0;
        }

        $maxRewardCount = intdiv($remaining, $baseAmount);
        if ($maxRewardCount <= 0) {
            return 0;
        }

        return min($eligibleReadCount, $maxRewardCount) * $baseAmount;
    }

    protected function pullReadRange(User $user, int $discussionId, int $currentReadNumber): ?array
    {
        $key = $this->buildReadRangeKey((int) $user->id, $discussionId);
        $cachedRange = static::$readProgressRanges[$key] ?? null;
        unset(static::$readProgressRanges[$key]);

        if (is_array($cachedRange)) {
            $from = (int) ($cachedRange['from'] ?? 0);
            $to = (int) ($cachedRange['to'] ?? 0);
            if ($to > $from && $to === $currentReadNumber) {
                return ['from' => $from, 'to' => $to];
            }
        }

        // 兜底处理：未命中缓存时按新增 1 条已读计算，对应正常单条已读场景，同时避免重复或大范围误算。
        return ['from' => max(0, $currentReadNumber - 1), 'to' => $currentReadNumber];
    }

    protected function countEligibleReadPosts(int $discussionId, int $fromNumber, int $toNumber, int $userId): int
    {
        if ($toNumber <= $fromNumber || $userId <= 0) {
            return 0;
        }

        return (int) $this->db->table('posts')
            ->where('discussion_id', $discussionId)
            ->where('number', '>', $fromNumber)
            ->where('number', '<=', $toNumber)
            ->where('type', 'comment')
            ->where('user_id', '<>', $userId)
            ->count('id');
    }

    protected function buildReadRangeKey(int $userId, int $discussionId): string
    {
        return $userId.':'.$discussionId;
    }

    protected function getCurrentDayWindow(string $timezone): array
    {
        try {
            $now = CarbonImmutable::now($timezone);
        } catch (\Throwable $e) {
            $now = CarbonImmutable::now(date_default_timezone_get());
        }

        return [
            $now->startOfDay()->toDateTimeString(),
            $now->endOfDay()->toDateTimeString(),
        ];
    }

    protected function getNowByTimezone(string $timezone): string
    {
        try {
            return CarbonImmutable::now($timezone)->toDateTimeString();
        } catch (\Throwable $e) {
            return CarbonImmutable::now(date_default_timezone_get())->toDateTimeString();
        }
    }
}
