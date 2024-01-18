<!--
  功能：功能描述
  作者：黄逸凡
  邮箱：973528232@qq.com
  时间：2024年01月16日 15:33:25
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->
<template>
  <div class="inner2">
    <h4>孙组件</h4>
    <h5>继承了爷爷的财产：{{ money }}</h5>
    <h5>继承了爷爷的车：一辆{{ car.brand }}车,价值{{ car.price }}万元</h5>
    <button @click="updateMoney(5)">花爷爷的钱</button>
  </div>
</template>

<script setup lang="ts" name="grandChild">
import { inject } from "vue";
// inject('money','default') 代表如果没有找到money这个provide，那么就使用默认值default
let {money,updateMoney} = inject('money',{money:'default',updateMoney:(x:number)=>{}});
let car = inject('car',{brand:'unknown',price:0});



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style scoped>
.inner2 {
  padding: 5px;
  background-color: rgb(255, 178, 34);
  width: 95%;
  margin: 10px auto;
  border-radius: 5px;
  color: black;
}
</style>
