<template>
  <div>
    <div class="outer">
      <h3>父组件</h3>
      <h4>子组件传来的玩具：{{ toy }}</h4>
      <!-- 给子组件Child绑定事件 -->
      <Child @abc="getMsg"></Child>
    </div>
  </div>
</template>
<script setup lang="ts" name="father">
import Child from './Child.vue'
import {ref} from 'vue'
let toy = ref("")
function getMsg(msg: string) {
  toy.value = msg
  console.log(msg);
}

</script>
<style scoped>
.outer{
  padding: 5px;
  background-color: rgb(47, 101, 164);
  width: 90%;
  margin: 10px auto;
  border-radius: 5px;
  color: white;
}
</style>
