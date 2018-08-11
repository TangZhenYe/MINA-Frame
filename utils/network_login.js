import { api_path, app_path, request, service, } from './network'
// 登录接口

// 账号密码登录
const login = (params, callback) => {
  let api = "tl_api.php?c=Login&a=login"
  request(api, params, callback)
}
// 忘记密码
const login_reget_password = (params, callback) => {
  let api = "tl_api.php?c=Login&a=reget_password"
  request(api, params, callback)
}
// 小程序登录
const login_xiaochengxu = (params, callback) => {
  let api = "tl_api.php?c=Login&a=login_xiaochengxu"
  request(api, params, callback)
}

module.exports = {
  api_path: api_path,
  app_path: app_path,
  login: login,
  login_reget_password: login_reget_password,
  login_xiaochengxu: login_xiaochengxu,
}