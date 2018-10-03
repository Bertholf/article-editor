import Vue from 'vue';
import Toastr from 'vue-toastr';
import App from './App.vue';
import store from './store';
import './icons';

require('vue-toastr/src/vue-toastr.scss');

Vue.use(Toastr);
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
