<!--
  功能：功能描述
  作者：黄逸凡
  邮箱：973528232@qq.com
  时间：2024年01月17日 15:35:34
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->
<template>
  <div class="outer">
    <h3>父组件</h3>
    <div class="wrap">
      <Game>
        <!-- 作用域插槽可以接收子组件传来的参数 -->
        <!-- 使用 v-slot="xxx" 接收参数 -->
        <!-- 作用域插槽也可具名 语法：v-slot:name="params" -->
        <!-- 语法糖：#name="params" -->
        <template v-slot:s1="params">
          <ul>
            <li v-for="item in params.games" :key="item.id">{{ item.name }}</li>
          </ul>
        </template>
      </Game>
      <Game>
        <template #s1="{ games }">
          <h3 v-for="item in games" :key="item.id">{{ item.name }}</h3>
        </template>
      </Game>
    </div>
  </div>
</template>

<script setup lang="ts" name="father">
import Game from "./Game.vue";
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style scoped>
.outer {
  padding: 20px;
  background-color: rgb(141, 141, 141);
  width: 90%;
  margin: 10px auto;
  border-radius: 5px;
  color: white;
}
.wrap{
  display: flex;
  justify-content: space-evenly;
}
</style>
