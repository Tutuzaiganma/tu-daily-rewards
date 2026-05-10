import app from 'flarum/forum/app';
import Modal from 'flarum/common/components/Modal';
import Button from 'flarum/common/components/Button';

export default class ClaimModel extends Modal {
  oninit(vnode) {
    super.oninit(vnode);

    this.displayAmount = 0;
    this.animationFrameId = null;
  }

  className() {
    return 'DailyRewardsClaimModal Modal--small';
  }

  title() {
    return app.translator.trans('tu-daily-rewards.forum.page.claim_modal_title');
  }

  oncreate(vnode) {
    super.oncreate(vnode);
    this.startAmountAnimation();
  }

  onremove(vnode) {
    super.onremove(vnode);
    this.stopAmountAnimation();
  }

  content() {
    return (
      <div className="Modal-body">
        <div className="DailyRewardsClaimModal-content">
          <div className="DailyRewardsClaimModal-totalLabel">
            {app.translator.trans('tu-daily-rewards.forum.page.claim_modal_total_label')}
          </div>

          <div className="DailyRewardsClaimModal-amountRow">
            <span className="DailyRewardsClaimModal-amountValue">{this.displayAmount}</span>
            <span className="DailyRewardsClaimModal-currencyName">{this.getCurrencyName()}</span>
          </div>

          <div className="DailyRewardsClaimModal-actions">
            {Button.component(
              {
                className: 'Button Button--primary DailyRewardsClaimModal-confirmButton',
                onclick: () => this.hide(),
              },
              app.translator.trans('tu-daily-rewards.forum.page.claim_modal_confirm_button')
            )}
          </div>
        </div>
      </div>
    );
  }

  getTargetAmount() {
    const source = this.attrs ? this.attrs.amount : 0;
    const parsed = Number(source);

    if (Number.isNaN(parsed) || parsed <= 0) {
      return 0;
    }

    return Math.floor(parsed);
  }

  getCurrencyName() {
    const value = this.attrs && typeof this.attrs.currencyName === 'string' ? this.attrs.currencyName.trim() : '';

    if (value) {
      return value;
    }

    return app.translator.trans('tu-daily-rewards.forum.page.claim_modal_currency_placeholder');
  }

  stopAmountAnimation() {
    if (this.animationFrameId) {
      window.cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }

  startAmountAnimation() {
    this.stopAmountAnimation();

    const target = this.getTargetAmount();
    if (target <= 0) {
      this.displayAmount = 0;
      m.redraw();
      return;
    }

    const duration = 900;
    const startAt = Date.now();

    const step = () => {
      const elapsed = Date.now() - startAt;
      const progress = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      this.displayAmount = Math.min(target, Math.floor(target * eased));

      if (progress < 1) {
        this.animationFrameId = window.requestAnimationFrame(step);
        m.redraw();
        return;
      }

      this.displayAmount = target;
      this.animationFrameId = null;
      m.redraw();
    };

    this.animationFrameId = window.requestAnimationFrame(step);
  }
}
