<template>
  <div>
    <div class="inner">
      <h4>子组件</h4>
      <h5>玩具：{{ toy }}</h5>
      <button @click="sendMsg">发送玩具给父组件</button>
    </div>
  </div>
</template>
<script setup lang="ts" name="child">
import {ref} from 'vue'
let toy = ref('小熊')

// 声明事件
const emit = defineEmits(['abc'])

function sendMsg() {
  // 触发事件
  emit('abc', toy.value)
}



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
