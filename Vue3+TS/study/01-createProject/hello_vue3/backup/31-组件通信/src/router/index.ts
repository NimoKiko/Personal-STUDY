import { createRouter, createWebHistory } from "vue-router";
import Props from "../pages/01-props通信/Father.vue";
import Custom from "../pages/02-custom-event/Father.vue"
import Mitt from "../pages/03-mitt/Father.vue"
import VModel from "../pages/04-v-model/Father.vue"
import Attrs from "../pages/05-$attrs/Father.vue"
import RefsAndParent from '../pages/06-$refs-$parent/Father.vue'
import ProvideAndInject from "../pages/07-provide-inject/Father.vue"
import Pinia from "../pages/08-pinia/Father.vue"
import Slot from "../pages/09-slot/Father.vue"
import SlotScope from "../pages/10-slot-作用域插槽/Father.vue"
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path:'/',
      redirect:'/props'
    },
    {
      path: "/props",
      component: Props,
    },
    {
      path: "/custom",
      component: Custom,
    },
    {
      path: "/mitt",
      component: Mitt,
    },
    {
      path: "/vmodel",
      component: VModel,
    },
    {
      path: "/attrs",
      component: Attrs,
    },
    {
      path: "/refsandparent",
      component: RefsAndParent,
    },
    {
      path: "/provideandinject",
      component: ProvideAndInject,
    },
    {
      path: "/pinia",
      component: Pinia,
    },
    {
      path: "/slot",
      component: Slot,
    },
    {
      path: "/slotscope",
      component: SlotScope,
    },
  ],
});
export default router;
