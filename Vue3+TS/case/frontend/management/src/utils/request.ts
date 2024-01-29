// 导入axios
import axios from 'axios'

const request = axios.create({
  // 配置基础路径
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000, // 请求超时
})
// 请求拦截器
request.interceptors.request.use((config) => {
  // 返回配置对象
  return config
})

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    // response.data
    return response.data
  },
  (error) => {
    // 错误处理
    return Promise.reject(error)
  },
)
