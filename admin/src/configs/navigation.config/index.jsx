import {
	NAV_ITEM_TYPE_TITLE,
	NAV_ITEM_TYPE_COLLAPSE,
	NAV_ITEM_TYPE_ITEM
} from 'constants/navigation.constant'

const navigationConfig = [
	{
		key: 'baoCaoThongKe',
		path: '/bao-cao-thong-ke',
		title: 'Báo cáo thống kê',
		translateKey: '',
		icon: 'report',
		type: NAV_ITEM_TYPE_ITEM,
		authority: [],
		subMenu: []
	},
	{
		key: 'quanTriHeThong',
		path: '/quan-tri-he-thong',
		title: 'Quản trị hệ thống',
		translateKey: '',
		icon: 'system',
		type: NAV_ITEM_TYPE_ITEM,
		authority: [],
		subMenu: []
	},
	{
		key: 'quanLyNguoiDung',
		path: '/quan-ly-nguoi-dung',
		title: 'Quản lý người dùng',
		translateKey: '',
		icon: 'users',
		type: NAV_ITEM_TYPE_ITEM,
		authority: [],
		subMenu: []
	},
	{
		key: 'quanLyToChuc',
		path: '/quan-ly-to-chuc',
		title: 'Quản lý tổ chức',
		translateKey: '',
		icon: 'organization',
		type: NAV_ITEM_TYPE_ITEM,
		authority: [],
		subMenu: []
	},
	{
		key: 'quanLyBaiViet',
		path: '/quan-ly-bai-viet',
		title: 'Quản lý bài viết',
		translateKey: '',
		icon: 'news',
		type: NAV_ITEM_TYPE_ITEM,
		authority: [],
		subMenu: []
	},
	{
		key: 'quanLyDichVu',
		path: '/quan-ly-dich-vu',
		title: 'Quản lý dịch vụ',
		translateKey: '',
		icon: 'services',
		type: NAV_ITEM_TYPE_ITEM,
		authority: [],
		subMenu: []
	},
	{
		key: 'quanLySanPham',
		path: '/quan-ly-san-pham',
		title: 'Quản lý sản phẩm',
		translateKey: '',
		icon: 'singleMenu',
		type: NAV_ITEM_TYPE_ITEM,
		authority: [],
		subMenu: []
	},
	{
		key: 'quanLyDonHang',
		path: '/quan-ly-don-hang',
		title: 'Quản lý đơn hàng',
		translateKey: '',
		icon: 'orders',
		type: NAV_ITEM_TYPE_ITEM,
		authority: [],
		subMenu: []
	},
	// --------------------------------------

	// {
	// 	key: 'singleMenuItem',
	// 	path: '/single-menu-view',
	// 	title: 'Single menu item',
	// 	translateKey: 'nav.singleMenuItem',
	// 	icon: 'singleMenu',
	// 	type: NAV_ITEM_TYPE_ITEM,
	// 	authority: [],
	// 	subMenu: []
	// },
	// {
	// 	key: 'collapseMenu',
	// 	path: '',
	// 	title: 'Collapse Menu',
	// 	translateKey: 'nav.collapseMenu.collapseMenu',
	// 	icon: 'collapseMenu',
	// 	type: NAV_ITEM_TYPE_COLLAPSE,
	// 	authority: [],
	// 	subMenu: [
	// 		{
	// 			key: 'collapseMenu.item1',
	// 			path: '/collapse-menu-item-view-1',
	// 			title: 'Collapse menu item 1',
	// 			translateKey: 'nav.collapseMenu.item1',
	// 			icon: '',
	// 			type: NAV_ITEM_TYPE_ITEM,
	// 			authority: [],
	// 			subMenu: []
	// 		},
	// 		{
	// 			key: 'collapseMenu.item2',
	// 			path: '/collapse-menu-item-view-2',
	// 			title: 'Collapse menu item 2',
	// 			translateKey: 'nav.collapseMenu.item2',
	// 			icon: '',
	// 			type: NAV_ITEM_TYPE_ITEM,
	// 			authority: [],
	// 			subMenu: []
	// 		},
	// 	]
	// },
	// {
	// 	key: 'groupMenu',
	// 	path: '',
	// 	title: 'Group Menu',
	// 	translateKey: 'nav.groupMenu.groupMenu',
	// 	icon: '',
	// 	type: NAV_ITEM_TYPE_TITLE,
	// 	authority: [],
	// 	subMenu: [
	// 		{
	// 			key: 'groupMenu.single',
	// 			path: '/group-single-menu-item-view',
	// 			title: 'Group single menu item',
	// 			translateKey: 'nav.groupMenu.single',
	// 			icon: 'groupSingleMenu',
	// 			type: NAV_ITEM_TYPE_ITEM,
	// 			authority: [],
	// 			subMenu: []
	// 		},
	// 		{
	// 			key: 'groupMenu.collapse',
	// 			path: '',
	// 			title: 'Group collapse menu',
	// 			translateKey: 'nav.groupMenu.collapse.collapse',
	// 			icon: 'groupCollapseMenu',
	// 			type: NAV_ITEM_TYPE_COLLAPSE,
	// 			authority: [],
	// 			subMenu: [
	// 				{
	// 					key: 'groupMenu.collapse.item1',
	// 					path: '/group-collapse-menu-item-view-1',
	// 					title: 'Menu item 1',
	// 					translateKey: 'nav.groupMenu.collapse.item1',
	// 					icon: '',
	// 					type: NAV_ITEM_TYPE_ITEM,
	// 					authority: [],
	// 					subMenu: []
	// 				},
	// 				{
	// 					key: 'groupMenu.collapse.item2',
	// 					path: '/group-collapse-menu-item-view-2',
	// 					title: 'Menu item 2',
	// 					translateKey: 'nav.groupMenu.collapse.item2',
	// 					icon: '',
	// 					type: NAV_ITEM_TYPE_ITEM,
	// 					authority: [],
	// 					subMenu: []
	// 				},
	// 			]
	// 		}
	// 	]
	// }
]

export default navigationConfig