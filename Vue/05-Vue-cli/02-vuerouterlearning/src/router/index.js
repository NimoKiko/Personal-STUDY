import { createRouter, createWebHistory } from "vue-router";

/**
 * 统一管理所有的页面路径
 */
const Home = () => import("../views/home.vue");
const User = () => import("../views/user.vue");
const About = () => import("../views/about.vue");
const News = () => import("../components/HomeNews.vue");
const Message = () => import("../components/HomeMessage.vue");
const Profile = () => import("../components/profile.vue")

const routes = [
  // {
  //   path: '',
  //   redirect: 'home'
  // },
  {
    path: "/user/:userId",
    // 路由懒加载
    component: User,
  },
  {
    path: "/home",
    component: Home,
    children: [
      {
        path: 'news',
        component: News,
      },
      {
        path: 'Message',
        component: Message,
      },
    ]
  },
  {
    path: "/about",
    component: About,
    children:[
      {
        path: 'profile',
        component: Profile
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // linkActiveClass属性可以统一修改router-link标签默认的选中时类名
  linkActiveClass: "active",
});

export default router;
