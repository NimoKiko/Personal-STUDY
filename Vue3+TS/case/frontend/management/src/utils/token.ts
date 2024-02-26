// 封装本地存储数据与读取数据的方法
export const SET_TOKEN = (token: string) => {
  localStorage.setItem('TOKEN', token)
}
// 获取token
export const GET_TOKEN = () => {
  return localStorage.getItem('TOKEN')
}
// 本地删除token
export const REMOVE_TOKEN = () => {
  localStorage.removeItem('TOKEN')
}
