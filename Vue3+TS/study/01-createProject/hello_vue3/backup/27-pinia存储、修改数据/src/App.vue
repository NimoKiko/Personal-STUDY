<template>
  <div class="app">
    <Count></Count>
    <Text></Text>
  </div>
</template>

<script setup lang="ts" name="App">
import Count from './components/Count.vue';
import Text from './components/Text.vue';

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
</style>
