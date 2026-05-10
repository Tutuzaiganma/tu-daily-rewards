import app from 'flarum/admin/app';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';
import Switch from 'flarum/common/components/Switch';
import SetTimeZone from './SetTimeZone';
import RewardConfigPanel from './RewardConfigPanel';

const EXTENSION_ID = 'tu-daily-rewards';

const PRIMARY_TABS = [
  { id: 'global', icon: 'fas fa-globe' },
  { id: 'rewards', icon: 'fas fa-gift' },
];

const REWARD_TABS = [
  { id: 'post', icon: 'fas fa-pen-alt' },
  { id: 'reply', icon: 'fas fa-reply' },
  { id: 'view', icon: 'fas fa-eye' },
];

export default class DailyRewardsSettingsPage extends ExtensionPage {
  oninit(vnode) {
    super.oninit(vnode);
    this.activePrimaryTab = 'global';
    this.activeRewardTab = 'post';
  }

  content() {
    return m('.DailyRewardsSettingsPage', [
      m('.container', [
        m('.DailyRewardsSettingsPage-shell', [
          m('.DailyRewardsSettingsPage-layout', [
            m(
              '.DailyRewardsSettingsPage-sidebar',
              PRIMARY_TABS.map((tab) =>
                m(
                  'button.Button',
                  {
                    type: 'button',
                    className: `DailyRewardsSettingsPage-sidebarItem ${
                      this.activePrimaryTab === tab.id ? 'active' : ''
                    }`,
                    onclick: () => {
                      this.activePrimaryTab = tab.id;
                    },
                  },
                  [
                    m(`i.icon.${tab.icon}`),
                    m('span', app.translator.trans(`tu-daily-rewards.admin.tabs.${tab.id}`)),
                  ]
                )
              )
            ),
            m('.DailyRewardsSettingsPage-main', [m('.DailyRewardsSettingsPage-mainCard', [this.renderCurrentTab()])]),
          ]),
          m('.DailyRewardsSettingsPage-shellActions', [this.submitButton()]),
        ]),
      ]),
    ]);
  }

  renderCurrentTab() {
    if (this.activePrimaryTab === 'global') {
      const timezoneValue = this.setting(`${EXTENSION_ID}.timezone`, '')();
      const hasTimezone = typeof timezoneValue === 'string' && timezoneValue.trim() !== '';
      const globalEnabledSetting = this.setting(`${EXTENSION_ID}.enabled`, '0');
      let globalEnabled = globalEnabledSetting() === '1';

      if (!hasTimezone && globalEnabled) {
        globalEnabledSetting('0');
        globalEnabled = false;
      }

      return m('.DailyRewardsSettingsPage-section', [
        m('.Form', [
          m('.Form-group', [
            m('label', app.translator.trans('tu-daily-rewards.admin.fields.global_switch_label')),
            m('.helpText', app.translator.trans('tu-daily-rewards.admin.fields.global_switch_help')),
            m(
              Switch,
              {
                state: globalEnabled,
                onchange: (value) => {
                  if (value && !hasTimezone) {
                    globalEnabledSetting('0');
                    return;
                  }

                  globalEnabledSetting(value ? '1' : '0');
                },
              },
              globalEnabled
                ? app.translator.trans('tu-daily-rewards.admin.switch.enabled')
                : app.translator.trans('tu-daily-rewards.admin.switch.disabled')
            ),
            !hasTimezone
              ? m(
                  '.helpText',
                  app.translator.trans('tu-daily-rewards.admin.validation.global_switch_requires_timezone')
                )
              : null,
          ]),
          SetTimeZone.call(this),
        ]),
      ]);
    }

    const activeRewardTab = REWARD_TABS.find((tab) => tab.id === this.activeRewardTab);

    return m('.DailyRewardsSettingsPage-section', [
      m(
        '.DailyRewardsSettingsPage-rewardTabs',
        REWARD_TABS.map((tab) =>
          m(
            'button.Button',
            {
              type: 'button',
              className: `DailyRewardsSettingsPage-rewardTab ${
                this.activeRewardTab === tab.id ? 'active' : ''
              }`,
              onclick: () => {
                this.activeRewardTab = tab.id;
              },
            },
            [
              m(`i.icon.${tab.icon}`),
              m('span', app.translator.trans(`tu-daily-rewards.admin.reward_tabs.${tab.id}`)),
            ]
          )
        )
      ),
      m('.DailyRewardsSettingsPage-rewardPanel', [
        RewardConfigPanel.call(this, {
          rewardType: this.activeRewardTab,
          rewardLabel: activeRewardTab
            ? app.translator.trans(`tu-daily-rewards.admin.reward_tabs.${activeRewardTab.id}`)
            : '',
        }),
      ]),
    ]);
  }
}
