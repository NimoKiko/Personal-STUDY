<template>
  <div class="app">
    <h2>当前求sum为: {{ sum1 }}</h2>
    <h2>当前sum2为: {{ sum2 }}</h2>
    <button @click="changeSum1">sum1 + 1</button>
    <button @click="changeSum2">sum2 + 1</button>
  </div>
</template>

<script setup lang="ts" name="App">
import { RouterView, RouterLink } from "vue-router";
import { ref, readonly } from "vue";
let sum1 = ref(0);
// 和sum1绑定，但是不能修改值
let sum2 = readonly(sum1)

// 函数
function changeSum1() {
  sum1.value += 1;
}
function changeSum2() {
  // readonly声明的值不能修改
  // sum2.value += 1;
}
</script>
<style>
/* 写样式 */
.app {
  margin: 0 auto;
  width: 98%;
  border-radius: 10px;
  padding: 20px;
  background: #ddd;
  box-shadow: 0 0 10px #ddd;
}
button {
  margin: 10px;
}
</style>
