import app from 'flarum/forum/app';

function getMineApiUrl() {
  return `${app.forum.attribute('apiUrl')}/daily-rewards/mine`;
}

function getStatusApiUrl() {
  return `${app.forum.attribute('apiUrl')}/daily-rewards/status`;
}

function getClaimSingleApiUrl() {
  return `${app.forum.attribute('apiUrl')}/daily-rewards/claim/single`;
}

function getClaimAllApiUrl() {
  return `${app.forum.attribute('apiUrl')}/daily-rewards/claim/all`;
}

function parsePositiveInt(value) {
  const parsed = Number(value);

  if (Number.isInteger(parsed) && parsed > 0) {
    return parsed;
  }

  return null;
}

function buildMineQueryString(params = {}) {
  const query = new URLSearchParams();
  const page = parsePositiveInt(params.page);
  const count = parsePositiveInt(params.count);

  if (page) {
    query.set('page', String(page));
  }

  if (count) {
    query.set('count', String(count));
  }

  const queryString = query.toString();

  return queryString ? `?${queryString}` : '';
}

export function fetchDailyRewardsMine(params = {}) {
  return app.request({
    method: 'GET',
    url: `${getMineApiUrl()}${buildMineQueryString(params)}`,
  });
}

export function fetchDailyRewardsStatus() {
  return app.request({
    method: 'GET',
    url: getStatusApiUrl(),
  });
}

export function fetchDailyRewardsPayload(mineParams = {}) {
  return Promise.allSettled([fetchDailyRewardsMine(mineParams), fetchDailyRewardsStatus()]);
}

export function claimDailyRewardSingle(id) {
  return app.request({
    method: 'POST',
    url: getClaimSingleApiUrl(),
    body: { id },
  });
}

export function claimDailyRewardAll() {
  return app.request({
    method: 'POST',
    url: getClaimAllApiUrl(),
    body: {},
  });
}
