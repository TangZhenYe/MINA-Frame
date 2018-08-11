import globalDatas from '../../../utils/globalDatas'
import blend from '../../../utils/blend'
import network_ad from '../../../utils/network_ad'
import network_shop from '../../../utils/network_shop'

Page(
	blend({
		data: {
			swiperLists: [], // 轮播列表
			adLists: [], // 广告列表
			shopLists: [], // 商品列表
			categoryLists: [], // 分类列表
			emptyListsForCategory: [], // 最外层的空数组
			indicatorDots: false,
			indicatorActiveColor: '#666',
			indicatorColor: '#fff',
			autoplay: false,
			interval: 3000,
			duration: 1000,
		},
		onLoad () {
			new getApp().Dialog()
		},
		onShow () {
			let that = this
			// 获取轮播列表
			network_ad.ad_lists({cate_id: 2}, r => {
				if (r.status === 10001) {
					that.setData({
						swiperLists: r.lists
					})
				}
			})
			// 获取广告列表
			network_ad.ad_lists({cate_id: 3}, r => {
				if (r.status === 10001) {
					that.setData({
						adLists: r.lists
					})
				}
			})
			// 获取商品列表
			network_shop.shop_goods_lists({}, r => {
				if (r.status === 10001) {
					that.setData({
						shopLists: r.lists
					})
				}
			})
			// 获取分类列表
			network_shop.shop_category_lists({}, r=> {
				if (r.status === 10001) {
					that.setData({
						categoryLists: r.lists,
					})
					let c = r.lists.length
					c = (c % 8 === 0) ? c % 8 : Math.floor(c / 8) + 1
					for (let i = 0; i < c; i++) {
						that.data.emptyListsForCategory.push(1)
					}
					that.setData({
						emptyListsForCategory: that.data.emptyListsForCategory
					})
				}
			})
		},
		goShopDetail (e) {
			wx.navigateTo({
				url: '../detail/index?goods_id=' + e.currentTarget.dataset.goods_id
			})
		},
		goCategoryIndex (e) {
			Object.assign(globalDatas.data.store, {cate_id: e.currentTarget.dataset.cate_id,})
			wx.switchTab({
				url: '../category/index'
			})
		},
		onHide () {

		},
		onError (msg) {
			console.log(msg)
		},
	}, globalDatas)
	)
