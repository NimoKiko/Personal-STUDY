<template>
  <div class="app">
    <h2>我是app组件</h2>
    <Suspense>
      <template #default>
        <Child></Child>
      </template>
      <template #fallback>
        <h2>加载中</h2>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts" name="App">
import { RouterView, RouterLink } from "vue-router";
import { ref, reactive } from "vue";
import Child from "./Child.vue";
import { Suspense } from "vue";
/**
 * Suspens标签
 *  1.用来包裹子组件，当子组件中有异步操作时，可以显示fallback中的内容
 *  2.可以设置多个template，通过name属性来区分
 *  3.用法：Suspense标签中必须有一个template，template中必须有一个#default,
 *    还可以使用#fallback的template标签来显示加载中的内容
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
