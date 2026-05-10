<?php

namespace Tu\DailyRewards\Listener;

use Carbon\CarbonImmutable;
use Flarum\Approval\Event\PostWasApproved;
use Flarum\Discussion\Discussion;
use Flarum\Discussion\Event\Started;
use Flarum\User\User;
use Illuminate\Database\ConnectionInterface;
use Tu\DailyRewards\Router\Notification;
use Tu\DailyRewards\Router\Status;

class DiscussionCreated
{
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
     * 监听主题创建事件：仅当主题已通过审核时写入发帖奖励记录。
     */
    public function handleStarted(Started $event): void
    {
        $discussion = $event->discussion;

        if (!$discussion || !$this->isDiscussionApproved($discussion)) {
            return;
        }

        $this->handleDiscussionReward($discussion);
    }

    /**
     * 监听首帖审核通过事件：用于补记审核前未记录的发帖奖励。
     */
    public function handleApproved(PostWasApproved $event): void
    {
        $post = $event->post;
        if (!$post || (int) $post->number !== 1) {
            return;
        }

        $discussion = $post->discussion;
        if (!$discussion) {
            return;
        }

        $this->handleDiscussionReward($discussion);
    }

    protected function handleDiscussionReward(Discussion $discussion): void
    {
        $user = $discussion->user;
        if (!$user instanceof User) {
            return;
        }

        $status = $this->status->getConfig();
        $globalConfig = $status['global'] ?? [];
        $postConfig = $status['rewards']['post'] ?? [];

        if (!($globalConfig['effectiveEnabled'] ?? false) || !($postConfig['effectiveEnabled'] ?? false)) {
            return;
        }

        $baseAmount = (int) ($postConfig['amount'] ?? 0);
        if ($baseAmount <= 0) {
            return;
        }

        $timezone = trim((string) ($globalConfig['timezone'] ?? ''));
        if ($timezone === '') {
            return;
        }

        $rewardAmount = $this->resolveRewardAmount($user, $baseAmount, $postConfig, $timezone);
        if ($rewardAmount <= 0) {
            return;
        }

        $now = $this->getNowByTimezone($timezone);

        $this->db->table('tu_daily_rewards_history')->insert([
            'user_id' => $user->id,
            'type' => 'post',
            'amount' => $rewardAmount,
            'claimed_at' => null,
            'created_at' => $now,
        ]);

        $this->notification->notifyPendingReward($user);
    }

    protected function resolveRewardAmount(User $user, int $baseAmount, array $postConfig, string $timezone): int
    {
        $limitEnabled = (bool) ($postConfig['limitEnabled'] ?? false);
        if (!$limitEnabled) {
            return $baseAmount;
        }

        $limitAmount = (int) ($postConfig['limitAmount'] ?? 0);
        if ($limitAmount <= 0) {
            return 0;
        }

        [$startAt, $endAt] = $this->getCurrentDayWindow($timezone);

        $recordedToday = (int) $this->db->table('tu_daily_rewards_history')
            ->where('user_id', $user->id)
            ->where('type', 'post')
            ->whereBetween('created_at', [$startAt, $endAt])
            ->sum('amount');

        $remaining = $limitAmount - $recordedToday;
        if ($remaining <= 0) {
            return 0;
        }

        // 超出每日限额时不记录（不进行部分记录）
        if ($baseAmount > $remaining) {
            return 0;
        }

        return $baseAmount;
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

    protected function isDiscussionApproved(Discussion $discussion): bool
    {
        if (isset($discussion->is_approved) && !$discussion->is_approved) {
            return false;
        }

        $firstPost = $discussion->firstPost;
        if ($firstPost && isset($firstPost->is_approved) && !$firstPost->is_approved) {
            return false;
        }

        return true;
    }
}
