<!--
  功能：功能描述
  作者：黄逸凡
  邮箱：973528232@qq.com
  时间：2024年02月18日 15:46:16
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->
<template>
  <!-- 路由组件出口的位置 -->
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <!-- 渲染layout组件的子路由 -->
      <component v-if="flag" :is="Component"></component>
    </transition>
  </router-view>
</template>

<script setup lang="ts" name="main">
import useMenuStore from '@/stores/modules/menu'
import { watch, ref, nextTick } from 'vue'
const menuStore = useMenuStore()

// 控制当前组件是否销毁重建
let flag = ref(true)

// 监听仓库内的数据是否发生变化
watch(
  () => menuStore.refresh,
  () => {
    flag.value = false
    nextTick(() => {
      flag.value = true
    })
  },
)
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style scoped>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-enter-to {
  opacity: 1;
}
</style>
