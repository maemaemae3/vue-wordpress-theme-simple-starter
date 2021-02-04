import Vue from 'vue'
import VueMeta from 'vue-meta'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import vuetify from '@/plugins/vuetify';

Vue.use(VueMeta)

require('./bootstrap');

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
