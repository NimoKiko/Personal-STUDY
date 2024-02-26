// 登录接口需要携带参数的ts类型
export interface loginForm {
  username: string
  password: string
}

// 登录接口返回的数据类型
export interface loginResponseData {
  code: number
  message: string
  data: string
  ok: boolean
}
// 定义服务器返回用户信息相关的数据类型
export interface userResponseData {
  code: number
  message: string
  data: {
    username: string
  }
  ok: boolean
}
// 退出登录接口返回数据数据的类型
export interface logoutResponseData {
  code: number
  message: string
  ok: boolean
}
