<template>
  <div>
    <div class="wrap1">
      <button @click="getTalk">获取一巨土味情话</button>
      <ul>
        <li v-for="item in textStore.talkList">{{ item.title }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts" name="text">
import { reactive } from "vue";
import { useTextStore } from "../store/text";

const textStore = useTextStore();
function getTalk() {
  textStore.getTalk();
}
</script>

<style scoped>
.wrap1 {
  margin-top: 10px;
  padding: 10px;
  border-radius: 10px;
  width: 400px;
  background: rgb(152, 186, 222);
}
</style>
