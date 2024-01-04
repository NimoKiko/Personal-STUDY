// 创建一个路由器并暴露出去
import { createRouter, createWebHistory } from "vue-router";
// 引入要呈现的组件
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import News from "../components/News.vue";
// 创建路由器
const router = createRouter({
  // 配置路由
  history: createWebHistory(), // 路由器的工作模式
  routes: [
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/news",
      component: News,
    },
    {
      path: "/about",
      component: About,
    },
  ],
});

// 暴露router
export default router;
