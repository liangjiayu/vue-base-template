import Vue from 'vue';
import listModule from './list';

Vue.prototype.$servers = {
  listModule,
};
