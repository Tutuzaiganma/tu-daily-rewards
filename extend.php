<?php

namespace Tu\DailyRewards;

use Flarum\Api\Serializer\BasicUserSerializer;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Extend;
use Flarum\Discussion\Event\Started;
use Flarum\Discussion\Event\UserRead;
use Flarum\Discussion\Event\UserDataSaving;
use Flarum\Approval\Event\PostWasApproved;
use Flarum\Post\Event\Posted;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less')
        ->route('/dailyRewards', 'dailyRewards'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/resources/less/admin.less'),

    (new Extend\Locales(__DIR__.'/resources/locale')),

    Router\ApiRoutes::register(new Extend\Routes('api')),

    (new Extend\ApiSerializer(ForumSerializer::class))
        ->attributes(ForumAttributes::class),

    (new Extend\Notification())
        ->type(Notification\PendingRewardBlueprint::class, BasicUserSerializer::class, ['alert']),

    (new Extend\Event())
        ->listen(Started::class, [Listener\DiscussionCreated::class, 'handleStarted'])
        ->listen(PostWasApproved::class, [Listener\DiscussionCreated::class, 'handleApproved'])
        ->listen(Posted::class, [Listener\PostCreated::class, 'handlePosted'])
        ->listen(UserDataSaving::class, [Listener\ViewPost::class, 'handleUserDataSaving'])
        ->listen(UserRead::class, [Listener\ViewPost::class, 'handle']),
];

