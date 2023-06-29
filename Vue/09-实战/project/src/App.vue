<template>
  <div id="nav">
    <main-tabbar></main-tabbar>
    <router-view />
  </div>
</template>

<script>
import mainTabbar from "@/components/content/mainTabBar/MainTabBar.vue"
export default {
  components:{
    mainTabbar
  }
}
</script>

<style lang="less">
@import "assets/css/base.css";
</style>
