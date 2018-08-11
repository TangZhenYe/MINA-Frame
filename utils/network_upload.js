import { api_path, app_path, request, service, } from './network'
// 文件上传接口

// 上传
const upload = (params, callback) => {
  let api = "tl_api.php?c=File&a=upload"
  request(api, params, callback)
}

module.exports = {
  api_path: api_path,
  app_path: app_path,
  upload: upload,
}