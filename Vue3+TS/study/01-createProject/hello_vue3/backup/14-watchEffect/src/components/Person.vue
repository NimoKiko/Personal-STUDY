<!--
  功能：功能描述
  作者：黄逸凡
  邮箱：973528232@qq.com
  时间：2023年12月20日 13:52:40
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->
<template>
  <div class="person">
    <h2>需求：当水温达到60度，或水位达到80cm时，给服务器发送请求</h2>
    <h2>当前水温为：{{ temp }}℃</h2>
    <h2>当前水位为：{{ height }}cm</h2>
    <button @click="changeTemp">水温+10</button>
    <button @click="changeHeight">水位+10</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import { ref, watch, watchEffect } from "vue";
// 数据
let temp = ref(10);
let height = ref(0);
function changeTemp() {
  temp.value += 10;
}
function changeHeight() {
  height.value += 10;
}
// watch([temp,height],(val)=>{
//   // 从val中解构出新的值
//   let [newTemp,newHeight] = val;
//   if(newTemp >= 60 || newHeight >= 80){
//     console.log("发送请求");
//   } 
// })
// -------------------------------分割--------------------------------
// 使用watchEffect实现
// watch和watchEffect的区别：
// 1. 都能监听响应式数据的变化，但监听数据变化的方式不同
// 2. watch要明确指出监听的数据
// 3. 使用watchchEffect时，不需要传递参数(函数中用哪些属性，就监视哪些属性)
watchEffect(() => {
  if(temp.value >= 60 || height.value >= 80){
    console.log("发送请求");
  }
  
})
</script>

<style scoped>
.person {
  background-color: #ddd;
  box-shadow: 0 0 10px #ddd;
  border-radius: 10px;
  padding: 20px;
}
button {
  margin: 10px;
}
</style>
