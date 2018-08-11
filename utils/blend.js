// 合并封装的全局变量_globalData到子页面对象_pageData去
function joinData (_pageData, _globalData) {
	let args = Array.prototype.slice.call(arguments), i = 1, key, index, ride = typeof args[args.length - 1] == 'boolean' ? args.pop() : true
  if (args.length === 1) {
    _pageData = this; i = 0
  }
  while ((_globalData = args[i++])) {
    for (key in _globalData) {
      if (key in _pageData) {
        if (typeof _pageData[key] === 'object' && typeof _globalData[key] === 'object') {
          for (index in _globalData[key]) {
            _pageData[key][index] = _globalData[key][index]
          }
        }
      } else if (ride || !(key in _pageData)) {
        _pageData[key] = _globalData[key]
      }
    }
  }
  return _pageData
}

const blend = (_pageData, globalDatas) => {
  return joinData(_pageData, globalDatas)
}

module.exports = blend