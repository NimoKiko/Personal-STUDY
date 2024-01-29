// 引入createApp用于创建应用
import { createApp } from "vue";
// 引入App根组件
import App from "./App.vue";
import Hello from "./Hello.vue"
// createApp(App)用于创建应用，mount("#app")用于挂载应用
const app = createApp(App);
// app.component()用于注册全局组件
app.component("Hello",Hello)
// app.config 定义全局属性
// app.config.globalProperties.x = 99
// app.directive 可以自定义指令
app.directive('beauty',(element,{value}) => {
  element.innerText += value
  element.style.color = 'red'
  element.style.backgroundColor = "yellow"
})
// 挂载应用
app.mount("#app");
// 卸载应用
// setTimeout(() => {
//   app.unmount("#app")
// },2000)

