<?php

namespace Tu\DailyRewards\Router;

use Flarum\Extend;
use Tu\DailyRewards\ClaimReward\AllClaim;
use Tu\DailyRewards\ClaimReward\SingleClaim;

class ApiRoutes
{
    public static function register(Extend\Routes $routes): Extend\Routes
    {
        return $routes
            ->get('/daily-rewards/status', 'tu-daily-rewards.status', Status::class)
            ->get('/daily-rewards/mine', 'tu-daily-rewards.mine', Mine::class)
            ->post('/daily-rewards/claim/single', 'tu-daily-rewards.claim.single', SingleClaim::class)
            ->post('/daily-rewards/claim/all', 'tu-daily-rewards.claim.all', AllClaim::class);
    }
}
