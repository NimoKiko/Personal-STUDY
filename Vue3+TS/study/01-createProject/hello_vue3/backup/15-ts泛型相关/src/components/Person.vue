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
  <div class="person">???</div>
</template>

<script setup lang="ts" name="Person">
import { ref, defineExpose } from "vue";
import { PersonInter, Persons } from "../types";
// 数据
let person: PersonInter = { id: "asbdadbqi", name: "张三", age: 60 };

let personList: Persons = [
  { id: "asbdadbqi", name: "张三", age: 60 },
  { id: "asbdadbqi", name: "李四", age: 60 },
  { id: "asbdadbqi", name: "王五", age: 60 },
  { id: "asbdadbqi", name: "赵六", age: 60 },
  { id: "asbdadbqi", name: "田七", age: 60 },
];
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
