import Vue from 'vue';
import axios from 'axios';
import { Loading, Message } from 'element-ui';
import CONFIG from '../configs/config';

let loadingInstance = null;

const configs = {
  baseURL: CONFIG.API_URL,
  // withCredentials: true,
};

const _axios = axios.create(configs);

const throwError = (option = {}) => {
  let error = Object.assign({}, option);
  // 显示错误提示
  if (option.__config.showErrorMsg) {
    Message.error(error.msg);
  }
  throw error;
};

// 网络请求前 拦截器
_axios.interceptors.request.use(
  (config) => {
    return config;
  },
  () => {}
);

// 网络请求返回 拦截器
_axios.interceptors.response.use(
  (response) => {
    let res = response.data;
    // 关闭加载UI
    if (response.config.__config.showLoading && loadingInstance) {
      loadingInstance.close();
    }
    if (!res.code) {
      throwError({
        code: '9999',
        msg: '服务端未返回 code 字段！',
        response: res,
        __config: response.config.__config,
      });
    }
    if (![20000].includes(res.code)) {
      throwError({
        code: res.code,
        msg: res.msg || '服务端程序异常',
        response: res,
        __config: response.config.__config,
      });
    }
    return res;
  },
  (error) => {
    if (error.config.__config.showLoading && loadingInstance) {
      loadingInstance.close();
    }
    throwError({
      code: '9999',
      msg: error.message || '网络异常',
      response: error,
      __config: error.config.__config,
    });
  }
);

const request = (url = '', data = {}, config = {}) => {
  let __config = Object.assign(
    {
      method: 'post',
      showLoading: true,
      showErrorMsg: true,
    },
    config
  );

  let sendKey = __config.method === 'get' ? 'params' : 'data';

  if (__config.showLoading) {
    loadingInstance = Loading.service();
  }

  return _axios({
    url: url,
    [sendKey]: data,
    method: __config.method,
    __config,
  });
};

Vue.prototype.$request = request;

export default request;
