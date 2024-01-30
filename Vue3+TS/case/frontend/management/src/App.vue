<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts" name="App">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
</script>
<style scoped lang="less">
#app {
  margin: 0;
  padding: 0;
}
</style>
