// 创建一个路由器并暴露出去
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
// 引入要呈现的组件
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import News from "../components/News.vue";

/**
 * 路由器的工作模式：
 *  - history模式：
 *    - 优点：url地址看起来比较美观
 *    - 缺点：后期项目上线，需要服务端配合处理路径问题，否则刷新会出现 404 错误
 *  - hash模式：
 *    - 优点：不需要服务端配合处理路径问题
 *    - 缺点：url带有#号，看起来不太美观，且在SEO优化上不太友好
 *
 */

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
