import { api_path, app_path, request, service, } from './network'
// 文章接口

// 文章
// 文章列表
const cms_lists = (params, callback) => {
  let api = "tl_api.php?c=Cms&a=lists"
  request(api, params, callback)
}
// 文章详情
const cms_detail = (params, callback) => {
  let api = "tl_api.php?c=Cms&a=detail"
  request(api, params, callback)
}
// 公告提醒
const cms_get_notice = (params, callback) => {
  let api = "tl_api.php?c=Cms&a=get_notice"
  request(api, params, callback)
}

// 文章分类
// 列表
const cms_category_lists = (params, callback) => {
  let api = "tl_api.php?c=CmsCategory&a=lists"
  request(api, params, callback)
}

module.exports = {
  api_path: api_path,
  app_path: app_path,
  cms_lists: cms_lists,
  cms_detail: cms_detail,
  cms_get_notice: cms_get_notice,
  cms_category_lists: cms_category_lists,
}