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
    <h2>{{ msg }}</h2>
    <button @click="updateMsg">update</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import { ref } from "vue";
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from "vue";
/**
 * 生命周期：
 *  - 创建
 *    - Vue2说法：
 *    - beforeCreate
 *    - created
 *    - Vue3说法：
 *    - 合并为setup
 *  - 挂载
 *    - beforeMount
 *    - mounted
 *  - 更新
 *    - beforeUpdate
 *    - updated
 *  - 销毁
 *    - Vue2说法：
 *    - beforeDestroy
 *    - destroyed
 *    - Vue3说法：
 *    - beforeUnmount
 *    - unmounted
 *
 */
let msg = ref("hello vue3");

function updateMsg() {
  msg.value = "hello vue3 + ts";
}

// 生命周期函数
// 在vue3中，created和beforeCreate合并为setup
// 直接console.log()就是created
console.log("created");
// onBeforeMount: 在组件挂载到页面之前执行
onBeforeMount(() => {
  console.log("beforeMount");
});
// onMounted: 在组件挂载到页面之后执行
onMounted(() => {
  console.log("mounted");
});
// onBeforeUpdate: 在组件更新之前执行
onBeforeUpdate(() => {
  console.log("beforeUpdate");
});
// onUpdated: 在组件更新之后执行
onUpdated(() => {
  console.log("updated");
});
// onBeforeUnmount: 在组件卸载之前执行
onBeforeUnmount(() => {
  console.log("beforeUnmount");
});
// onUnmounted: 在组件卸载之后执行
onUnmounted(() => {
  console.log("unmounted");
});
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
