import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';

const REWARD_TYPES = ['post', 'reply', 'view'];

function getRewardTypeLabel(type) {
  if (type === 'post') {
    return app.translator.trans('tu-daily-rewards.forum.page.type_post');
  }

  if (type === 'reply') {
    return app.translator.trans('tu-daily-rewards.forum.page.type_reply');
  }

  if (type === 'view') {
    return app.translator.trans('tu-daily-rewards.forum.page.type_view');
  }

  return app.translator.trans('tu-daily-rewards.forum.page.unknown_type');
}

export default class DailyRewardsStatusCard extends Component {
  oninit(vnode) {
    super.oninit(vnode);
    this.dayPassedTimer = null;
    this.currentTimezone = '';
    this.dayFillEl = null;
    this.dayValueEl = null;
  }

  oncreate(vnode) {
    super.oncreate(vnode);
    this.currentTimezone =
      vnode.attrs && typeof vnode.attrs.timezone === 'string' ? vnode.attrs.timezone.trim() : '';
    this.updateDayProgressDom();
    this.dayPassedTimer = setInterval(() => {
      this.updateDayProgressDom();
    }, 1000);
  }

  onupdate(vnode) {
    this.currentTimezone =
      vnode.attrs && typeof vnode.attrs.timezone === 'string' ? vnode.attrs.timezone.trim() : '';
    this.updateDayProgressDom();
  }

  onremove(vnode) {
    super.onremove(vnode);
    if (this.dayPassedTimer) {
      clearInterval(this.dayPassedTimer);
      this.dayPassedTimer = null;
    }
    this.dayFillEl = null;
    this.dayValueEl = null;
  }

  getDayPassedPercent(timezone) {
    if (!timezone || typeof timezone !== 'string') {
      return 0;
    }

    const now = new Date();

    try {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      const parts = formatter.formatToParts(now);
      const hourPart = parts.find((part) => part.type === 'hour');
      const minutePart = parts.find((part) => part.type === 'minute');
      const secondPart = parts.find((part) => part.type === 'second');
      const hour = Number(hourPart ? hourPart.value : 0);
      const minute = Number(minutePart ? minutePart.value : 0);
      const second = Number(secondPart ? secondPart.value : 0);
      const elapsed = hour * 3600 + minute * 60 + second + now.getMilliseconds() / 1000;
      const total = 24 * 3600;

      return Math.max(0, Math.min(100, (elapsed / total) * 100));
    } catch (error) {
      return 0;
    }
  }

  formatPercent(value) {
    return `${Number(value || 0).toFixed(2)}%`;
  }

  updateDayProgressDom() {
    const dayPassedPercent = this.getDayPassedPercent(this.currentTimezone);
    const dayPassedText = this.formatPercent(dayPassedPercent);

    if (this.dayFillEl) {
      this.dayFillEl.style.width = `${dayPassedPercent}%`;
    }

    if (this.dayValueEl) {
      this.dayValueEl.textContent = dayPassedText;
    }
  }

  updateRewardFillDom(vnode, percent, animateFromZero) {
    const dom = vnode.dom;
    if (!dom) {
      return;
    }

    const width = `${Math.max(0, Math.min(100, Number(percent || 0)))}%`;

    if (animateFromZero) {
      dom.style.width = '0%';
      requestAnimationFrame(() => {
        dom.style.width = width;
      });
      return;
    }

    dom.style.width = width;
  }

  view(vnode) {
    const attrs = vnode.attrs || {};
    const loading = Boolean(attrs.loading);
    const timezone = attrs.timezone;
    const rowsByType = attrs.rowsByType || {};
    const dayPassedPercent = Number(this.getDayPassedPercent(timezone) || 0);
    const dayPassedText = this.formatPercent(dayPassedPercent);
    const rewardRows = REWARD_TYPES.filter((type) => {
      const row = rowsByType[type] || {};
      const target = Number(row.target || 0);

      return target > 0;
    }).map((type) => {
      const row = rowsByType[type] || {};
      const current = Number(row.current || 0);
      const target = Number(row.target || 0);
      const percent = Number(row.percent || 0);
      const ratioText = `${current}/${target}`;

      return (
        <div className="DailyRewardsStatusCard-row" key={type}>
          <div className="DailyRewardsStatusCard-label">{getRewardTypeLabel(type)}</div>
          <div className="DailyRewardsStatusCard-track">
            <div
              className="DailyRewardsStatusCard-fill"
              oncreate={(fillVnode) => this.updateRewardFillDom(fillVnode, percent, true)}
              onupdate={(fillVnode) => this.updateRewardFillDom(fillVnode, percent, false)}
            />
          </div>
          <div className="DailyRewardsStatusCard-value">{ratioText}</div>
        </div>
      );
    });

    return (
      <div className="DailyRewardsStatusCard">
        <div className="DailyRewardsStatusCard-dayProgress">
          <div className="DailyRewardsStatusCard-label">
            {app.translator.trans('tu-daily-rewards.forum.page.status_card_day_passed')}
          </div>
          <div className="DailyRewardsStatusCard-track">
            <div
              className="DailyRewardsStatusCard-fill"
              oncreate={(fillVnode) => {
                this.dayFillEl = fillVnode.dom;
                this.updateDayProgressDom();
              }}
              onupdate={(fillVnode) => {
                this.dayFillEl = fillVnode.dom;
                this.updateDayProgressDom();
              }}
            />
          </div>
          <div
            className="DailyRewardsStatusCard-value"
            oncreate={(valueVnode) => {
              this.dayValueEl = valueVnode.dom;
              this.updateDayProgressDom();
            }}
            onupdate={(valueVnode) => {
              this.dayValueEl = valueVnode.dom;
              this.updateDayProgressDom();
            }}
          >
            {dayPassedText}
          </div>
        </div>

        <div className="DailyRewardsStatusCard-list">
          {loading ? (
            <div className="DailyRewardsStatusCard-loading" key="loading">
              <LoadingIndicator />
            </div>
          ) : (
            rewardRows
          )}
        </div>
      </div>
    );
  }
}
