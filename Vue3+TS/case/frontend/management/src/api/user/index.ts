// 统一管理项目用户相关的接口
import request from '@/utils/request'
import type { loginForm, loginResponseData, userResponseData } from './type'
// 统一管理接口
enum API {
  // 获取token的api
  LOGIN_URL = '/admin/acl/index/login',
  // 获取用户信息的api
  USERINFO_URL = '/admin/acl/index/info',
  // 退出登录的api
  LOGOUT_URL = '/admin/acl/index/logout',
}

// 暴露请求函数
// 登录接口方法
export const reqLogin = (data: loginForm) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data)
// 获取用户信息
export const getUserInfo = () => request.get<any, any>(API.USERINFO_URL)
// 退出登录
export const reqLogout = () => request.post<any, any>(API.LOGOUT_URL)
