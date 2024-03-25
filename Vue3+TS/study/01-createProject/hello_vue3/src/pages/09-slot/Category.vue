<!--
  功能：功能描述
  作者：黄逸凡
  邮箱：973528232@qq.com
  时间：2024年01月17日 14:43:51
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->
<template>
  <div class="category">
    <!-- 默认插槽 -->
    <!-- <h2>{{ title }}</h2> -->
    <!-- <slot></slot> -->

    <!-- 具名插槽 -->
    <slot name="s1">默认内容1</slot>
    <slot name="s2">默认内容2</slot>
  </div>
</template>

<script setup lang="ts" name="Category">
defineProps(["title"]);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style scoped>
.category {
  padding: 10px;
  background-color: rgb(135, 170, 210);
  width: 150px;
  height: 250px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgb(64, 64, 64);
}
h2 {
  background-color: sandybrown;
  text-align: center;
}
</style>
