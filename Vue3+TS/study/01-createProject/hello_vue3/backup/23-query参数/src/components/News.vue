<template>
  <div class="container">
    <!-- 导航区 -->
    <ul class="menu">
      <li v-for="item in newsList">
        <router-link
          :to="{
            path: '/news/detail',
            query: {
              id: item.id,
              title: item.title,
              content: item.content,
            },
          }"
          >{{ item.title }}</router-link
        >
      </li>
    </ul>
    <!-- 展示区 -->
    <div class="detail">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts" name="news">
import { reactive } from "vue";
import { RouterView, RouterLink } from "vue-router";

let newsList = reactive([
  {
    id: 1,
    title: "新闻1",
    content: "新闻1内容",
  },
  {
    id: 2,
    title: "新闻2",
    content: "新闻2内容",
  },
  {
    id: 3,
    title: "新闻3",
    content: "新闻3内容",
  },
]);
</script>

<style scoped>
.container {
  width: 100%;
  /* border: 1px solid red; */
  display: flex;
}
ul {
  width: 15%;
  list-style: none;
  padding: 10px;
}
li {
  margin-top: 10px;
}
.detail {
  width: 85%;
  /* height: 300px; */
  height: 400px;
  border: 1px solid black;
  border-radius: 10px;
}
</style>
