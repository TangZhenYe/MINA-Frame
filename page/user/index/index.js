import globalDatas from '../../../utils/globalDatas'
import blend from '../../../utils/blend'

Page(
	blend({
		data: {
			
		},
		onLoad () {
			new getApp().Dialog()
		},
		onShow () {
		},
		onHide () {
		},
		onError (msg) {
			console.log(msg)
		},
	}, globalDatas)
	)