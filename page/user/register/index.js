import globalDatas from '../../../utils/globalDatas'
import blend from '../../../utils/blend'

Page(
	blend({
		data: {
			post: {
				loginname: '',
				password: '',
				neckname: '',
				code: '',
				tuijian_id: '',
			},
		},
		onLoad () {
			new getApp().Dialog()
			
		},
		login () {
			let that = this
			if (!that.post.loginname) {
				that.showDialog('手机号不能为空!')
				return
			}
			let reg = /^1[3|4|5|7|8][0-9]\d{4,8}$/
			if (!(reg.test(that.loginname)) || that.loginname.length !== 11) {
				that.showDialog('请输入正确的手机号!')
				return
			}
			if (!that.post.password) {
				that.showDialog('密码不能为空!')
				return
			}
			that.c_ajax({post: that.post}, 'api.php?&c=Login&a=login', r => {

			})
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