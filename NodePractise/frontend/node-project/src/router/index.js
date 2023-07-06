import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("../view/home/home.vue");
const User = () => import("../view/user/user.vue");
const Message = () => import("../view/message/message.vue")

const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/user",
    component: User,
  },
  {
    path: "/message",
    component: Message,
  },

  // {
  // path: '/about',
  // name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
