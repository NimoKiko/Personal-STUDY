<template>
  <div class="app">
    <h2>我是app组件</h2>
    <img src="https://z1.ax1x.com/2023/11/19/piNxLo4.jpg" alt="">
    <br>
    <Model></Model>
  </div>
</template>

<script setup lang="ts" name="App">
import { RouterView, RouterLink } from "vue-router";
import { ref, reactive } from "vue";
import Model from "./Model.vue"

</script>
<style>
/* 写样式 */
.app {
  margin: 20px auto;
  width: 98%;
  border-radius: 10px;
  padding: 20px;
  background: #ddd;
  box-shadow: 0 0 10px #000;
  /* 如果有filter会影响子组件的fix定位 */
  filter: saturate(10);
}
img{
  width: 500px;
}
</style>
