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
    const notification = this.attrs.notification;
    const payload = notification ? notification.content() : null;
    const pendingTotal = this.toSafeNumber(payload && payload.pendingTotal);
    const currencyName = this.getCurrencyName(payload);

    return app.translator.trans('tu-daily-rewards.forum.notifications.pending_reward_text', {
      total: pendingTotal,
      currencyName,
    });
  }

  toSafeNumber(value) {
    const parsed = Number(value);
    if (Number.isNaN(parsed) || parsed < 0) {
      return 0;
    }

    return Math.floor(parsed);
  }

  getCurrencyName(payload) {
    const payloadValue = payload && typeof payload.currencyName === 'string' ? payload.currencyName.trim() : '';
    if (payloadValue) {
      return payloadValue;
    }

    const forumValue = app.forum ? app.forum.attribute('tu-daily-rewards.currencyName') : '';
    const normalizedForumValue = typeof forumValue === 'string' ? forumValue.trim() : '';

    return normalizedForumValue || app.translator.trans('tu-daily-rewards.forum.page.claim_modal_currency_placeholder');
  }
}
