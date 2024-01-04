<template>
  <div>
    <ul class="news-list">
      <li>编号：{{ id }}</li>
      <li>标题：{{ title }}</li>
      <li>内容：{{ content }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="detail">
defineProps(['id', 'title', 'content']);
</script>

<style scoped>
ul{
  list-style: none;
  padding: 10px;
}
</style>