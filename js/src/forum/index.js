import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import LinkButton from 'flarum/common/components/LinkButton';
import IndexPage from 'flarum/forum/components/IndexPage';
import PendingRewardNotification from './components/PendingRewardNotification';
import DailyRewards from './components/DailyRewards';

app.initializers.add('tu/daily-rewards', () => {
  app.notificationComponents.tuDailyRewardPending = PendingRewardNotification;

  app.routes.dailyRewards = {
    path: '/dailyRewards',
    component: DailyRewards,
  };

  extend(IndexPage.prototype, 'navItems', function (items) {
    if (!app.session.user) return;

    items.add(
      'dailyRewards',
      <LinkButton icon="fas fa-gift" href={app.route('dailyRewards')}>
        {app.translator.trans('tu-daily-rewards.forum.nav.daily_rewards')}
      </LinkButton>,
      49
    );
  });
});
