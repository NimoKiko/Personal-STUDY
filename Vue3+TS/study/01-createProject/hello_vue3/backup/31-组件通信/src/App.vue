<template>
  <div class="app">
    <div class="title">组件通信</div>
    <div class="content">
      <div class="menu">
          <router-link to="/props" active-class="active">1. props通信</router-link>
          <router-link to="/custom" active-class="active">2. 自定义事件</router-link>
          <router-link to="/mitt" active-class="active">3. mitt</router-link>
          <router-link to="/vmodel" active-class="active">4. v-model</router-link>
          <router-link to="/attrs" active-class="active">5. $attrs</router-link>
          <router-link to="/refsandparent" active-class="active">6. $refs、$parent</router-link>
          <router-link to="/provideandinject" active-class="active">7. provide、injecrt</router-link>
          <router-link to="/pinia" active-class="active">8. pinia</router-link>
          <router-link to="/slot" active-class="active">9. slot</router-link>
          <router-link to="/slotScope" active-class="active">10. slot作用域插槽</router-link>
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script setup lang="ts" name="App">
import { RouterView,RouterLink } from "vue-router";
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

/* .active{
  background: rgb(216, 216, 216);
} */
.title {
  width: 100%;
  height: 60px;
  background-color: rgb(90, 146, 181);
  color: white;
  border-radius: 10px;
  text-align: center;
  line-height: 60px;
  font-size: 24px;
}
.content {
  width: 100%;
  /* border: 1px solid red; */
  display: flex;
}
.menu{
  width: 180px;
  height: 240px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-between;
  /* border: 1px solid rgb(199, 199, 199); */
  margin-top: 10px;
  font-size: 12px;
}
.menu a {
  text-decoration: none;
  padding: 5px;
  color: #5f5f5f;
  border-bottom: 1px solid rgb(199, 199, 199);
  /* color: white; */
  /* border: 1px solid red; */
}
.menu a.active{
  background: rgb(82, 121, 185);
  color: white;
}
.main{
  width: 100%;
  margin-top: 10px;
}
</style>
