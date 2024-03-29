// import './assets/main.css'
import { createApp } from 'vue'
// 引入pinia
import pinia from '@/stores'
import App from '@/App.vue'
// 引入路由
import router from '@/router'
// 导入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 导入element-plus的中文包
import { zhCn } from 'element-plus/es/locales.mjs'
// svg插件需要的配置代码
import 'virtual:svg-icons-register'
// 导入全局组件注册的ts文件
import gloableComponents from '@/components/GlobalComponents'
// 创建应用
const app = createApp(App)
// 注册pinia
app.use(pinia)
// 注册路由
app.use(router)
// 引入路由鉴权的文件
import './permission'
// 使用element-plus
app.use(ElementPlus, {
  locale: zhCn, //element-plus使用中文
})
// 注册全局组件
app.use(gloableComponents)

// 使用环境变量：import.meta.env
// console.log(import.meta.env.VITE_APP_BASE_API);
// app.component('svg-icon', SvgIcon)
// 挂载应用
app.mount('#app')
