<template>
  <div class="app">
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeAge">修改年龄</button>
    <hr />
    <h2>{{ car2 }}</h2>
    <button @click="changePrice">价格+10</button>
  </div>
</template>

<script setup lang="ts" name="App">
import { RouterView, RouterLink } from "vue-router";
import { ref, reactive } from "vue";
import { toRaw, markRaw } from "vue";

let person = reactive({
  name: "张三",
  age: 18,
});
// 获取响应式数据的原成原始数据，toRaw()数据不会触发页面更新
let rawPerson = toRaw(person);
function changeAge() {
  person.age += 1;
  console.log(rawPerson);
}
// ----------------------------------------------------------------------
// 被markRaw()标记的对象永远不能成为响应式数据
let car = markRaw({
  brand: "奔驰",
  price: 1000000,
});
let car2 = reactive(car)
function changePrice() {
  car2.price += 10;
}
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
button {
  margin: 10px;
}
</style>
