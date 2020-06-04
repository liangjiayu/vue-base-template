import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// global components
import './components/index';
//global css
import './styles/index.scss';
// global auth
import './permission';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
