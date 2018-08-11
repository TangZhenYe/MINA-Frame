/*!
 * _dialog 组件绑定的对象
 * _compData 组件数据
 * _compEvent 组件方法
 * '_dialog.isShow' 为小程序对象简写
 */

const _compData = {
  '_dialog.isShow': false,
  '_dialog.message': '',
}

const _compEvent = {
  showDialog (msg, duration = 1500) {
    let that = this
    that.setData({
      '_dialog.isShow': true,
      '_dialog.message': msg,
    })
    setTimeout(() => {
      that.setData({
        '_dialog.isShow': false,
      })
    }, duration)
  }
}

// 定义Dialog类
function Dialog () {
  // 从getCurrentPages栈中得到当前页面的对象 curPage
  let allPages = getCurrentPages(), curPage = allPages[allPages.length - 1]
  // 合并方法到 curPage
  Object.assign(curPage, _compEvent)
  // 合并data到 curPage
  curPage.setData(_compData) 
  // 把curPage 放入全局app的_page 方便调用 (可省略)
  this._page = curPage
  return this
}

module.exports = {
  Dialog
}