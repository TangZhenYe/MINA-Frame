let api_url = 'https://market.tuolve.com/jinshuiqi/web/',
app_url = 'https://market.tuolve.com/jinshuiqi/app/'

//返回API路径
const api_path = () => {
  return api_url
}
//返回app路径
const app_path = () => {
  return app_url
}
// 请求时候 拼接token
function request (url, params, success, fail) {
  wx.showLoading({
    title: '正在加载数据',
  })
  params = params || {}
  if (params.post) {
    params.post = JSON.stringify(params.post)
  }
  wx.getStorage({
    key: 'token',
    success (r) {
      params.token = r.data
      params.token = '47_57174715d130cc5559fbe9bc4534e2ac'
      service(url, params, success, fail)
    }, fail () {
      service(url, params, success, fail)
    }
  })
}

function service (url, params, success, fail) {
  wx.request({
    url: api_url + url,
    data: params,
    method: 'POST',
    header: {
      'content-type': 'application/x-www-form-urlencoded',
    },
    success (res) {
      console.log('success')
      setTimeout(() => {
        wx.hideLoading()
      }, 500)
      if (res.statusCode == 200) {
        success(res.data)
      } else {
        fail()
      }
    }, fail (res) {
      console.log('error')
      setTimeout(() => {
        wx.hideLoading()
      }, 500)
    }
  })
}

export { api_path, app_path, request, service, }