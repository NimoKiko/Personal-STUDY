<template>
  <div class="app">
    <h2>我是app组件</h2>
    <Child></Child>
    <Hello></Hello>
  </div>
</template>

<script setup lang="ts" name="App">
import { RouterView, RouterLink } from "vue-router";
import { ref, reactive } from "vue";
import Child from "./Child.vue"
/**
 * 
 * 
 * 
 */
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
}
</style>
