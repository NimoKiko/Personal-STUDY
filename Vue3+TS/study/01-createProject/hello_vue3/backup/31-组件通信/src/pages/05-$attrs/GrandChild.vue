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
  <div class="inner">
    <h4>孙组件</h4>
    <h5>a: {{ a }}</h5>
    <h5>b: {{ b }}</h5>
    <h5>c: {{ c }}</h5>
    <h5>d: {{ d }}</h5>
    <h5>{{ $attrs }}</h5>
    <button @click="updateA(5)">点我将爷爷的a更新</button>
  </div>
</template>

<script setup lang="ts" name="grandChild">

defineProps(['a','b','c','d','updateA'])


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style scoped>
.inner {
  padding: 5px;
  background-color: rgb(255, 178, 34);
  width: 95%;
  margin: 10px auto;
  border-radius: 5px;
  color: black;
}
</style>
