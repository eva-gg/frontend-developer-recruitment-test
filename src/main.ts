import { createApp } from 'vue';
import { VueQueryPlugin } from '@tanstack/vue-query';

import App from './App.vue';
// import router from './router';

import '@/style/main.scss';

createApp(App)
  .use(VueQueryPlugin)
  .mount('#app');
