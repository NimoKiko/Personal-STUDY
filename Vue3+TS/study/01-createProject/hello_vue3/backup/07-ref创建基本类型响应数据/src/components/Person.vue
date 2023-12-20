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
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import { ref } from "vue";
// 数据
let name = ref("lily");
let age = ref(10);
let tel = "1234567890";

console.log(1,name);
console.log(2,age);
console.log(3,tel);

// 方法
function changeName() {
  name.value = "lucy"; 
  console.log(name);
}

function changeAge() {
  age.value++;
}

function showTel() {
  alert(tel);
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
