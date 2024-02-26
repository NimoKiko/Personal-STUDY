// 路由鉴权
// 鉴权：项目中的路由能否被访问的权限的设置
import router from '@/router'
// @ts-ignore
import nprogress from 'nprogress'
// 引入进度条样式
import 'nprogress/nprogress.css'
// 引入小仓库
import useUserStore from './stores/modules/user'
// 引入pinia
import pinia from './stores'
import { ElMessage } from 'element-plus'
import setting from '@/setting'
// 在组件外引用小仓库，必须先引入大仓库(pinia)
const userStore = useUserStore(pinia)
/**
 * 问题一：任意路由切换实现进度条业务
 *  - 使用 nprogress
 *  - 安装命令：npm i nprogress
 *
 * 问题二：路由组件访问权限的设置
 *  - 全部路由组件：
 *    - 登录
 *    - 404
 *    - 任意路由
 *    - 首页
 *    - 数据大屏
 *    - 权限管理（内含三个子路由）
 *    - 商品管理（内含四个子路由）
 *  - 用户未登录：可以访问login，访问其他则指向login页面
 *  - 用户登录成功：login界面不可访问，其余路由可以访问
 *
 */

// 全局守卫：项目中任意路由切换都会触发的钩子
// 全局前置守卫
router.beforeEach(async (to, from, next) => {
  // to:你将要访问的路由对象
  // from:你从哪个路由跳转过来
  // next():路由的放行函数
  document.title = (setting.title + '-' + to.meta.title) as string

  // 获取用户的token
  let token = userStore.token
  // 如果用户已经登录，那么就不需要再次登录
  if (token) {
    // 如果目标路由是login，那么就跳转到首页
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      // 如果目标路由不是login，那么就需要判断是否有用户信息
      if (!userStore.userInfo.username) {
        // 如果没有用户信息，那么就需要获取用户信息
        try {
          // 获取用户信息
          await userStore.getUserInfo()
          next()
        } catch (error: any) {
          // 1.token过期
          // 2.用户手动修改了本地存储的token
          // 以上两种情况下可能会触发catch中的内容
          // 退出登录
          userStore.userLogout()
          // 重新登录
          next({ path: '/login' })
        }
      } else {
        // 如果有用户信息，那么就不需要获取用户信息
        next()
      }
    }
  } else {
    // 如果用户没有登录，那么就需要登录
    if (to.path === '/login') {
      next()
    } else {
      next({ path: '/login' })
    }
  }

  // 开启进度条
  nprogress.start()
  next()
})

// 全局后置守卫
router.afterEach((to, from) => {
  nprogress.done()
})
