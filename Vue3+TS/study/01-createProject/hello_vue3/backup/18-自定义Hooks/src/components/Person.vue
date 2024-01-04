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
    <h2>当前求和为: {{ sum }},放大十倍后{{ bigSum }}</h2>
    <button @click="add">点我sum+1</button>
    <hr />
    <img v-for="(item, index) in dogList" :src="item" :key="index" alt="" /><br>
    <button @click="getDog">再来一只修勾</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import useDog from "../hooks/useDog";
import useSum from "../hooks/useSum";
import { ref } from "vue";

const {sum, add, bigSum} = useSum();
const {dogList, getDog} = useDog();
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
img {
  height: 100px;
  margin-right: 10px;
}
</style>
