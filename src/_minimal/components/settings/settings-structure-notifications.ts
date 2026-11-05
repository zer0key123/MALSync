import { ConfObj } from '../../../_provider/definitions';
import SettingsGeneral from './settings-general.vue';
import SettingsHr from './settings-hr.vue';
import { notificationsSection } from './settings-structure-estimation';

export const notifications: ConfObj[] = [
  {
    key: 'hr',
    title: () => api.storage.lang('settings_progress'),
    component: SettingsHr,
  },
  {
    key: 'syncNotifications',
    title: () => api.storage.lang('settings_SyncNotifications'),
    props: {
      component: 'checkbox',
      option: 'syncNotifications',
    },
    component: SettingsGeneral,
  },
  ...notificationsSection,
];
