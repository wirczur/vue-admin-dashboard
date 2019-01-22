import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import Snotify from 'vue-snotify';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// import ApexCharts from 'apexcharts';
import App from './App.vue';
import router from './router';
import store from './store';

import 'flat-ui-colors-helper/flat-ui-colors.css';
import './styles.scss';
import '@/assets/style/test.css';
import '@/assets/style/main.sass';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

library.add(fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(BootstrapVue);
Vue.use(Snotify);
// Vue.use(ApexCharts);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render(h) { return h(App); },
}).$mount('#app');
