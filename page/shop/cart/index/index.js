import globalDatas from '../../../../utils/globalDatas'
import blend from '../../../../utils/blend'
import network_shop from '../../../../utils/network_shop'


Page(
	blend({
		data: {
			cartLists: [
			{ cart_id: 1, goods_name: '商品名称1', amount: 2, price: 23.00, perIsBlackColor: false, },
			{ cart_id: 2, goods_name: '商品名称2', amount: 2, price: 23.00, perIsBlackColor: false, },
			{ cart_id: 3, goods_name: '商品名称2', amount: 2, price: 23.00, perIsBlackColor: false, },
			{ cart_id: 4, goods_name: '商品名称2', amount: 2, price: 23.00, perIsBlackColor: false, },
			{ cart_id: 5, goods_name: '商品名称2', amount: 2, price: 23.00, perIsBlackColor: false, },
			],
			totalCount: '',
			cart_id_str: '',
			cartIdLists: [],
			total_goods_price: '',
			isPerReturn: false,
			gou: '../../../../static/images/gou.png',
			allIsBlackColor: false, // 是否全选
		},
		onLoad () {
			new getApp().Dialog()
			let t = this, td = t.data
			// network_shop.shop_cart_lists({}, r => {
			// 	if (r.status === 10001) {
			// 		t.setData({
			// 			cartLists: r.lists
			// 		})
			// 	}
			// })
		},
		//重置
		resetList () {
			let that = this.data
			$('.check-box').css('backgroundColor', '#fff')
			$('.check-box-one').each(function() {
				$(this.data).css('backgroundColor', '#fff')
			})
			that.cartIdLists = []
			that.cart_id_str = ''
			that.totalCount = '0.00'
		},
		//点击勾选按钮 包含顶部和下面
		check (e) {
			let t = this, td = t.data, _ = e.currentTarget.dataset
			if (_.str === 'all') {
				if (_.t === 'w') {
					for (let v of td.cartLists) {
						v.perIsBlackColor = true
					}
					t.setData({
						allIsBlackColor: true,
						cartLists: td.cartLists,
						cartIdLists: []
					})
					for (let v of td.cartLists) {
						td.cartIdLists.push(v.cart_id)
					}
					t.setData({
						cartIdLists: td.cartIdLists,
					})
				} else if (_.t === 'b') {
					for (let v of td.cartLists) {
						v.perIsBlackColor = false
					}
					t.setData({
						allIsBlackColor: false,
						cartLists: td.cartLists,
						cartIdLists: [],
					})
				}
			} else if (_.str === 'per') {
				t.goDealPrice(_)
			}
		},
		//计算价格 请求
		goDealPrice (_) {
			let t = this, td = t.data, _cid = _.cart_id
			if (_.t === 'b' + _cid) {
				for (let i = 0; i < td.cartIdLists.length; i++) {
					if (td.cartIdLists[i] === _cid) {
						td.cartIdLists.splice(i, 1)
					}
				}
				t.setData({
					allIsBlackColor: false,
					cartIdLists: td.cartIdLists,
					cart_id_str: td.cartIdLists.join(','),
				})
				for (let v of td.cartLists) {
					if (v.cart_id === _cid) {
						v.perIsBlackColor = false
					}
				}
			} else if (_.t === 'w' + _cid) {
				td.cartIdLists.push(_cid)
				t.setData({
					cartIdLists: td.cartIdLists,
				})
				if (td.cartIdLists.length === td.cartLists.length) {
					t.setData({
						allIsBlackColor: true,
					})
				}
				for (let v of td.cartLists) {
					if (v.cart_id === _cid) {
						v.perIsBlackColor = true
					}
				}
			}
			t.setData({
				cartLists: td.cartLists,
			})
		},
		subNum (e) {
			let t = this, td = t.data, _ = e.currentTarget.dataset
			if (_.amount === 1) {
				t.showDialog('数量至少为1')
				return
			}
			_.amount--
			for (let v of td.cartLists) {
				if (v.cart_id === _.cart_id) {
					v.amount = _.amount
				}
			}
			t.setData({
				cartLists: td.cartLists
			})
			this.editGoodsNumber(_)
		},
		addNum (e) {
			let t = this, td = t.data, _ = e.currentTarget.dataset
			_.amount++
			for (let v of td.cartLists) {
				if (v.cart_id === _.cart_id) {
					v.amount = _.amount
				}
			}
			t.setData({
				cartLists: td.cartLists
			})
			this.editGoodsNumber(_)
		},
		//编辑数量 请求
		editGoodsNumber (_) {
			let t = this, td = t.data
			// that.c_ajax({cart_id: id, num: num, }, 'api.php/ShopCart/add', function (value) {
			// 	if (value.data.status === 10001) {
			// 		that.data.isPerReturn = true
			// 		that.getCartList()
			// 	} else {
			// 		that.showDialog(value.data.msg)
			// 		$(dom).text(num - 1)
			// 	}
			// })
		},
		// 立即购买
		goBuy () {
			if (this.data.cartIdLists.length === 0) {
				this.showDialog('请选择要下单的商品!')
				return
			}
			this.data.cart_id_str = this.data.cartIdLists.join(',')
			wx.navigateTo({
				url: '../confirmOrder/index?cart_id_str=' + this.data.cart_id_str,
			})
		},
		//执行删除
		goDeleteGoods () {
			let t = this, td = t.data

			if (td.cartIdLists.length === 0) {
				t.showDialog('请选择要删除的商品!')
				return
			}
			t.setData({
				cart_id_str: td.cartIdLists.join(',')
			})
		},
		onShow () {
		},
		onReady () {
		},
		onHide () {
		},
		onError (msg) {
			console.log(msg)
		},
	}, globalDatas)
)