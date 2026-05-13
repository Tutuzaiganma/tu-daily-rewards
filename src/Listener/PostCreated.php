<?php

namespace Tu\DailyRewards\Listener;

use Carbon\CarbonImmutable;
use Flarum\Approval\Event\PostWasApproved;
use Flarum\Post\Event\Posted;
use Flarum\Post\Post;
use Flarum\User\User;
use Illuminate\Database\ConnectionInterface;
use Tu\DailyRewards\Info\Status;
use Tu\DailyRewards\Router\Notification;

class PostCreated
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
     * 监听回帖创建事件：仅当回帖已通过审核时写入回帖奖励记录。
     */
    public function handlePosted(Posted $event): void
    {
        $post = $event->post;
        if (!$this->isEligibleReply($post) || !$this->isPostApproved($post)) {
            return;
        }

        $this->handleReplyReward($post);
    }

    /**
     * 监听回帖审核通过事件：用于补记审核前未记录的回帖奖励。
     */
    public function handleApproved(PostWasApproved $event): void
    {
        $post = $event->post;
        if (!$this->isEligibleReply($post)) {
            return;
        }

        $this->handleReplyReward($post);
    }

    protected function handleReplyReward(Post $post): void
    {
        $user = $post->user;
        if (!$user instanceof User) {
            return;
        }

        $status = $this->status->getConfig();
        $globalConfig = $status['global'] ?? [];
        $replyConfig = $status['rewards']['reply'] ?? [];

        if (!($globalConfig['effectiveEnabled'] ?? false) || !($replyConfig['effectiveEnabled'] ?? false)) {
            return;
        }

        if (!$this->meetsReplyMinCharsRequirement($post, $replyConfig)) {
            return;
        }

        $baseAmount = (int) ($replyConfig['amount'] ?? 0);
        if ($baseAmount <= 0) {
            return;
        }

        $timezone = trim((string) ($globalConfig['timezone'] ?? ''));
        if ($timezone === '') {
            return;
        }

        $rewardAmount = $this->resolveRewardAmount($user, $baseAmount, $replyConfig, $timezone);
        if ($rewardAmount <= 0) {
            return;
        }

        $now = $this->getNowByTimezone($timezone);

        $this->db->table('tu_daily_rewards_history')->insert([
            'user_id' => $user->id,
            'type' => 'reply',
            'amount' => $rewardAmount,
            'claimed_at' => null,
            'created_at' => $now,
        ]);

        $this->notification->notifyPendingReward($user);
    }

    protected function resolveRewardAmount(User $user, int $baseAmount, array $replyConfig, string $timezone): int
    {
        $limitEnabled = (bool) ($replyConfig['limitEnabled'] ?? false);
        if (!$limitEnabled) {
            return $baseAmount;
        }

        $limitAmount = (int) ($replyConfig['limitAmount'] ?? 0);
        if ($limitAmount <= 0) {
            return 0;
        }

        [$startAt, $endAt] = $this->getCurrentDayWindow($timezone);

        $recordedToday = (int) $this->db->table('tu_daily_rewards_history')
            ->where('user_id', $user->id)
            ->where('type', 'reply')
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

    protected function meetsReplyMinCharsRequirement(Post $post, array $replyConfig): bool
    {
        $minChars = (int) ($replyConfig['minChars'] ?? 0);
        if ($minChars <= 0) {
            return true;
        }

        $rawContent = is_string($post->content ?? null) ? $post->content : '';
        if ($rawContent === '') {
            return false;
        }

        $plainText = html_entity_decode(strip_tags($rawContent), ENT_QUOTES | ENT_HTML5, 'UTF-8');
        $plainText = trim($plainText);
        if ($plainText === '') {
            return false;
        }

        // 字数门槛按可见字符计算，不把空白字符计入长度。
        $normalizedText = preg_replace('/\s+/u', '', $plainText);
        if ($normalizedText === null) {
            $normalizedText = $plainText;
        }

        return $this->stringLength($normalizedText) >= $minChars;
    }

    protected function stringLength(string $text): int
    {
        if ($text === '') {
            return 0;
        }

        if (function_exists('mb_strlen')) {
            return mb_strlen($text, 'UTF-8');
        }

        return strlen($text);
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

    protected function isEligibleReply(?Post $post): bool
    {
        if (!$post) {
            return false;
        }

        if ($post->type !== 'comment') {
            return false;
        }

        // 首帖(number=1)属于发帖奖励，不计入回帖奖励。
        if ((int) $post->number <= 1) {
            return false;
        }

        if (isset($post->is_private) && $post->is_private) {
            return false;
        }

        return true;
    }

    protected function isPostApproved(Post $post): bool
    {
        if (isset($post->is_approved) && !$post->is_approved) {
            return false;
        }

        return true;
    }
}
