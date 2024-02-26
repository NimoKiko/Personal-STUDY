// 创建用户相关仓库
import { defineStore } from 'pinia'
// 引入接口
import { reqLogin, getUserInfo, reqLogout } from '@/api/user'
// 引入数据类型
import type {
  loginForm,
  loginResponseData,
  userResponseData,
} from '@/api/user/type'
import type { UserState } from './types/types'
// 引入操作本地存储的工具
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '@/utils/token'
// 引入常量路由
import { constantRoutes } from '@/router/routes'
// 创建小仓库
let useUserStore = defineStore('User', {
  // 存储数据
  state: (): UserState => {
    return {
      // token: localStorage.getItem('TOKEN') ? localStorage.getItem('TOKEN') : '',
      token: GET_TOKEN(),
      menuRoutes: constantRoutes, //仓库存储菜单的数组(路由)
      userInfo: {
        username: '',
      },
    }
  },
  // 异步|逻辑的操作
  actions: {
    // 用户登录的方法
    async userLogin(params: loginForm) {
      // console.log(params)
      let result: loginResponseData = await reqLogin(params)
      console.log(result)

      // 判断登录是否成功
      if (result.code == 200) {
        // 登录成功 保存token
        this.token = result.data
        // 本地存储，持久化存储token
        SET_TOKEN(result.data)
        return 'ok'
      } else {
        // 登录失败
        return Promise.reject(new Error(result.message))
      }
    },
    // 获取用户信息的方法
    async getUserInfo() {
      // console.log('获取用户信息')
      let result: any = await getUserInfo()
      if (result.code === 200) {
        this.userInfo.username = result.data.name
        return 'ok'
      } else {
        return Promise.reject(new Error(result.message))
      }
    },
    // 用户退出登录
    userLogout() {
      // 清空token
      this.token = ''
      // 清空用户信息
      this.userInfo.username = ''
      // 清空本地存储
      REMOVE_TOKEN()
    },
  },
  getters: {},
})
// 导出仓库
export default useUserStore
