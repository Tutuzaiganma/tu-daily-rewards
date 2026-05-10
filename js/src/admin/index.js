import app from 'flarum/admin/app';
import DailyRewardsSettingsPage from './components/SettingsPage';
import extractText from 'flarum/common/utils/extractText';

const extensionId = 'tu-daily-rewards';

app.initializers.add('tu/daily-rewards', () => {
  const extension = app.data.extensions?.[extensionId];

  if (extension) {
    extension.extra['flarum-extension'].title = extractText(app.translator.trans('tu-daily-rewards.admin.extension_name'));
    extension.description = extractText(app.translator.trans('tu-daily-rewards.admin.extension_description'));
  }

  app.extensionData.for(extensionId).registerPage(DailyRewardsSettingsPage);
});
