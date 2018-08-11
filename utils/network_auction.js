import { api_path, app_path, request, service, } from './network'
// 竞拍接口

// 竞拍详情
const auction_item_detail = (params, callback) => {
  let api = "tl_api.php?c=AuctionItem&a=detail"
  request(api, params, callback)
}
// 竞拍记录
const auction_log_add = (params, callback) => {
  let api = "tl_api.php?c=AuctionLog&a=add"
  request(api, params, callback)
}

module.exports = {
  api_path: api_path,
  app_path: app_path,
  auction_item_detail: auction_item_detail,
  auction_log_add: auction_log_add,
}