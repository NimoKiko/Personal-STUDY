<template>
  <div class="app">
    <h2>求和为: {{ sum }}</h2>
    <h2>名字为为: {{ person.name }}</h2>
    <h2>年龄为: {{ person.age }}</h2>
    <button @click="changeSum">sum+1</button>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">改变整个人</button>
    <hr>
    <h2>汽车信息：{{ car.brand }}</h2>
    <h2>汽车配置：{{ car.options.color }}的车，配备{{ car.options.engine }}引擎</h2>
    <button @click="changeBrand">修改品牌</button>
    <button @click="changeColor">修改颜色</button>
    <button @click="changeEngine">修改发动机</button>
    <button @click="changeCar">修改整车</button>
  </div>
</template>

<script setup lang="ts" name="App">
import { RouterView, RouterLink } from "vue-router";
import { ref, shallowRef } from "vue";
import {reactive,shallowReactive} from "vue";
/**
 * 通过使用shallowRef和shallowReactive来绕开深度响应。浅层API创建的状态只在顶层是响应式的，
 * 对深层的对象不做任何处理，避免了对每一个内部属性做响应式所带来的性能成本，使得属性访问变得
 * 更快，可提高性能。
 * 
 * 
 */
/**
 * shallowRef: 浅层ref
 *  1. 作用: 用来创建一个响应式的数据
 *  2. 语法: const xxx = shallowRef(initValue)
 *  3. 特点: 只能对浅层数据进行响应式处理
 *  4. 可以提高性能，如果对象层级比较深，但是业务中只需要关注浅层数据的变化，那么就可以使用shallowRef
 * 
 * 
 */
let sum = shallowRef(0);
let person = shallowRef({
  name: "zhangsan",
  age: 18,
});

// 函数
function changeSum() {
  // 这个属于修改浅层数据
  sum.value++;
}
function changeName() {
  // 这个属于修改深层数据
  person.value.name = "lisi";
}
function changeAge() {
  // 这个属于修改深层数据
  person.value.age++;
}
function changePerson(){
  // 这个属于修改浅层数据
  person.value = {
    name: "wangwu",
    age: 20,
  }
}
/**
 * shallowReactive: 浅层reactive
 *  1. 作用: 用来创建一个响应式的数据
 *  2. 语法: const xxx = shallowReactive(initValue)
 *  3. 特点: 只能对浅层数据进行响应式处理
 */
let car = reactive({
  brand:'奔驰',
  options:{
    color:'红色',
    engine:'v8'
  }
})
// 函数
function changeBrand() {
  // 这个属于修改浅层数据
  car.brand = "宝马";
}
function changeColor() {
  // 这个属于修改深层数据
  car.options.color = "蓝色";
}
function changeEngine() {
  // 这个属于修改深层数据
  car.options.engine = "v12";
}
function changeCar(){
  // 这个属于修改浅层数据
  Object.assign(car,{
    brand:'奥迪',
    options:{
      color:'黑色',
      engine:'v6'
    }
  })
}
</script>
<style>
/* 写样式 */
.app {
  margin: 0 auto;
  width: 98%;
  border-radius: 10px;
  padding: 20px;
  background: #ddd;
  box-shadow: 0 0 10px #ddd;
}
button {
  margin: 10px;
}
</style>
