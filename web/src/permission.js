import router from './router';
import store from './store';
import CONFIG from './configs/config';

router.beforeEach((to, from, next) => {
  let permission = null;
  let userInfo = store.state.user.userInfo;
  // 获取第一个 页面权限信息
  for (let index = to.matched.length - 1; index >= 0; index--) {
    let item = to.matched[index];
    if (item.meta && item.meta.permission) {
      permission = item.meta.permission;
      break;
    }
  }

  if (to.meta && to.meta.title) {
    document.title = `${to.meta.title}`;
  } else {
    document.title = CONFIG.PROJECT_TITLE;
  }

  // 权限对象为空 添加默认值 默认不需要登录
  if (!permission) {
    permission = {
      auth: false,
    };
  }

  // 需要 登录权限的页面
  if (permission.auth) {
    if (!userInfo) {
      return next({ path: '/login', replace: true });
    }
    return next();
  }

  return next();
});
