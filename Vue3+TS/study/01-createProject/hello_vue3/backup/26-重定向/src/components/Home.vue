<template>
  <div>
    Home
  </div>
</template>

<script setup lang="ts" name="home">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
  setTimeout(() => {
    /**
     * 编程式路由导航：脱离router-link标签，通过js代码实现路由跳转
     */
    router.push('/news')
  },3000)
})
</script>

<style scoped></style>