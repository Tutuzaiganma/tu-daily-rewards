import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';
import Button from 'flarum/common/components/Button';

function normalizeDateTimeText(value) {
  if (!value || typeof value !== 'string') {
    return '-';
  }

  const normalized = value.includes('T') ? value.replace('T', ' ') : value;

  return normalized;
}

function formatDateTime(value) {
  const normalized = normalizeDateTimeText(value);
  if (normalized === '-') {
    return normalized;
  }
  return normalized;
}

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

export default class RewardRecordCard extends Component {
  view(vnode) {
    const attrs = vnode.attrs || {};
    const record = attrs.record || {};
    const isClaimed = Boolean(record.claimedAt);
    const isExpired = !isClaimed && Boolean(attrs.expired);
    const claiming = Boolean(attrs.claiming);
    const onClaim = typeof attrs.onClaim === 'function' ? attrs.onClaim : () => {};
    const statusText = isClaimed
      ? app.translator.trans('tu-daily-rewards.forum.page.status_claimed')
      : isExpired
      ? app.translator.trans('tu-daily-rewards.forum.page.status_expired')
      : app.translator.trans('tu-daily-rewards.forum.page.status_pending');
    const claimButtonText = isClaimed
      ? app.translator.trans('tu-daily-rewards.forum.page.button_claimed')
      : isExpired
      ? app.translator.trans('tu-daily-rewards.forum.page.button_expired')
      : app.translator.trans('tu-daily-rewards.forum.page.button_claim');
    const statusClassName = isClaimed ? 'is-claimed' : isExpired ? 'is-expired' : 'is-pending';
    const claimButtonClassName = isClaimed ? 'is-claimed' : isExpired ? 'is-expired' : 'Button--primary';

    return (
      <div className="DailyRewardsCard">
        <div className="DailyRewardsCard-content">
          <div className="DailyRewardsCard-line">
            <div className="DailyRewardsCard-field">
              <span className="DailyRewardsCard-label">
                {app.translator.trans('tu-daily-rewards.forum.page.field_type')}
              </span>
              <span className="DailyRewardsCard-value">{getRewardTypeLabel(record.type)}</span>
            </div>

            <div className="DailyRewardsCard-field">
              <span className="DailyRewardsCard-label">
                {app.translator.trans('tu-daily-rewards.forum.page.field_issued_at')}
              </span>
              <span className="DailyRewardsCard-value">{formatDateTime(record.createdAt)}</span>
            </div>
          </div>

          <div className="DailyRewardsCard-line">
            <div className="DailyRewardsCard-field">
              <span className="DailyRewardsCard-label">
                {app.translator.trans('tu-daily-rewards.forum.page.field_status')}
              </span>
              <span className={`DailyRewardsCard-status ${statusClassName}`}>
                {statusText}
              </span>
            </div>

            <div className="DailyRewardsCard-field">
              <span className="DailyRewardsCard-label">
                {app.translator.trans('tu-daily-rewards.forum.page.field_amount')}
              </span>
              <span className="DailyRewardsCard-value DailyRewardsCard-value--amount">{record.amount || 0}</span>
            </div>

            <div className="DailyRewardsCard-field">
              <span className="DailyRewardsCard-label">
                {app.translator.trans('tu-daily-rewards.forum.page.field_claimed_at')}
              </span>
              <span className="DailyRewardsCard-value">{formatDateTime(record.claimedAt)}</span>
            </div>
          </div>
        </div>

        <div className="DailyRewardsCard-actions">
          <Button
            className={`Button DailyRewardsCard-claimButton ${claimButtonClassName}`}
            onclick={onClaim}
            disabled={isClaimed || isExpired || claiming}
            icon={claiming ? 'fas fa-spinner fa-spin' : false}
          >
            {claimButtonText}
          </Button>
        </div>
      </div>
    );
  }
}
