import { createApp } from 'vue';
import { VueQueryPlugin } from '@tanstack/vue-query';
import { createPinia } from 'pinia';

import App from '@/App.vue';
import router from '@/router';

import '@/style/main.scss';

const pinia = createPinia();

createApp(App)
  .use(router)
  .use(VueQueryPlugin)
  .use(pinia)
  .mount('#app');
