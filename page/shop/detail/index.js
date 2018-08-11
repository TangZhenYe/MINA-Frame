import globalDatas from '../../../utils/globalDatas'
import blend from '../../../utils/blend'
import network_shop from '../../../utils/network_shop'

Page(
	blend({
		data: {
			goods_id: '',
			goods_obj: {},
			types: ['商品', '商品介绍', '评价'],
			interviewTypes: ['商品介绍', '规格参数', '包装售后'],
			typesId: 0,
			interviewId: 0,
		},
		onLoad (query) {
			new getApp().Dialog()
			let that = this
			console.log(this.data)
			this.setData({
				goods_id: query.goods_id || 16,
			})
			network_shop.shop_goods_detail({id: that.data.goods_id}, r => {
				if (r.status === 10001) {
					that.setData({
						goods_obj: r.detail,
					})
				}
			})
		},
		goShopCart () {
			wx.switchTab({
				url: '../cart/index/index'
			})
		},
		addToCart () {
			let t = this, td = t.data
			network_shop.shop_cart_add({goods_id: td.goods_id}, r => {
				if (r.status === 10001) {
					t.showDialog('已加入购物车')
					return
				} else {
					t.showDialog(r.msg)
					return
				}
			})
		},
		changeType (e) {
			let tempId = e.currentTarget.dataset.id
			this.setData({
				typesId: tempId,
			})
		},
		changeInterView (e) {
			console.log('hellow')
			let tempId = e.currentTarget.dataset.id
			this.setData({
				interviewId: tempId,
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