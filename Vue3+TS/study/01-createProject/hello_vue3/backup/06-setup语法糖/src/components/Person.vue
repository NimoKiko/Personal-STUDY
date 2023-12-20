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

<!-- <script lang="ts">
export default {
  name: "Person",
};
</script> -->
<!-- 
  安装vite-plugin-vue-setup-extend插件，可以在script标签中使用name属性
  减少书写一个sccript标签的麻烦
  命令：npm i vite-plugin-vue-setup-extend -D
  配置：vite.config.ts
  import xxx from 'vite-plugin-vue-setup-extend'
  plugins: [vue(), xxx()]
 -->
<script setup lang="ts" name="Person123">
// setup函数中的this指向的是undefined，Vue3中开始弱化了this的使用
// 数据原来是写在data中的，现在写在setup中
let name = "lily"; // 此时的name不是响应式的
let age = 10; // 此时的age不是响应式的
let tel = "1234567890"; // 此时的tel不是响应式的

// 方法
function changeName() {
  name = "lucy"; // 此时可以修改name，但由于不是响应式的，所以页面不会更新
  console.log(name);
}

function changeAge() {
  age++;
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
