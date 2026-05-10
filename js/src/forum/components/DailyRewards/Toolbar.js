import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';
import ItemList from 'flarum/common/utils/ItemList';
import listItems from 'flarum/common/helpers/listItems';
import Dropdown from 'flarum/common/components/Dropdown';
import Button from 'flarum/common/components/Button';

const FILTER_TYPES = ['all', 'post', 'reply', 'view'];

export default class DailyRewardsToolbar extends Component {
  viewItems(props) {
    const items = new ItemList();
    const current = props.filterType || 'all';
    const onFilterChange = typeof props.onFilterChange === 'function' ? props.onFilterChange : () => {};

    items.add(
      'type',
      <Dropdown
        buttonClassName="Button"
        label={app.translator.trans(`tu-daily-rewards.forum.page.filter_${current}`)}
        accessibleToggleLabel={app.translator.trans('tu-daily-rewards.forum.page.filter_toggle_accessible_label')}
      >
        {FILTER_TYPES.map((type) => {
          const active = current === type;

          return (
            <Button icon={active ? 'fas fa-check' : true} active={active} onclick={() => onFilterChange(type)}>
              {app.translator.trans(`tu-daily-rewards.forum.page.filter_${type}`)}
            </Button>
          );
        })}
      </Dropdown>
    );

    return items;
  }

  actionItems(props) {
    const items = new ItemList();
    const refreshing = Boolean(props.refreshing);
    const claiming = Boolean(props.claiming);
    const pendingCount = Number(props.pendingCount || 0);
    const onRefresh = typeof props.onRefresh === 'function' ? props.onRefresh : () => {};
    const onClaimAll = typeof props.onClaimAll === 'function' ? props.onClaimAll : () => {};

    items.add(
      'refresh',
      <Button
        title={app.translator.trans('tu-daily-rewards.forum.page.refresh')}
        icon={refreshing ? 'fas fa-spinner fa-spin' : 'fas fa-sync'}
        className="Button Button--icon"
        onclick={onRefresh}
        disabled={refreshing}
      />
    );

    items.add(
      'claimAll',
      <Button className="Button Button--primary" onclick={onClaimAll} disabled={claiming || !pendingCount}>
        {app.translator.trans('tu-daily-rewards.forum.page.claim_all')}
      </Button>
    );

    return items;
  }

  view(vnode) {
    const props = vnode.attrs || {};

    return (
      <div className="IndexPage-toolbar DailyRewardsToolbar">
        <ul className="IndexPage-toolbar-view">{listItems(this.viewItems(props).toArray())}</ul>
        <ul className="IndexPage-toolbar-action">{listItems(this.actionItems(props).toArray())}</ul>
      </div>
    );
  }
}
