import { api_path, app_path, request, service, } from './network'
// 区块链接口

// 区块链代币
// 排名
const block_coin_lists_order = (params, callback) => {
  let api = "tl_api.php?c=BlockCoin&a=lists_order"
  request(api, params, callback)
}
// 收支记录
const block_coin_lists = (params, callback) => {
  let api = "tl_api.php?c=BlockCoin&a=lists"
  request(api, params, callback)
}
// 新增代币
const block_coin_add = (params, callback) => {
  let api = "tl_api.php?c=BlockCoin&a=add"
  request(api, params, callback)
}
// 统计数据
const block_count_coin = (params, callback) => {
  let api = "tl_api.php?c=BlockCount&a=coin"
  request(api, params, callback)
}
// 算力的统计
const block_count_pre = (params, callback) => {
  let api = "tl_api.php?c=BlockCount&a=pre"
  request(api, params, callback)
}

// 区块链矿机
// 新增
const block_device_add = (params, callback) => {
  let api = "tl_api.php?c=BlockDevice&a=add"
  request(api, params, callback)
}
// 列表
const block_device_lists = (params, callback) => {
  let api = "tl_api.php?c=BlockDevice&a=lists"
  request(api, params, callback)
}
// 区块链用户
// 数据
const block_user_get_count = (params, callback) => {
  let api = "tl_api.php?c=BlockUser&a=get_count"
  request(api, params, callback)
}

module.exports = {
  api_path: api_path,
  app_path: app_path,
  block_coin_lists_order: block_coin_lists_order,
  block_coin_lists: block_coin_lists,
  block_coin_add: block_coin_add,
  block_count_coin: block_count_coin,
  block_count_pre: block_count_pre,
  block_device_add: block_device_add,
  block_device_lists: block_device_lists,
  block_user_get_count: block_user_get_count,
}