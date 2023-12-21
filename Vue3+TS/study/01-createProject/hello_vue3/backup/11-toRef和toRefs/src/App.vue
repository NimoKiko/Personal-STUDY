<template>
  <Person></Person>
</template>

<script lang="ts">
import Person from "./components/Person.vue"
  // 写js/ts代码
  export default {
    name:"App", //组件名
    // 注册组件
    components:{
      Person
    },
  }
</script>

<style>
/* 写样式 */
.app{
  background-color: #ddd;
  box-shadow: 0 0 10px #ddd;
  border-radius: 10px;
  padding: 20px;
}
</style>