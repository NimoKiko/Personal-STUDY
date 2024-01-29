<template>
  <div class="app">
    <h2>{{ msg }}</h2>
    <input type="text" v-model="msg" />
  </div>
</template>

<script setup lang="ts" name="App">
import { RouterView, RouterLink } from "vue-router";
import { ref, reactive } from "vue";
import { customRef } from "vue";
import useRef from "./hooks/useRef";
/**
 * 自定义ref
 */
// 使用vue默认提供的ref定义响应式数据，数据变化视图就会更新
// let msg = ref('你好')

let { msg } = useRef("你好");
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
button {
  margin: 10px;
}
</style>
