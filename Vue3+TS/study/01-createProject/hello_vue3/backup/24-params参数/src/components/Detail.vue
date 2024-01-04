<template>
  <div>
    <ul class="news-list">
      <li>编号：{{ params.id }}</li>
      <li>标题：{{ params.title }}</li>
      <li>内容：{{ params.content }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="detail">
import { useRoute } from 'vue-router';
import { toRefs } from 'vue';
let route = useRoute();
let {params} = toRefs(route);
</script>

<style scoped>
ul{
  list-style: none;
  padding: 10px;
}
</style>