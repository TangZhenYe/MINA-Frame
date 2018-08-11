import { api_path, app_path, request, service, } from './network'
// 商家接口

// 商家余额
// 获取余额
const admin_account_get_account = (params, callback) => {
  let api = "tl_api.php?c=AdminShopAccount&a=get_account"
  request(api, params, callback)
}
// 提现
const admin_account_add = (params, callback) => {
  let api = "tl_api.php?c=AdminShopAccount&a=add"
  request(api, params, callback)
}
// 获得冻结余额
const admin_account_get_dongjie = (params, callback) => {
  let api = "tl_api.php?c=AdminShopAccount&a=get_dongjie"
  request(api, params, callback)
}

// 商家管理
// 订单列表
const admin_order_lists = (params, callback) => {
  let api = "tl_api.php?c=AdminShopOrder&a=lists"
  request(api, params, callback)
}
// 交易明细
const admin_order_order_log = (params, callback) => {
  let api = "tl_api.php?c=AdminShopOrder&a=order_log"
  request(api, params, callback)
}
// 快递列表
const admin_order_kuaidi_lists = (params, callback) => {
  let api = "tl_api.php?c=AdminShopOrder&a=kuaidi_lists"
  request(api, params, callback)
}
// 发货
const admin_order_shipping_action = (params, callback) => {
  let api = "tl_api.php?c=AdminShopOrder&a=order_shipping_action"
  request(api, params, callback)
}

// 商家付款
// 付款
const admin_pay_pay = (params, callback) => {
  let api = "tl_api.php?c=AdminShopPay&a=pay"
  request(api, params, callback)
}

// 商家提现
// 提现
const admin_tixian_add = (params, callback) => {
  let api = "tl_api.php?c=AdminShopTixian&a=add"
  request(api, params, callback)
}
// 提现列表
const admin_tixian_lists = (params, callback) => {
  let api = "tl_api.php?c=AdminShopTixian&a=lists"
  request(api, params, callback)
}

module.exports = {
  api_path: api_path,
  app_path: app_path,
  admin_account_get_account: admin_account_get_account,
  admin_account_add: admin_account_add,
  admin_account_get_dongjie: admin_account_get_dongjie,
  admin_order_lists: admin_order_lists,
  admin_order_order_log: admin_order_order_log,
  admin_order_kuaidi_lists: admin_order_kuaidi_lists,
  admin_order_shipping_action: admin_order_shipping_action,
  admin_pay_pay: admin_pay_pay,
  admin_tixian_add: admin_tixian_add,
  admin_tixian_lists: admin_tixian_lists,
}