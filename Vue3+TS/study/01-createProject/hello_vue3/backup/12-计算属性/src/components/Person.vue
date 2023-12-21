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
    姓：<input type="text" v-model="firstName" /> <br />
    名：<input type="text" v-model="lastName" /> <br />
    <button @click="changeFullName">修改全名</button>
    全名：<span>{{ fullName }}</span>
  </div>
</template>

<script setup lang="ts" name="Person">
import { ref, computed } from "vue";
// 使用ref创建响应式数据
let firstName = ref("zhang");
let lastName = ref("san");
// 使用computed()创建计算属性
// 需要引入computed
// 计算属性有缓存，方法没有缓存
// 这么定义的计算属性是只读的
// let fullName = computed((res) => {
//   return (
//     firstName.value.slice(0, 1).toUpperCase() +
//     firstName.value.slice(1) +
//     "-" +
//     lastName.value
//   );
// });
// 使用get()和set()创建可读可写的计算属性
// get()和set()方法必须都写
let fullName = computed({
  get() {
    return (
      firstName.value.slice(0, 1).toUpperCase() +
      firstName.value.slice(1) +
      "-" +
      lastName.value
    );
  },
  set(value) {
    let [str1,str2] = value.split("-");
    firstName.value = str1;
    lastName.value = str2;
  },
});
function changeFullName() {
  fullName.value = "li-si";
}
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
