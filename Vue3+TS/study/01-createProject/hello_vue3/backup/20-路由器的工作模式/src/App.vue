<template>
  <div class="app">
    <h2>Vue3 路由测试</h2>
    <!-- 导航区 -->
    <div class="navigate">
      <RouterLink to="home" active-class="active">首页</RouterLink>
      <RouterLink to="news" active-class="active">新闻</RouterLink>
      <RouterLink to="about" active-class="active">关于</RouterLink>
    </div>
    <!-- 展示区 -->
    <div class="main-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts" name="App">
import { ref, reactive } from "vue";
import { RouterView, RouterLink } from "vue-router";
/**
 * 路由组件：
 *  - 靠规则渲染出来的：
 *   eg:routes:[{path:"demo",component:Demo}]
 * 一般组件：
 *  - 一般组件是我们自己写的组件
 *
 */
</script>
<style>
/* 写样式 */
.app {
  margin: 0 auto;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h2 {
  width: 90%;
  background-color: #ddd;
  box-shadow: 0 0 10px #ddd;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
}
.navigate {
  /* border: 1px solid red; */
  width: 80%;
  display: flex;
  justify-content: space-around;
}
.navigate a {
  background-color: rgb(53, 73, 123);
  color: white;
  width: 65px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
}
.navigate .active {
  background: #e36666;
}
.main-content {
  margin-top: 20px;
  width: 80%;
  height: 400px;
  border: 1px solid black;
  border-radius: 10px;
}
</style>
