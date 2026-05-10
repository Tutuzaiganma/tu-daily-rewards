import app from 'flarum/forum/app';
import Notification from 'flarum/forum/components/Notification';

export default class PendingRewardNotification extends Notification {
  icon() {
    return 'fas fa-gift';
  }

  href() {
    return app.route('dailyRewards');
  }

  content() {
    // 后端会复用同一条通知并重置为未读，这里保持固定提示文案。
    return app.translator.trans('tu-daily-rewards.forum.notifications.pending_reward_text');
  }
}
