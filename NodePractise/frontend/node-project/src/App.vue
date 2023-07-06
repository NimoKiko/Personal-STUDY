<template>
  <div id="conatiner">
    <NavBar></NavBar>
    <router-view />
  </div>
</template>

<script>
// 导入组件
import NavBar from "./components/common/navbar/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style lang="less">
@import url("./assets/css/base.css");
#conatiner{
  width: 100%;
  height: 100vh;
}
</style>
