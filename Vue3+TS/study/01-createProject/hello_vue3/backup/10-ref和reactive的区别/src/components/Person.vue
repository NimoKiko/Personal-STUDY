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
    <button @click="changeBrand">修改品牌</button>
    <button @click="changeCar">修改汽车</button>
    <hr>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="add">点我sum+1</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import { ref,reactive } from "vue";
// 使用reactive创建对象类型响应式数据
let car = reactive({
  brand:'BMW',
  price: 100,
})
let sum = ref(0)
function changePrice() {
  car.price += 10
}
function changeBrand() {
  car.brand = '奔驰'
}
function changeCar() {
  // 使用reactive创建的响应式对象要整体修改
  // 必须使用Object.assign()方法
  Object.assign(car, {brand:'奥迪',price:200})
  // 使用ref创建的响应式对象可以直接使用.value整体修改
}
function add() {
  sum.value += 1
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
