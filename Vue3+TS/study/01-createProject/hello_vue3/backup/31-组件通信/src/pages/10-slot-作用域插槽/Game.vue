<!--
  功能：功能描述
  作者：黄逸凡
  邮箱：973528232@qq.com
  时间：2024年01月17日 15:38:11
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->
<template>
<div class="game">
  <h2>游戏列表</h2>
  <slot name="s1" :games="games"></slot>
</div>
</template>

<script setup lang='ts' name='game'>
import {reactive} from 'vue'
let games = reactive([
  { id: "bwviuhnwiue", name: "王者荣耀" },
  { id: "nfwiehvowe", name: "阴阳师" },
  { id: "vnoiwjiuhwiue", name: "红色警戒" },
  { id: "bfcuwbiwie", name: "斗罗大陆" },
]);



</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style scoped>
.game{
  width: 200px;
  height: 300px;
  border-radius: 10px;
  background-color: rgb(81, 185, 225);
  box-shadow: 0 0 10px rgb(83, 83, 83);
}
h2 {
  border-radius: 10px 10px 0 0;
  background-color: sandybrown;
  text-align: center;
  margin: 0;
}
</style>
