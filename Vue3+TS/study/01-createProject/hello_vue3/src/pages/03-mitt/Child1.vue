<template>
  <div>
    <div class="inner">
      <h4>子组件1</h4>
      <h5>玩具：{{ toy }}</h5>
      <button @click="emitter.emit('send-toy',toy)">玩具给弟弟玩</button>
      <h5>弟弟给的电脑：{{ computer }}</h5>
    </div>
  </div>
</template>

<script setup lang="ts" name="child1">
import {ref,onUnmounted} from 'vue'
import emitter from '../../utils/emitter'
let toy = ref('小熊');
let computer = ref('');

// 给emitter绑定send-computer事件
emitter.on('send-computer',(val:any) => {
  computer.value = val;
})


onUnmounted(() => {
  // 解绑事件
  emitter.off('send-computer');
})
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