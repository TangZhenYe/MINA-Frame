// 格式化时间
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
// 失败弹框
const showError = (msg, image) => {
  wx.showToast({
    title: msg,
    image: image,
    mask: true
  })
}
// 成功弹框
const showSuccess = msg => {
  wx.showToast({
    title: msg,
    mask: true
  })
}

module.exports = {
  formatTime: formatTime,
  showError: showError,
  showSuccess: showSuccess,
}
