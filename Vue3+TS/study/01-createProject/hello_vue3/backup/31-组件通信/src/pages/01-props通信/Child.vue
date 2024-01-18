<template>
  <div>
    <div class="inner">
      <h4>子组件</h4>
      <h4>{{ toy }}</h4>
      <h4>父组件传来的：{{ car }}</h4>
      <button @click="sendToy(toy)">把玩具给父亲</button>
    </div>
  </div>
</template>
<script setup lang="ts" name="child">
import {ref} from 'vue'

let toy = ref('小熊')
// function sendToy (){

// }
// 声明接受props
let props = defineProps(['car','sendToy'])
</script>
<style scoped>
.inner{
  padding: 5px;
  background-color: rgb(173, 199, 229);
  width: 95%;
  margin: 10px auto;
  border-radius: 5px;
  color: black;
}

</style>
