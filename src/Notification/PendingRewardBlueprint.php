<?php

namespace Tu\DailyRewards\Notification;

use Flarum\Notification\Blueprint\BlueprintInterface;
use Flarum\User\User;

class PendingRewardBlueprint implements BlueprintInterface
{
    /**
     * @var User
     */
    protected $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public function getFromUser()
    {
        return null;
    }

    public function getSubject()
    {
        return $this->user;
    }

    public function getData()
    {
        // 保持 Blueprint 匹配键稳定，便于复用同一条通知并重新点亮。
        return null;
    }

    public static function getType()
    {
        return 'tuDailyRewardPending';
    }

    public static function getSubjectModel()
    {
        return User::class;
    }
}
