<template>
  <Person></Person>
</template>

<script setup lang="ts" name="App">
import Person from "./components/Person.vue";
import { ref, reactive } from "vue";
let isShow = ref(true);

</script>

<style>
/* 写样式 */
.app {
  background-color: #ddd;
  box-shadow: 0 0 10px #ddd;
  border-radius: 10px;
  padding: 20px;
}
</style>
