// 创建一个路由器并暴露出去
import { createRouter, createWebHistory } from "vue-router";
// 引入要呈现的组件
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import News from "../components/News.vue";
import Detail from "../components/Detail.vue";

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
      name:"news",
      path: "/news",
      component: News,
      children:[
        {
          name:"detail",
          // 子级下的path不需要加/
          path:"detail/:id/:title/:content",
          component:Detail,
          // 第一种写法：将路由收到的所有 params 参数作为props传给路由组件
          props:true

          // 第二种写法：可以自己决定将什么错位props传给路由组件
          // props(route){
          //   return route.query
          // }

          // 第三种写法：写死的写法（很少用到）
          // props:{
          //   a:1,
          //   b:"hello",
          //   c:2
          // }
        }
      ]
    },
    {
      path: "/about",
      component: About,
    },
    {
      path:'/',
      redirect:'/home'
    }
  ],
});

// 暴露router
export default router;
