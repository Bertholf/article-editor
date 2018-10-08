import Vue from 'vue';
import Toastr from 'vue-toastr';
import wysiwyg from 'vue-wysiwyg';
import App from './App.vue';
import store from './store';
import './icons';

require('vue-wysiwyg/dist/vueWysiwyg.css');
require('vue-toastr/src/vue-toastr.scss');

Vue.use(wysiwyg, {}); // config is optional. more below
Vue.use(Toastr);
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
