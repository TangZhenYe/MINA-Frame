import { api_path, app_path, request, service, } from './network'
// 用户接口

// 用户
// 修改账户
const user_update = (params, callback) => {
  let api = "tl_api.php?c=User&a=update"
  request(api, params, callback)
}
// 修改登录密码
const user_update_password = (params, callback) => {
  let api = "tl_api.php?c=User&a=update_password"
  request(api, params, callback)
}
// 详情
const user_detail = (params, callback) => {
  let api = "tl_api.php?c=User&a=detail"
  request(api, params, callback)
}
// 用户数量
const user_num = (params, callback) => {
  let api = "tl_api.php?c=User&a=num"
  request(api, params, callback)
}
// 修改支付密码
const user_pay_password = (params, callback) => {
  let api = "tl_api.php?c=User&a=pay_password"
  request(api, params, callback)
}

module.exports = {
  api_path: api_path,
  app_path: app_path,
  user_update: user_update,
  user_update_password: user_update_password,
  user_detail: user_detail,
  user_num: user_num,
  user_pay_password: user_pay_password,
}