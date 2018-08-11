/*
 小程序格式规范
 跳转页面方法 统一 go+文件夹...+文件 驼峰式命名
 获取接口数据 统一 get+接口名称 驼峰式命名
 tab切换方法 统一 change+切换类型 驼峰式命名
 普通方法 统一 驼峰式命名
*/

// 全局引入dialog组件
import { Dialog } from './components/dialog/dialog'
App({
	Dialog,
	data: {},
	onLaunch () {
	},
	onShow () {
	},
	onHide () {

	},
	onError (msg) {
		console.log(msg)
	},
})