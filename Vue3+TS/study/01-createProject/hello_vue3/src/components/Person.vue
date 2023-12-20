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
    <hr>
    <h2>游戏列表</h2>
    <ul>
      <li v-for="item in game" :key="item.id">{{ item.name }}</li>
    </ul>
    <button @click="changeName">修改第一项的名字</button>
    <hr>
    <h2>测试：{{ obj.a.b.c }}</h2>
    <button @click="changeObj">修改</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import { ref } from "vue";
// 使用ref创建对象类型响应式数据
let car = ref({
  brand:'BMW',
  price: 100,
})
let game = ref([
  {id:'game01',name:'阴阳师'},
  {id:'game02',name:'决战平安京'},
  {id:'game03',name:'王者荣耀'},
])
// ref可以创建多层响应式数据,底层还是使用reactive进行监听,所以可以实现深层监听
let obj = ref({
  a:{
    b:{
      c:666
    }
  }
})

console.log(car);


function changePrice(params:type) {
  car.value.price += 10
}
function changeName() {
  game.value[0].name = 'zen'
}
function changeObj() {
  obj.value.a.b.c += 10
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
