import globalDatas from '../../../utils/globalDatas'
import blend from '../../../utils/blend'
import network_shop from '../../../utils/network_shop'

Page(
	blend({
		data: {
			shopLists: [], // 商品列表
			selectLists: [], // 筛选出来的商品列表
			categoryLists: [], // 分类列表
			types: ['最新', '销量', '价格'],
			typesId: 0,
			leftCategoryId: '1',
		},
		onLoad () {
			new getApp().Dialog()
			let tempCateId = globalDatas.data.store.cate_id
			if (tempCateId) {
				this.setData({
					typesId: '3',
					leftCategoryId: tempCateId + '',
				})
				this.getCategoryLists()
				this.getLittleCategoryLists(tempCateId)
			}
			this.getShopLists()
		},
		goShopDetail (e) {
			wx.navigateTo({
				url: '../detail/index?goods_id=' + e.currentTarget.dataset.goods_id
			})
		},
		// 获取商品列表
		getShopLists () {
			let that = this
			network_shop.shop_goods_lists({}, r => {
				if (r.status === 10001) {
					that.setData({
						shopLists: r.lists
					})
				}
			})
		},
		// 获取子分类商品列表
		getLittleCategoryLists (cate_id) {
			let that = this
			network_shop.shop_goods_lists({cate_id: cate_id}, r => {
				if (r.status === 10001) {
					that.setData({
						selectLists: r.lists
					})
				}
			})
		},
		// 获取分类列表
		getCategoryLists (first) {
			let that = this
			network_shop.shop_category_lists({}, r=> {
				if (r.status === 10001) {
					that.setData({
						categoryLists: r.lists,
					})
					// 第一次进入
					if (first) {
						that.getLittleCategoryLists(r.lists[0].cate_id)
					}
				}
			})
		},
		// 改变顶部搜索类型
		changeType (e) {	
			let tempId = e.currentTarget.dataset.id
			this.setData({
				typesId: tempId,
			})
			if (tempId === '3' && this.data.categoryLists.length === 0) {
				this.getCategoryLists(1)
			}
		},
		// 改变左边分类
		changeLeftCategory (e) {
			let tempId = e.currentTarget.dataset.cate_id, that = this
			this.setData({
				leftCategoryId: tempId,
			})
			this.getLittleCategoryLists(tempId)
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