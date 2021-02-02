import Vue from 'vue'
require('./bootstrap');

import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import vuetify from '@/plugins/vuetify';

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
