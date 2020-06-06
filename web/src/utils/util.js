import Schema from 'async-validator';

// https://github.com/yiminghe/async-validator
/**
 * 检验对象
 * @param {object} data 对象
 * @param {object} rules 规则
 * @param {object} options 选项
 * @returns {Promise} { errors, fields }
 */
export function asyncValidate(data = {}, rules = {}, options = {}) {
  let validate = new Schema(rules);
  return validate.validate(data, options);
}
