// ******** vue的路由配置文件 ********

import Vue from 'vue';
import VueRouter from 'vue-router';

/**
 * path                           url
 * component                      () => import('../views/login/login.vue')
 * redirect: redirect             redirect
 * name:'router-name'             name
 * meta : {
    layout: ''                   布局名称
    title: 'title'               页面标题
    permission: {
      auth: true,
    },                           权限信息
  },
  children: []
 */

const routes = [
  {
    path: '/',
    component: () => import('../views/Home/index.vue'),
    meta: {},
  },
  {
    path: '/goods',
    component: () => import('../views/Goods/index.vue'),
    meta: {
      layout: 'PanelLayout',
      title: '商品',
      permission: {
        auth: true,
      },
    },
  },
  {
    path: '/login',
    component: () => import('../views/Login/index.vue'),
    meta: {},
  },
];

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
});

export default router;
