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
    <h2>一辆{{ car.brand }}车的价值是{{ car.price }}万元</h2>
    <button @click="changePrice">价值+10</button>
    <hr />
    <h2>游戏列表</h2>
    <ul>
      <li v-for="item in game" :key="item.id">{{ item.name }}</li>
    </ul>
    <button @click="changeName">修改第一项的名字</button>
    <hr />
    <h2>测试：{{ obj.a.b.c }}</h2>
    <button @click="changeObj">修改</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import { reactive } from "vue";
// 使用reactive创建响应式数据
let car = reactive({
  brand: "BMW",
  price: 100,
});
let game = reactive([
  { id: "game01", name: "阴阳师" },
  { id: "game02", name: "决战平安京" },
  { id: "game03", name: "王者荣耀" },
]);
// reactive可以创建多层响应式数据,深层监听
let obj = reactive({
  a: {
    b: {
      c: 666,
    },
  },
});

console.log(car);

function changePrice() {
  car.price += 10;
}
function changeName() {
  game[0].name = "zen";
}
function changeObj() {
  obj.a.b.c += 10;
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
