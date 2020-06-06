import _ from 'lodash';

/**
 *  获取本地的数据
 * @param {string} keyPath 用$$做路径分割
 * @param {any} defaultValue 路径读出的默认值
 * @returns
 */
const getStore = (keyPath, defaultValue) => {
  if (!keyPath) {
    return;
  }
  let keyArr = keyPath.split('$$');
  let key = keyArr[0];
  let path = keyArr[1];
  let data = window.localStorage.getItem(key);
  try {
    JSON.parse(data);
  } catch (e) {
    data = JSON.stringify(data);
  }
  data = JSON.parse(data);
  if (typeof data === 'object' && path && data) {
    return _.get(data, path, defaultValue);
  } else {
    return data ? data : defaultValue;
  }
};

/**
 *  获取缓存的数据
 * @param {string} keyPath 用$$做路径分割
 * @param {any} defaultValue 路径读出的默认值
 * @returns
 */
const getSession = (keyPath, defaultValue) => {
  if (!keyPath) {
    return;
  }
  let keyArr = keyPath.split('$$');
  let key = keyArr[0];
  let path = keyArr[1];
  let data = window.sessionStorage.getItem(key);
  try {
    JSON.parse(data);
  } catch (e) {
    data = JSON.stringify(data);
  }
  data = JSON.parse(data);
  if (typeof data === 'object' && path && data) {
    return _.get(data, path, defaultValue);
  } else {
    return data ? data : defaultValue;
  }
};

/**
 *  存储缓存
 * @param {string} keyPath  用$$做路径分割
 * @param {any} value
 */
const setStore = (keyPath, value) => {
  if (!keyPath || !value) {
    return;
  }
  let keyArr = keyPath.split('$$');
  let key = keyArr[0];
  let path = keyArr[1];
  let data = getSession(key);
  // 如果元数据非复合类型或不存在，直接覆盖值
  if (typeof data === 'object' && path && data) {
    _.set(data, path, value);
  } else {
    data = value;
  }
  data = JSON.stringify(data);
  window.localStorage.setItem(key, data);
};

/**
 *  存储缓存
 * @param {string} keyPath  用$$做路径分割
 * @param {any} value
 */
const setSession = (keyPath, value) => {
  if (!keyPath || !value) {
    return;
  }
  let keyArr = keyPath.split('$$');
  let key = keyArr[0];
  let path = keyArr[1];
  let data = getSession(key);
  // 如果元数据非复合类型或不存在，直接覆盖值
  if (typeof data === 'object' && path && data) {
    _.set(data, path, value);
  } else {
    data = value;
  }
  data = JSON.stringify(data);
  window.sessionStorage.setItem(key, data);
};

/**
 * 刪除對應key的本地數據
 *
 * @param {String} key
 * @returns
 */
const removeStore = (key) => {
  if (!key) return;
  window.localStorage.removeItem(key);
};

/**
 * 刪除對應key的本地數據
 *
 * @param {String} key
 * @returns
 */
const removeSession = (key) => {
  if (!key) return;
  window.sessionStorage.removeItem(key);
};

const clearStore = () => {
  window.localStorage.clear();
};

const clearSession = () => {
  window.sessionStorage.clear();
};

export {
  getStore,
  getSession,
  setStore,
  setSession,
  removeStore,
  removeSession,
  clearStore,
  clearSession,
};
