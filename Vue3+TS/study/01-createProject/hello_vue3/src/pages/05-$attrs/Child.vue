<!--
  功能：功能描述
  作者：黄逸凡
  邮箱：973528232@qq.com
  时间：2024年01月16日 15:30:07
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->
<template>
  <div class="inner">
    <h4>子组件</h4>
    <GrandChild v-bind="$attrs" />
  </div>
</template>

<script setup lang="ts" name="child">
import GrandChild from "./GrandChild.vue";
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style scoped>
.inner {
  padding: 5px;
  background-color: rgb(173, 199, 229);
  width: 95%;
  margin: 10px auto;
  border-radius: 5px;
  color: black;
}
</style>
