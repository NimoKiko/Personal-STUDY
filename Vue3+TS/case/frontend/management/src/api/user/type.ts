// 登录接口需要携带参数的ts类型
export interface loginForm {
  username: string
  password: string
}

// 登录接口返回的数据类型
export interface loginResponseData {
  state: number
  msg: string
  token: string
}
// 定义服务器返回用户信息相关的数据类型
export interface userResponseData {
  state: number
  msg: string
  data: {
    id: number
    username: string
    password: string
  }
}
