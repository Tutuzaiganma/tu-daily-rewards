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

export function fetchDailyRewardsMine() {
  return app.request({
    method: 'GET',
    url: getMineApiUrl(),
  });
}

export function fetchDailyRewardsStatus() {
  return app.request({
    method: 'GET',
    url: getStatusApiUrl(),
  });
}

export function fetchDailyRewardsPayload() {
  return Promise.allSettled([fetchDailyRewardsMine(), fetchDailyRewardsStatus()]);
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
