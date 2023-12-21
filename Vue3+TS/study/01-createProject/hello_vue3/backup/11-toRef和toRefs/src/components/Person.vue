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
  </div>
</template>

<script setup lang="ts" name="Person">
import { ref,reactive,toRefs,toRef } from "vue";

// 使用reactive创建对象类型响应式数据
let person = reactive({
  name:'张三',
  age: 18,
  height: 1.88,
  weight: 80,
})
let person2 = reactive({
  name:'李四',
  age: 20,
  height: 1.78,
  weight: 70,
})
// 解构数据不是响应式的，可以使用toRefs把解构出来的数据变成响应式的
// 此时结构的数据可以直接使用 mustache 语法在html中使用
let {name, age} = toRefs(person);
// 使用toRef可以把响应式对象中的某个属性变成响应式的
let name2 = toRef(person2, 'name')
console.log(name2);


// 方法
function changeName() {
  name.value = '李四'
}
function changeAge() {
  age.value += 1
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
