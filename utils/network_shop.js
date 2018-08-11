import { api_path, app_path, request, service, } from './network'
// 商城接口

// 购物车
// 添加
const shop_cart_add = (params, callback) => {
  let api = "tl_api.php?c=ShopCart&a=add"
  request(api, params, callback)
}
// 列表
const shop_cart_lists = (params, callback) => {
  let api = "tl_api.php?c=ShopCart&a=lists"
  request(api, params, callback)
}
// 价格核算
const shop_cart_deal_price = (params, callback) => {
  let api = "tl_api.php?c=ShopCart&a=deal_price"
  request(api, params, callback)
}
// 删除
const shop_cart_delete = (params, callback) => {
  let api = "tl_api.php?c=ShopCart&a=delete"
  request(api, params, callback)
}

// 商品分类
// 列表(包含子分类)
const shop_category_lists = (params, callback) => {
  let api = "tl_api.php?c=ShopCategory&a=lists"
  request(api, params, callback)
}
// 详情
const shop_category_detail = (params, callback) => {
  let api = "tl_api.php?c=ShopCategory&a=detail"
  request(api, params, callback)
}
// 列表(不包含子分类)
const shop_category_get_lists = (params, callback) => {
  let api = "tl_api.php?c=ShopCategory&a=get_lists"
  request(api, params, callback)
}

// 商家信息
// 详情
const shop_config_detail = (params, callback) => {
  let api = "tl_api.php?c=ShopConfig&a=detail"
  request(api, params, callback)
}
// 新增
const shop_config_add = (params, callback) => {
  let api = "tl_api.php?c=ShopConfig&a=add"
  request(api, params, callback)
}
// 让利设置
const shop_config_add_config = (params, callback) => {
  let api = "tl_api.php?c=ShopConfig&a=add_config"
  request(api, params, callback)
}
// 详情(二维码详情？)
const shop_config_qrcode = (params, callback) => {
  let api = "tl_api.php?c=ShopConfig&a=qrcode"
  request(api, params, callback)
}
// 列表
const shop_config_lists = (params, callback) => {
  let api = "tl_api.php?c=ShopConfig&a=lists"
  request(api, params, callback)
}
// 分类列表
const shop_config_CategoryLists = (params, callback) => {
  let api = "tl_api.php?c=ShopConfig&a=CategoryLists"
  request(api, params, callback)
}

// 商家统计
// 商户总数
const shop_count_get_count = (params, callback) => {
  let api = "tl_api.php?c=ShopCount&a=get_count"
  request(api, params, callback)
}

// 商品
// 列表
const shop_goods_lists = (params, callback) => {
  let api = "tl_api.php?c=ShopGoods&a=lists"
  request(api, params, callback)
}
// 详情
const shop_goods_detail = (params, callback) => {
  let api = "tl_api.php?c=ShopGoods&a=detail"
  request(api, params, callback)
}
// 价格属性和库存
const shop_goods_get_goods_price = (params, callback) => {
  let api = "tl_api.php?c=ShopGoods&a=get_goods_price"
  request(api, params, callback)
}
// 评价
const shop_goods_view_lists = (params, callback) => {
  let api = "tl_api.php?c=ShopGoods&a=view_lists"
  request(api, params, callback)
}

// 首页
// 模块
const shop_index_lists = (params, callback) => {
  let api = "tl_api.php?c=ShopIndex&a=lists"
  request(api, params, callback)
}

// 商城订单
// 订单提交
const shop_order_add = (params, callback) => {
  let api = "tl_api.php?c=ShopOrder&a=add"
  request(api, params, callback)
}
// 统一下单
const shop_order_pay = (params, callback) => {
  let api = "tl_api.php?c=ShopOrder&a=pay"
  request(api, params, callback)
}

// 订单支付
const shop_pay_lists = (params, callback) => {
  let api = "tl_api.php?c=ShopPay&a=lists"
  request(api, params, callback)
}

// 物流列表
const shop_shipping_lists = (params, callback) => {
  let api = "tl_api.php?c=ShopShipping&a=lists"
  request(api, params, callback)
}

module.exports = {
  api_path: api_path,
  app_path: app_path,

  shop_cart_add: shop_cart_add,
  shop_cart_lists: shop_cart_lists,
  shop_cart_deal_price: shop_cart_deal_price,
  shop_cart_delete: shop_cart_delete,

  shop_category_lists: shop_category_lists,
  shop_category_detail: shop_category_detail,
  shop_category_get_lists: shop_category_get_lists,

  shop_config_detail: shop_config_detail,
  shop_config_add: shop_config_add,
  shop_config_add_config: shop_config_add_config,
  shop_config_qrcode: shop_config_qrcode,
  shop_config_lists: shop_config_lists,
  shop_config_CategoryLists: shop_config_CategoryLists,

  shop_count_get_count: shop_count_get_count,

  shop_goods_lists: shop_goods_lists,
  shop_goods_detail: shop_goods_detail,
  shop_goods_get_goods_price: shop_goods_get_goods_price,
  shop_goods_view_lists: shop_goods_view_lists,

  shop_index_lists: shop_index_lists,

  shop_order_add: shop_order_add,
  shop_order_pay: shop_order_pay,
  
  shop_pay_lists: shop_pay_lists,

  shop_shipping_lists: shop_shipping_lists,
}