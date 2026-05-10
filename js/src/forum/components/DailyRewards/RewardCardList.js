import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import RewardRecordCard from './RewardRecordCard';

export default class DailyRewardsCardList extends Component {
  view(vnode) {
    const props = vnode.attrs || {};
    const records = Array.isArray(props.records) ? props.records : [];
    const isExpiredRecord = typeof props.isExpiredRecord === 'function' ? props.isExpiredRecord : () => false;
    const onClaimRecord = typeof props.onClaimRecord === 'function' ? props.onClaimRecord : () => {};
    const isClaimingRecord = typeof props.isClaimingRecord === 'function' ? props.isClaimingRecord : () => false;

    if (props.loading) {
      return (
        <div className="DailyRewardsCardList DailyRewardsCardList--state">
          <LoadingIndicator />
        </div>
      );
    }

    if (props.errorMessage) {
      return (
        <div className="DailyRewardsCardList DailyRewardsCardList--state">
          <div className="DailyRewardsState DailyRewardsState--error">{props.errorMessage}</div>
        </div>
      );
    }

    if (!records.length) {
      return (
        <div className="DailyRewardsCardList DailyRewardsCardList--state">
          <div className="DailyRewardsState">
            {app.translator.trans('tu-daily-rewards.forum.page.empty_records')}
          </div>
        </div>
      );
    }

    return (
      <div className="DailyRewardsCardList">
        {records.map((record, index) => (
          <RewardRecordCard
            key={`${record.id || 'record'}-${index}`}
            record={record}
            expired={isExpiredRecord(record)}
            claiming={isClaimingRecord(record, index)}
            onClaim={() => onClaimRecord(record, index)}
          />
        ))}
      </div>
    );
  }
}
