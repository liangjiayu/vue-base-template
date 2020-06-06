import Vue from 'vue';
import CONFIG from '../configs/config';

function _get(object = {}, path, defaultValue) {
  if (!object || !path) {
    return;
  }
  let result = undefined;
  let pathArray = path.split('.');

  pathArray.find((key) => {
    if (!object) {
      return true;
    }
    object = object[key];
  });

  result = object ? object : defaultValue;
  return result;
}

function _set(object = {}, path, value) {
  if (!path) {
    return object;
  }
  if (value === undefined) {
    return object;
  }

  let nested = object;

  let pathArray = path.split('.');
  pathArray.map((key, index) => {
    if (index === pathArray.length - 1) {
      nested[key] = value;
      return;
    }
    if (!nested[key]) {
      nested[key] = {};
    }
    nested = nested[key];
  });

  return object;
}

class Storage {
  constructor(key) {
    this.key = key;
    this.baseData = {};
    this.init();
  }

  init() {
    let data = window.localStorage.getItem(this.key);
    if (!data) {
      window.localStorage.setItem(this.key, JSON.stringify(this.baseData));
    } else {
      try {
        data = JSON.parse(data);
      } catch (error) {
        data = JSON.parse(JSON.stringify(data));
      }
      this.baseData = data;
    }
  }

  get(path = '', defaultValue) {
    if (!path) {
      return undefined;
    }
    return _get(this.baseData, path, defaultValue);
  }

  set(path = '', value) {
    if (!path) {
      return;
    }
    this.baseData = _set(this.baseData, path, value);
    window.localStorage.setItem(this.key, JSON.stringify(this.baseData));
  }

  clearAll() {
    this.baseData = {};
    window.localStorage.setItem(this.key, JSON.stringify(this.baseData));
  }
}

let _Storage = new Storage(CONFIG.STORAGE_KEY);

window.$storage = _Storage;
Vue.prototype.$storage = _Storage;

export default _Storage;
