import request from '../plugins/axios';

export function getList(...arg) {
  return request('/mock/dev-api/table/list', ...arg);
}

export function addList(...arg) {
  return request('/mock/dev-api/table/create', ...arg);
}

export function deleteList(...arg) {
  return request('/mock/dev-api/table/delete', ...arg);
}

export function upDateList(...arg) {
  return request('/mock/dev-api/table/update', ...arg);
}

export default {
  getList,
  addList,
  deleteList,
  upDateList,
};
