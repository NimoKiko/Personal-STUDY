// 引入createApp用于创建应用
import { createApp } from "vue";
// 引入App根组件
import App from "./App.vue";
// 引入pinia
import { createPinia } from "pinia";
const pinia = createPinia();
import router from "./router";
// createApp(App)用于创建应用，mount("#app")用于挂载应用
const app = createApp(App);
app.use(pinia).use(router).mount("#app");
