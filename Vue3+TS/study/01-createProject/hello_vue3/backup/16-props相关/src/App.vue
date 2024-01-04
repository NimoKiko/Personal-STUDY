<template>
  <Person :list="personList" ></Person>
</template>

<script setup lang="ts" name="App">
import Person from "./components/Person.vue";
import { ref, reactive } from "vue";
import { PersonInter, Persons } from "./types";
// reactive可以直接传泛型
let personList = reactive<Persons>([
  { id: "hcishdio01", name: "张三", age: 18 },
  { id: "hcishdio02", name: "里斯", age: 19 },
  { id: "hcishdio03", name: "王五", age: 20 },
]);
</script>

<style>
/* 写样式 */
.app {
  background-color: #ddd;
  box-shadow: 0 0 10px #ddd;
  border-radius: 10px;
  padding: 20px;
}
</style>
