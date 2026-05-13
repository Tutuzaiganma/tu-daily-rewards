import app from 'flarum/forum/app';
import Page from 'flarum/common/components/Page';
import IndexPage from 'flarum/forum/components/IndexPage';
import listItems from 'flarum/common/helpers/listItems';
import DailyRewardsToolbar from './Toolbar';
import DailyRewardsCardList from './RewardCardList';
import DailyRewardsStatusCard from './StatusCard';
import ClaimModel from './ClaimModel';
import { fetchDailyRewardsPayload, fetchDailyRewardsMine, claimDailyRewardSingle, claimDailyRewardAll } from './service';

const REWARD_TYPES = ['post', 'reply', 'view'];
const HISTORY_PAGE_SIZE = 2;

export default class DailyRewards extends Page {
  oninit(vnode) {
    super.oninit(vnode);
    this.bodyClass = 'App--index';

    this.records = [];
    this.statusConfig = this.getDefaultStatusConfig();
    this.filterType = 'all';
    this.loading = true;
    this.statusLoading = true;
    this.refreshing = false;
    this.claimingAll = false;
    this.claimingRecordKeys = {};
    this.errorMessage = '';
    this.historyPageSize = HISTORY_PAGE_SIZE;
    this.currentPage = 1;
    this.hasMoreRecords = false;
    this.loadingMore = false;

    this.loadRecords();
  }

  oncreate(vnode) {
    super.oncreate(vnode);

    app.setTitle(app.translator.trans('tu-daily-rewards.forum.page.title'));
    app.setTitleCount(0);
  }

  toSafeNumber(value) {
    const parsed = Number(value);

    if (Number.isNaN(parsed) || parsed < 0) {
      return 0;
    }

    return parsed;
  }

  normalizeRecord(record) {
    return {
      id: Number(record && record.id ? record.id : 0),
      type: String(record && record.type ? record.type : 'unknown'),
      amount: this.toSafeNumber(record && record.amount ? record.amount : 0),
      claimedAt: record && record.claimedAt ? String(record.claimedAt) : null,
      createdAt: record && record.createdAt ? String(record.createdAt) : null,
    };
  }

  normalizeRewardConfig(config) {
    return {
      enabled: Boolean(config.enabled),
      effectiveEnabled: Boolean(config.effectiveEnabled),
      amount: this.toSafeNumber(config.amount),
      limitEnabled: Boolean(config.limitEnabled),
      limitAmount: this.toSafeNumber(config.limitAmount),
    };
  }

  getDefaultStatusConfig() {
    return {
      global: {
        enabled: false,
        effectiveEnabled: false,
        timezone: '',
      },
      rewards: {
        post: this.normalizeRewardConfig({}),
        reply: this.normalizeRewardConfig({}),
        view: this.normalizeRewardConfig({}),
      },
    };
  }

  normalizeStatusConfig(payload) {
    const source = payload || {};
    const global = source.global || {};
    const rewards = source.rewards || {};

    return {
      global: {
        enabled: Boolean(global.enabled),
        effectiveEnabled: Boolean(global.effectiveEnabled),
        timezone: typeof global.timezone === 'string' ? global.timezone.trim() : '',
      },
      rewards: {
        post: this.normalizeRewardConfig(rewards.post || {}),
        reply: this.normalizeRewardConfig(rewards.reply || {}),
        view: this.normalizeRewardConfig(rewards.view || {}),
      },
    };
  }

  normalizeMinePayload(payload) {
    const source = payload || {};
    const rows = Array.isArray(source.data) ? source.data : [];
    const pagination = source.pagination && typeof source.pagination === 'object' ? source.pagination : {};
    const page = Math.max(1, Math.floor(this.toSafeNumber(pagination.page || 1)));
    const count = Math.floor(this.toSafeNumber(pagination.count || rows.length || this.historyPageSize));
    const total = Math.max(rows.length, Math.floor(this.toSafeNumber(pagination.total)));
    const fallbackHasMore = count > 0 && page * count < total;

    return {
      records: rows.map((row) => this.normalizeRecord(row)),
      pagination: {
        page,
        count,
        total,
        hasMore: typeof pagination.hasMore === 'boolean' ? pagination.hasMore : fallbackHasMore,
      },
    };
  }

  getMineRequestCount(options = {}) {
    if (!options.preserveVisibleCount) {
      return this.historyPageSize;
    }

    const visibleCount = Array.isArray(this.records) ? this.records.length : 0;

    return Math.max(this.historyPageSize, visibleCount);
  }

  syncPaginationState(total) {
    const safeTotal = Math.max(0, Math.floor(this.toSafeNumber(total)));
    const visibleCount = Array.isArray(this.records) ? this.records.length : 0;

    this.currentPage = Math.max(1, Math.ceil(visibleCount / this.historyPageSize));
    this.hasMoreRecords = safeTotal > visibleCount;
  }

  mergeUniqueRecords(existingRecords, incomingRecords) {
    const result = Array.isArray(existingRecords) ? existingRecords.slice() : [];
    const seenIds = {};

    result.forEach((record) => {
      if (record && record.id) {
        seenIds[String(record.id)] = true;
      }
    });

    (Array.isArray(incomingRecords) ? incomingRecords : []).forEach((record) => {
      const key = record && record.id ? String(record.id) : '';
      if (key && seenIds[key]) {
        return;
      }
      if (key) {
        seenIds[key] = true;
      }
      result.push(record);
    });

    return result;
  }

  loadRecords(options = {}) {
    const silent = Boolean(options.silent);
    const mineRequestCount = this.getMineRequestCount(options);

    if (!silent) {
      this.loading = true;
      this.statusLoading = true;
    }
    this.errorMessage = '';

    return fetchDailyRewardsPayload({ page: 1, count: mineRequestCount })
      .then(([mineResult, statusResult]) => {
        if (mineResult.status === 'fulfilled') {
          const minePayload = this.normalizeMinePayload(mineResult.value);
          this.records = minePayload.records;
          this.syncPaginationState(minePayload.pagination.total);
        } else if (!silent) {
          this.records = [];
          this.currentPage = 1;
          this.hasMoreRecords = false;
          this.errorMessage = app.translator.trans('tu-daily-rewards.forum.page.load_error');
        }

        if (statusResult.status === 'fulfilled') {
          const response = statusResult.value;
          this.statusConfig = this.normalizeStatusConfig(response && response.data ? response.data : {});
        } else if (!this.statusConfig) {
          this.statusConfig = this.getDefaultStatusConfig();
        }
      })
      .catch(() => {
        if (!silent) {
          this.records = [];
        }
        this.errorMessage = app.translator.trans('tu-daily-rewards.forum.page.load_error');
      })
      .finally(() => {
        this.loading = false;
        this.statusLoading = false;
        this.loadingMore = false;
        this.refreshing = false;
        this.claimingAll = false;
        this.claimingRecordKeys = {};
        m.redraw();
      });
  }

  handleLoadMore() {
    if (this.loading || this.loadingMore || !this.hasMoreRecords) {
      return;
    }

    const nextPage = this.currentPage + 1;
    this.errorMessage = '';
    this.loadingMore = true;
    m.redraw();

    return fetchDailyRewardsMine({ page: nextPage, count: this.historyPageSize })
      .then((response) => {
        const minePayload = this.normalizeMinePayload(response);
        this.records = this.mergeUniqueRecords(this.records, minePayload.records);
        this.syncPaginationState(minePayload.pagination.total);
      })
      .catch(() => {
        if (!this.records.length) {
          this.errorMessage = app.translator.trans('tu-daily-rewards.forum.page.load_error');
        }
      })
      .finally(() => {
        this.loadingMore = false;
        m.redraw();
      });
  }

  getRecordDateKey(value) {
    if (!value || typeof value !== 'string') {
      return '';
    }

    const normalized = value.includes('T') ? value.replace('T', ' ') : value;
    const matched = normalized.match(/^(\d{4})-(\d{2})-(\d{2})/);

    if (!matched) {
      return '';
    }

    return `${matched[1]}-${matched[2]}-${matched[3]}`;
  }

  getDateKeyByTimezone(date, timezone) {
    if (!timezone || typeof timezone !== 'string') {
      return '';
    }

    try {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });
      const parts = formatter.formatToParts(date);
      const yearPart = parts.find((part) => part.type === 'year');
      const monthPart = parts.find((part) => part.type === 'month');
      const dayPart = parts.find((part) => part.type === 'day');
      const year = yearPart ? yearPart.value : '';
      const month = monthPart ? monthPart.value : '';
      const day = dayPart ? dayPart.value : '';

      if (year && month && day) {
        return `${year}-${month}-${day}`;
      }
    } catch (error) {
      return '';
    }
    return '';
  }

  getTodayTotalsByType(timezone) {
    const totals = {
      post: 0,
      reply: 0,
      view: 0,
    };
    if (!timezone || typeof timezone !== 'string') {
      return totals;
    }

    const todayKey = this.getDateKeyByTimezone(new Date(), timezone);
    if (!todayKey) {
      return totals;
    }

    this.records.forEach((record) => {
      if (!REWARD_TYPES.includes(record.type)) {
        return;
      }

      const recordDateKey = this.getRecordDateKey(record.createdAt);
      if (recordDateKey !== todayKey) {
        return;
      }

      totals[record.type] += this.toSafeNumber(record.amount);
    });

    return totals;
  }

  isRecordExpired(record, timezone) {
    if (!record || record.claimedAt) {
      return false;
    }

    if (!timezone || typeof timezone !== 'string') {
      return false;
    }

    const todayKey = this.getDateKeyByTimezone(new Date(), timezone);
    if (!todayKey) {
      return false;
    }

    const recordDateKey = this.getRecordDateKey(record.createdAt);
    if (!recordDateKey) {
      return false;
    }

    return recordDateKey < todayKey;
  }

  getStatusSummary() {
    const config = this.statusConfig || this.getDefaultStatusConfig();
    const timezone = typeof config.global.timezone === 'string' ? config.global.timezone.trim() : '';
    const totalsByType = this.getTodayTotalsByType(timezone);
    const rowsByType = {};

    REWARD_TYPES.forEach((type) => {
      const rewardConfig = config.rewards[type] || this.normalizeRewardConfig({});
      const current = this.toSafeNumber(totalsByType[type]);
      const isEffective = Boolean(config.global.effectiveEnabled && rewardConfig.effectiveEnabled);
      const target = isEffective && rewardConfig.limitEnabled ? this.toSafeNumber(rewardConfig.limitAmount) : 0;
      const percent = target > 0 ? Math.max(0, Math.min(100, (current / target) * 100)) : 0;

      rowsByType[type] = {
        current,
        target,
        percent,
      };
    });

    return {
      timezone,
      rowsByType,
    };
  }

  getCurrencyName() {
    const value = app.forum ? app.forum.attribute('tu-daily-rewards.currencyName') : '';

    return typeof value === 'string' ? value.trim() : '';
  }

  normalizeClaimResponse(response) {
    const payload = response || {};
    const data = payload.data || {};

    return {
      success: payload.success === true,
      claimedCount: Math.floor(this.toSafeNumber(data.claimedCount)),
      claimedTotal: Math.floor(this.toSafeNumber(data.claimedTotal)),
    };
  }

  showClaimModal(claimedTotal) {
    app.modal.show(ClaimModel, {
      amount: claimedTotal,
      currencyName: this.getCurrencyName(),
    });
  }

  handleRefresh() {
    if (this.refreshing || this.loading) {
      return;
    }

    this.refreshing = true;
    this.loadRecords({ silent: true, preserveVisibleCount: true });
  }

  handleClaimAll() {
    if (this.claimingAll) {
      return;
    }

    const global = this.statusConfig && this.statusConfig.global ? this.statusConfig.global : {};
    const timezone = typeof global.timezone === 'string' ? global.timezone.trim() : '';
    const pendingCount = this.records.filter((record) => !record.claimedAt && !this.isRecordExpired(record, timezone)).length;
    if (!pendingCount) {
      return;
    }

    this.claimingAll = true;
    m.redraw();

    return claimDailyRewardAll()
      .then((response) => {
        const result = this.normalizeClaimResponse(response);
        if (!result.success) {
          return;
        }

        this.showClaimModal(result.claimedTotal);

        return this.loadRecords({ silent: true, preserveVisibleCount: true });
      })
      .catch(() => {})
      .finally(() => {
        this.claimingAll = false;
        m.redraw();
      });
  }

  getRecordKey(record, index) {
    return `${record && record.id ? record.id : 'record'}-${index}`;
  }

  isClaimingRecord(record, index) {
    return Boolean(this.claimingRecordKeys[this.getRecordKey(record, index)]);
  }

  handleClaimRecord(record, index, timezone) {
    if (!record || record.claimedAt || this.isRecordExpired(record, timezone) || this.claimingAll) {
      return;
    }

    const key = this.getRecordKey(record, index);
    if (this.claimingRecordKeys[key]) {
      return;
    }

    this.claimingRecordKeys[key] = true;
    m.redraw();

    return claimDailyRewardSingle(record.id)
      .then((response) => {
        const result = this.normalizeClaimResponse(response);
        if (!result.success) {
          return;
        }

        this.showClaimModal(result.claimedTotal);

        return this.loadRecords({ silent: true, preserveVisibleCount: true });
      })
      .catch(() => {})
      .finally(() => {
        delete this.claimingRecordKeys[key];
        m.redraw();
      });
  }

  getFilteredRecords() {
    if (this.filterType === 'all') {
      return this.records;
    }

    return this.records.filter((record) => record.type === this.filterType);
  }

  view() {
    const statusSummary = this.getStatusSummary();
    const timezone = statusSummary.timezone;
    const pendingCount = this.records.filter((record) => !record.claimedAt && !this.isRecordExpired(record, timezone)).length;
    const filteredRecords = this.getFilteredRecords();

    return (
      <div className="IndexPage">
        {IndexPage.prototype.hero()}

        <div className="container">
          <div className="sideNavContainer">
            <nav className="IndexPage-nav sideNav">
              <ul>{listItems(IndexPage.prototype.sidebarItems().toArray())}</ul>
            </nav>

            <div className="IndexPage-results sideNavOffset">
              <div className="DailyRewardsPage">
                <DailyRewardsToolbar
                  filterType={this.filterType}
                  onFilterChange={(value) => {
                    this.filterType = value;
                  }}
                  refreshing={this.refreshing}
                  onRefresh={() => this.handleRefresh()}
                  pendingCount={pendingCount}
                  claiming={this.claimingAll}
                  onClaimAll={() => this.handleClaimAll()}
                />

                <DailyRewardsStatusCard
                  loading={this.statusLoading}
                  timezone={statusSummary.timezone}
                  rowsByType={statusSummary.rowsByType}
                />

                <DailyRewardsCardList
                  loading={this.loading}
                  loadingMore={this.loadingMore}
                  hasMore={this.hasMoreRecords}
                  errorMessage={this.errorMessage}
                  records={filteredRecords}
                  isExpiredRecord={(record) => this.isRecordExpired(record, timezone)}
                  isClaimingRecord={(record, index) => this.isClaimingRecord(record, index)}
                  onClaimRecord={(record, index) => this.handleClaimRecord(record, index, timezone)}
                  onLoadMore={() => this.handleLoadMore()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
