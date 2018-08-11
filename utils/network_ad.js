import { api_path, app_path, request, service, } from './network'

// 广告列表
const ad_lists = (params, callback) => {
  let api = "tl_api.php?c=Ad&a=lists"
  request(api, params, callback)
}

module.exports = {
  api_path: api_path,
  app_path: app_path,
  ad_lists: ad_lists,
}