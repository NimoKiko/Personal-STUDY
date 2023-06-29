import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import("../views/Home.vue");
const Index = () => import("../views/index/index.vue");
const Category = () => import("../views/category/category.vue");
const Cart = () => import("../views/cart/cart.vue");
const Profile = () => import("../views/profile/profile.vue");

const routes = [
  {
    path:'/home',
    component: Home,
    children: [
      {
        path:'index',
        component: Index
      },
      {
        path:'category',
        component: Category
      },
      {
        path:'cart',
        component: Cart
      },
      {
        path:'profile',
        component: Profile
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
