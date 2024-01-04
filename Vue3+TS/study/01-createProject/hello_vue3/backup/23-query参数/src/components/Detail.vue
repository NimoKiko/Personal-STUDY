<template>
  <div>
    <ul class="news-list">
      <li>编号：{{ query.id }}</li>
      <li>标题：{{ query.title }}</li>
      <li>内容：{{ query.content }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="detail">
import { useRoute } from 'vue-router';
import { toRefs } from 'vue';
let route = useRoute();
console.log(route);
let { query } = toRefs(route);
</script>

<style scoped>
ul{
  list-style: none;
  padding: 10px;
}
</style>