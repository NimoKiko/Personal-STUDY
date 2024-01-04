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
import axios from "axios";
import { nanoid } from "nanoid";
import { useTextStore } from "../store/text";

const textStore = useTextStore();

// 方法
async function getTalk() {
  let { data } = await axios.get(
    "https://api.uomg.com/api/rand.qinghua?format=json"
  );

  let obj = { id: nanoid(), title: data.content };
  console.log(obj);

  textStore.talkList.push(obj);
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
