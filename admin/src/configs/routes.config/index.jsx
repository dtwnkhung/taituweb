import React from 'react'
import authRoute from './authRoute'

export const publicRoutes = [
    ...authRoute
]

export const protectedRoutes = [
    {
        key: 'baoCaoThongKe',
        path: '/bao-cao-thong-ke',
        component: React.lazy(() => import('views/BaoCaoThongKe')),
        authority: [],
    },
    {
        key: 'quanTriHeThong',
        path: '/quan-tri-he-thong',
        component: React.lazy(() => import('views/QuanTriHeThong')),
        authority: [],
    },
    {
        key: 'quanLyNguoiDung',
        path: '/quan-ly-nguoi-dung',
        component: React.lazy(() => import('views/QuanLyNguoiDung')),
        authority: [],
    },
    {
        key: 'quanLyToChuc',
        path: '/quan-ly-to-chuc',
        component: React.lazy(() => import('views/QuanLyToChuc')),
        authority: [],
    },
    {
        key: 'quanLyBaiViet',
        path: '/quan-ly-bai-viet',
        component: React.lazy(() => import('views/QuanLyBaiViet')),
        authority: [],
    },
    {
        key: 'quanLyDichVu',
        path: '/quan-ly-dich-vu',
        component: React.lazy(() => import('views/QuanLyDichVu')),
        authority: [],
    },
    {
        key: 'quanLySanPham',
        path: '/quan-ly-san-pham',
        component: React.lazy(() => import('views/QuanLySanPham')),
        authority: [],
    },
    {
        key: 'quanLyDonHang',
        path: '/quan-ly-don-hang',
        component: React.lazy(() => import('views/QuanLyDonHang')),
        authority: [],
    },

    /** Example purpose only, please remove */
    {
        key: 'singleMenuItem',
        path: '/single-menu-view',
        component: React.lazy(() => import('views/demo/SingleMenuView')),
        authority: [],
    },
    {
        key: 'collapseMenu.item1',
        path: '/collapse-menu-item-view-1',
        component: React.lazy(() => import('views/demo/CollapseMenuItemView1')),
        authority: [],
    },
    {
        key: 'collapseMenu.item2',
        path: '/collapse-menu-item-view-2',
        component: React.lazy(() => import('views/demo/CollapseMenuItemView2')),
        authority: [],
    },
    {
        key: 'groupMenu.single',
        path: '/group-single-menu-item-view',
        component: React.lazy(() => import('views/demo/GroupSingleMenuItemView')),
        authority: [],
    },
    {
        key: 'groupMenu.collapse.item1',
        path: '/group-collapse-menu-item-view-1',
        component: React.lazy(() => import('views/demo/GroupCollapseMenuItemView1')),
        authority: [],
    },
    {
        key: 'groupMenu.collapse.item2',
        path: '/group-collapse-menu-item-view-2',
        component: React.lazy(() => import('views/demo/GroupCollapseMenuItemView2')),
        authority: [],
    },
]