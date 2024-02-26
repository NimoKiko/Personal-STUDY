import component from 'element-plus/es/components/tree-select/src/tree-select-option.mjs'

export const constantRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录', // 菜单需要的标题
      hidden: true, // 是否隐藏标题 true | false
    },
  },
  {
    path: '/',
    redirect: '/home',
    name: 'layout',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '',
      hidden: false, // 是否隐藏标题 true | false
    },
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          hidden: false, // 是否隐藏标题 true | false
          icon: 'HomeFilled', // 图标名称
        },
      },
    ],
  },
  {
    path: '/screen',
    component: () => import('@/views/screen/index.vue'),
    name: 'screen',
    meta: {
      title: '数据大屏',
      hidden: false,
      icon: 'Platform',
    },
  },
  {
    path: '/acl',
    component: () => import('@/layout/index.vue'),
    name: 'acl',
    meta: {
      title: '权限管理',
      hidden: false,
      icon: 'Lock',
    },
    redirect: '/acl/user',
    children: [
      {
        path: '/acl/user',
        component: () => import('@/views/acl/user/index.vue'),
        name: 'user',
        meta: {
          title: '用户管理',
          hidden: false,
          icon: 'User',
        },
      },
      {
        path: '/acl/role',
        component: () => import('@/views/acl/role/index.vue'),
        name: 'role',
        meta: {
          title: '角色管理',
          hidden: false,
          icon: 'Avatar',
        },
      },
      {
        path: '/acl/permission',
        component: () => import('@/views/acl/permission/index.vue'),
        name: 'permission',
        meta: {
          title: '菜单管理',
          hidden: false,
          icon: 'Monitor',
        },
      },
    ],
  },
  {
    path: '/product',
    component: () => import('@/layout/index.vue'),
    name: 'product',
    meta: {
      title: '产品管理',
      hidden: false,
      icon: 'Goods',
    },
    redirect: '/product/brand', // 重定向到子路由
    children: [
      {
        path: '/product/brand',
        name: 'brand',
        component: () => import('@/views/product/brand/index.vue'),
        meta: {
          title: '品牌管理',
          hidden: false,
          icon: 'Shop',
        },
      },
      {
        path: '/product/attr',
        name: 'attr',
        component: () => import('@/views/product/attr/index.vue'),
        meta: {
          title: '属性管理',
          hidden: false,
          icon: 'UserFilled',
        },
      },
      {
        path: '/product/sku',
        name: 'sku',
        component: () => import('@/views/product/sku/index.vue'),
        meta: {
          title: 'SKU管理',
          hidden: false,
          icon: 'Grid',
        },
      },
      {
        path: '/product/spu',
        name: 'spu',
        component: () => import('@/views/product/spu/index.vue'),
        meta: {
          title: 'SPU管理',
          hidden: false,
          icon: 'Grid',
        },
      },
    ],
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404/index.vue'),
    meta: {
      title: '404',
      hidden: true, // 是否隐藏标题 true | false
    },
  },
  {
    path: '/:pathMatch(.*)*', // 匹配所有路径
    redirect: '/404', // 重定向
    name: 'Any',
    meta: {
      title: '任意路由',
      hidden: true, // 是否隐藏标题 true | false
    },
  },
]
