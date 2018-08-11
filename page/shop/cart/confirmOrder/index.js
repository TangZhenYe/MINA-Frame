import globalDatas from '../../../../utils/globalDatas'
import blend from '../../../../utils/blend'

Page(
	blend({
		data: {
			leaveMessage: '',
			dialog2: false,
			total_goods_price: '',
			share_discount: '',
			shipping_fee: '',
			real_fee: '',
			goodsLists: [],
			cart_id: '',
			addressLists: [],
			dealPrices: [],
			name: '',
			phone: '',
			address: '',
			payPicture: '../../../../static/images/open.png',
			payPicture2: '../../../../static/images/close.png',
			payPicture3: '../../../../static/images/close.png',
			flag: true,
			flag2: true,
			showSelectAddress: false,
			cart_id_str: '',
			address_id: '',
			pay_style: 1,
			is_use_points: 0,
			share_grade_id: 0,
			exchange_price: '',
			exchange_price2: '',
		},
		onLoad () {
			new getApp().Dialog()
		},
		openDialog () {
			this.data.dialog2 = true
		},
		closeDialog () {
			this.data.dialog2 = false
			this.data.leaveMessage = ''
		},
		getLeaveMessage () {
			this.data.dialog2 = false
		},
		getShopCartLists () {
			let that = this
			// that.c_ajax({cart_id_str: that.data.cart_id_str}, 'api.php?&c=ShopCart&a=lists', function (value) {
			// 	if (value.data.status === 10001) {
			// 		for (let v of value.data.lists) {
			// 			that.data.goodsLists.push(v)
			// 		}
			// 	}
			// })
		},
		getAddressDefault () {
			let that = this
			// that.c_ajax({is_receive: 1,}, 'api.php?c=UserAddress&a=address_default', function (value) {
			// 	if (value.data.status === 10001) {
			// 		if (value.data.details.name === null) {
			// 			that.data.showSelectAddress = true
			// 		} else {
			// 			that.data.name = value.data.details.name
			// 			that.data.phone = value.data.details.phone
			// 			that.data.address = value.data.details.address
			// 			that.data.address_id = value.data.details.id
			// 		}
			// 		that.data.getDealPrice()
			// 		that.data.getAlonePrice()
			// 	}
			// })
		},
		getDealPrice () {
			let that = this
			// that.c_ajax({is_use_points: that.is_use_points, cart_id_str: that.cart_id_str, }, 'api.php?c=ShopCart&a=deal_price', function (value) {
			// 	if (value.data.status === 10001) {
			// 		that.data.total_goods_price = value.data.detail.total_goods_price
			// 		that.data.share_discount = value.data.detail.share_discount
			// 		that.data.shipping_fee = value.data.detail.shipping_fee
			// 		that.data.real_fee = value.data.detail.real_fee
			// 		that.data.share_grade_id = Number(value.data.detail.share_grade_id)
			// 		that.data.exchange_price = value.data.detail.exchange_price
			// 	}
			// })
		},
		getAlonePrice () {
			let that = this
			// that.c_ajax({is_use_points: 1, cart_id_str: that.cart_id_str,}, 'api.php?c=ShopCart&a=deal_price', function (value) {
			// 	if (value.data.status === 10001) {
			// 		that.data.exchange_price2 = value.data.detail.points_fee
			// 	}
			// })
		},
		changePay (e, type) {
			this.data.flag = !this.data.flag
			let str = 'static/img/', a = (this.data.flag) ? 'open' : 'close', b = (!this.data.flag) ? 'open': 'close'
			this.data.payPicture = str + a + '.png'
			this.data.payPicture2 = str + b + '.png'
			if (a === 'open') {
				this.data.pay_style = 1
			}
			if (a === 'close') {
				this.data.pay_style = 2
			}
		},
		changePayImage (e) {
			let that = this
			this.data.flag2 = !this.data.flag2
			let str = 'static/img/', a = (this.data.flag2) ? 'close' : 'open'
			this.data.payPicture3 = str + a + '.png'
			if (a === 'open') {
				this.data.is_use_points = 1
			}
			if (a === 'close') {
				this.data.is_use_points = 0
			}
			this.data.getDealPrice()
		},
		buyGoods () {
			let that = this
			let post = {}
			if (that.data.showSelectAddress) {
				that.showDialog('请选择收货地址!')
				return
			}
			// post.pay_style = that.data.pay_style
			// post.address_id = that.data.address_id
			// post.is_use_points = that.data.is_use_points
			// post.msg = that.data.leaveMessage
			// that.c_ajax({post: post, cart_id_lists: that.cart_id_str, }, 'api.php?c=ShopOrder&a=add', function (value) {
			// 	if (value.data.status === 10001) {
			// 		let log_id = value.data.log_id
			// 		let order_id = value.data.order_id
			// 		that.c_ajax({order_id: order_id, log_id: log_id, }, 'api.php?c=ShopOrder&a=pay', function (value) {
			// 			if (value.data.status === 10001) {
			// 				window.location.href = value.data.url
			// 			} else {
			// 				that.showDialog(value.data.status)
			// 			}
			// 		})
			// 	}
			// })
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