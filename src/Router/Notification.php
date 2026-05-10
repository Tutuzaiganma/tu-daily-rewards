<?php

namespace Tu\DailyRewards\Router;

use Carbon\Carbon;
use Flarum\Notification\Notification as NotificationModel;
use Flarum\Notification\NotificationSyncer;
use Flarum\User\User;
use Illuminate\Contracts\Cache\Repository as CacheRepository;
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

    public function __construct(NotificationSyncer $syncer, CacheRepository $cache)
    {
        $this->syncer = $syncer;
        $this->cache = $cache;
    }

    /**
     * 发送“奖励待领取”系统通知。
     * 若通知已存在，则复用同一条记录并重新点亮（未读 + 刷新时间）。
     */
    public function notifyPendingReward(User $user): void
    {
        $blueprint = new PendingRewardBlueprint($user);
        $this->syncer->sync($blueprint, [$user]);

        NotificationModel::matchingBlueprint($blueprint)
            ->where('user_id', $user->id)
            ->update([
                'is_deleted' => false,
                'read_at' => null,
                'created_at' => Carbon::now()->toDateTimeString(),
            ]);

        $this->invalidateNotificationCounters($user);
    }

    protected function invalidateNotificationCounters(User $user): void
    {
        $this->cache->forget("user.{$user->id}.unread_notification_count");
        $this->cache->forget("user.{$user->id}.new_notification_count");
    }
}
