import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入element-plus包
import ElementPlus from 'element-plus'
// 导入element-plus css文件
import 'element-plus/dist/index.css'

createApp(App).use(ElementPlus).use(store).use(router).mount('#app')
