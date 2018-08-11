import { api_path, app_path, request, service, } from './network'
// 验证码接口

// 获取验证码
const get_code = (params, callback) => {
  let api = "tl_api.php?c=Code&a=get_code"
  request(api, params, callback)
}

module.exports = {
  api_path: api_path,
  app_path: app_path,
  get_code: get_code,
}