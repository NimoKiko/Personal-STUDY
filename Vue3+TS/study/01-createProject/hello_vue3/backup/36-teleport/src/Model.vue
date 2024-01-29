<!--
  功能：功能描述
  作者：黄逸凡
  邮箱：973528232@qq.com
  时间：2024年01月18日 14:41:08
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->
<template>
  <button @click="isShow = true">展示弹窗</button>
  <!-- teleport标签可以将被包裹的结构转移到指定标签下 -->
  <!-- teleport标签的to属性可以使用选择器 -->
  <teleport to="body">
    <div class="model" v-show="isShow">
      <h2>弹窗标题</h2>
      <div>弹窗的内容</div>
      <button @click="isShow = false">关闭弹窗</button>
    </div>
  </teleport>
</template>

<script setup lang="ts" name="Model">
import { ref } from "vue";
let isShow = ref(false);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style scoped>
.model {
  width: 250px;
  height: 150px;
  background-color: skyblue;
  border-radius: 10px;
  padding: 5px;
  box-shadow: 0 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 20px;
}
button {
  margin: 20px;
}
</style>
