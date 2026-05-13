import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import Button from 'flarum/common/components/Button';
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

    if (props.errorMessage && !records.length) {
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

    const hasMore = Boolean(props.hasMore);
    const loadingMore = Boolean(props.loadingMore);
    const onLoadMore = typeof props.onLoadMore === 'function' ? props.onLoadMore : () => {};

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

        {hasMore ? (
          <div className="DailyRewardsCardList-loadMore">
            <Button
              className="Button DailyRewardsCardList-loadMoreButton"
              onclick={onLoadMore}
              disabled={loadingMore}
              loading={loadingMore}
            >
              {app.translator.trans('tu-daily-rewards.forum.page.load_more')}
            </Button>
          </div>
        ) : null}
      </div>
    );
  }
}
