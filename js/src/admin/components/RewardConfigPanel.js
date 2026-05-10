import app from 'flarum/admin/app';
import Switch from 'flarum/common/components/Switch';

const REWARD_FIELD_MAP = {
  post: {
    enabled: 'post_enabled',
    amount: 'post_reward_amount',
    limitEnabled: 'post_limit_enabled',
    limitAmount: 'post_limit_amount',
    amountHelpKey: 'tu-daily-rewards.admin.fields.reward_amount_help.post',
  },
  reply: {
    enabled: 'reply_enabled',
    amount: 'reply_reward_amount',
    minChars: 'reply_min_chars',
    limitEnabled: 'reply_limit_enabled',
    limitAmount: 'reply_limit_amount',
    amountHelpKey: 'tu-daily-rewards.admin.fields.reward_amount_help.reply',
  },
  view: {
    enabled: 'view_enabled',
    amount: 'view_reward_amount',
    limitEnabled: 'view_limit_enabled',
    limitAmount: 'view_limit_amount',
    amountHelpKey: 'tu-daily-rewards.admin.fields.reward_amount_help.view',
  },
};

export default function RewardConfigPanel({
  extensionId = 'tu-daily-rewards',
  rewardType,
  rewardLabel,
} = {}) {
  const config = REWARD_FIELD_MAP[rewardType];

  if (!config) return null;

  const enabledSetting = this.setting(`${extensionId}.${config.enabled}`, '0');
  const amountSetting = this.setting(`${extensionId}.${config.amount}`);
  const minCharsSetting = rewardType === 'reply' ? this.setting(`${extensionId}.${config.minChars}`) : null;
  const limitEnabledSetting = this.setting(`${extensionId}.${config.limitEnabled}`, '0');
  const limitAmountSetting = this.setting(`${extensionId}.${config.limitAmount}`);
  const amountValue = amountSetting();
  const hasAmount = typeof amountValue === 'string' ? amountValue.trim() !== '' : Boolean(amountValue);
  let rewardEnabled = enabledSetting() === '1';
  const limitEnabled = limitEnabledSetting() === '1';

  if (!hasAmount && rewardEnabled) {
    enabledSetting('0');
    rewardEnabled = false;
  }

  return m('.Form', [
    m('.Form-group', [
      m(
        'label',
        app.translator.trans('tu-daily-rewards.admin.fields.reward_switch_label', { reward: rewardLabel })
      ),
      m('.helpText', app.translator.trans('tu-daily-rewards.admin.fields.reward_switch_help')),
      m(
        Switch,
        {
          state: rewardEnabled,
          onchange: (value) => {
            if (value && !hasAmount) {
              enabledSetting('0');
              return;
            }

            enabledSetting(value ? '1' : '0');
          },
        },
        rewardEnabled
          ? app.translator.trans('tu-daily-rewards.admin.switch.enabled')
          : app.translator.trans('tu-daily-rewards.admin.switch.disabled')
      ),
      !hasAmount
        ? m(
            '.helpText',
            app.translator.trans('tu-daily-rewards.admin.validation.reward_switch_requires_amount', {
              reward: rewardLabel,
            })
          )
        : null,
    ]),
    m('.Form-group', [
      m(
        'label',
        app.translator.trans('tu-daily-rewards.admin.fields.reward_amount_label', { reward: rewardLabel })
      ),
      m('.helpText', app.translator.trans(config.amountHelpKey)),
      m('input.FormControl', {
        type: 'number',
        min: '0',
        step: '1',
        placeholder: app.translator.trans('tu-daily-rewards.admin.fields.reward_amount_placeholder'),
        bidi: amountSetting,
      }),
    ]),
    rewardType === 'reply'
      ? m('.Form-group.DailyRewardsSettingsPage-replyMinCharsGroup', [
          m('label', app.translator.trans('tu-daily-rewards.admin.fields.reply_min_chars_label')),
          m('.helpText', app.translator.trans('tu-daily-rewards.admin.fields.reply_min_chars_help')),
          m('input.FormControl', {
            type: 'number',
            min: '0',
            step: '1',
            placeholder: app.translator.trans('tu-daily-rewards.admin.fields.reply_min_chars_placeholder'),
            bidi: minCharsSetting,
          }),
        ])
      : null,
    m('.Form-group', [
      m(
        'label',
        app.translator.trans('tu-daily-rewards.admin.fields.reward_limit_label', { reward: rewardLabel })
      ),
      m('.helpText', app.translator.trans('tu-daily-rewards.admin.fields.reward_limit_help')),
      m(
        Switch,
        {
          state: limitEnabled,
          onchange: (value) => limitEnabledSetting(value ? '1' : '0'),
        },
        limitEnabled
          ? app.translator.trans('tu-daily-rewards.admin.switch.enabled')
          : app.translator.trans('tu-daily-rewards.admin.switch.disabled')
      ),
      limitEnabled
        ? m('input.FormControl', {
            type: 'number',
            min: '0',
            step: '1',
            placeholder: app.translator.trans('tu-daily-rewards.admin.fields.reward_limit_placeholder'),
            bidi: limitAmountSetting,
          })
        : null,
    ]),
  ]);
}
