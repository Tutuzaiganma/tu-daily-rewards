<?php

namespace Tu\DailyRewards\Router;

use Carbon\Carbon;
use Carbon\CarbonImmutable;
use Flarum\Notification\Notification as NotificationModel;
use Flarum\Notification\NotificationSyncer;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\User;
use Illuminate\Contracts\Cache\Repository as CacheRepository;
use Illuminate\Database\ConnectionInterface;
use Tu\DailyRewards\Notification\PendingRewardBlueprint;

class Notification
{
    /**
     * @var NotificationSyncer
     */
    protected $syncer;

    /**
     * @var CacheRepository
     */
    protected $cache;

    /**
     * @var ConnectionInterface
     */
    protected $db;

    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    public function __construct(
        NotificationSyncer $syncer,
        CacheRepository $cache,
        ConnectionInterface $db,
        SettingsRepositoryInterface $settings
    )
    {
        $this->syncer = $syncer;
        $this->cache = $cache;
        $this->db = $db;
        $this->settings = $settings;
    }

    /**
     * 发送“奖励待领取”系统通知。
     * 若通知已存在，则复用同一条记录并重新点亮（未读 + 刷新时间）。
     */
    public function notifyPendingReward(User $user): void
    {
        $content = $this->buildNotificationContent($user);
        $contentJson = json_encode($content, JSON_UNESCAPED_UNICODE);
        if ($contentJson === false) {
            $contentJson = null;
        }

        $type = PendingRewardBlueprint::getType();
        $baseQuery = NotificationModel::query()
            ->where('type', $type)
            ->where('user_id', $user->id)
            ->whereNull('from_user_id')
            ->where('subject_id', $user->id);

        // 同步前将 data 归一为 null，确保 Syncer 能复用同一条通知。
        $baseQuery->update(['data' => null]);

        $blueprint = new PendingRewardBlueprint($user);
        $this->syncer->sync($blueprint, [$user]);

        NotificationModel::query()
            ->where('type', $type)
            ->where('user_id', $user->id)
            ->whereNull('from_user_id')
            ->where('subject_id', $user->id)
            ->where('is_deleted', false)
            ->update([
                'is_deleted' => false,
                'read_at' => null,
                'created_at' => Carbon::now()->toDateTimeString(),
                'data' => $contentJson,
            ]);

        $this->invalidateNotificationCounters($user);
    }

    protected function buildNotificationContent(User $user): array
    {
        $timezone = trim((string) $this->settings->get('tu-daily-rewards.timezone', ''));
        $pendingTotal = $this->calculatePendingTotal($user, $timezone);
        $moneyName = (string) $this->settings->get('antoinefr-money.moneyname', '');

        return [
            'pendingTotal' => $pendingTotal,
            'currencyName' => $this->extractCurrencyName($moneyName),
        ];
    }

    protected function calculatePendingTotal(User $user, string $timezone): int
    {
        $query = $this->db->table('tu_daily_rewards_history')
            ->where('user_id', $user->id)
            ->whereNull('claimed_at');

        if ($timezone !== '') {
            [$startAt, $endAt] = $this->getCurrentDayWindow($timezone);
            $query->whereBetween('created_at', [$startAt, $endAt]);
        }

        $total = (int) $query->sum('amount');

        return $total > 0 ? $total : 0;
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

    protected function extractCurrencyName(string $moneyName): string
    {
        return trim((string) str_ireplace('[money]', '', $moneyName));
    }

    protected function invalidateNotificationCounters(User $user): void
    {
        $this->cache->forget("user.{$user->id}.unread_notification_count");
        $this->cache->forget("user.{$user->id}.new_notification_count");
    }
}
