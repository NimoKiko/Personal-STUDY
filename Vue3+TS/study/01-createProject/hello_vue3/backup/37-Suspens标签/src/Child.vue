<!--
  功能：功能描述
  作者：黄逸凡
  邮箱：973528232@qq.com
  时间：2024年01月18日 15:05:18
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->
<template>
  <div class="child">
    <h2>子组件</h2>
    <h3>{{ words }}</h3>
  </div>
</template>

<script setup lang="ts" name="Child">
import { ref } from "vue";
import axios from "axios";

let words = ref("");
async function request() {
  let { data } = await axios.get(
    "https://api.uomg.com/api/rand.qinghua?format=json"
  );
  console.log(data);
  words.value = data.content;
}
request()
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style scoped>
.child {
  margin: 20px auto;
  width: 90%;
  border-radius: 10px;
  padding: 20px;
  background: rgb(114, 158, 202);
  box-shadow: 0 0 10px #000;
}
</style>
