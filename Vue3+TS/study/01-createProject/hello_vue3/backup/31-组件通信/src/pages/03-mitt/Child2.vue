<template>
  <div>
    <div class="inner">
      <h4>子组件2</h4>
      <h5>电脑：{{ computer }}</h5>
      <button @click="emitter.emit('send-computer',computer)">给哥哥玩电脑</button>
      <h5>哥哥给的玩具：{{ toy }}</h5>
    </div>
  </div>
</template>

<script setup lang="ts" name="child2">
import {ref,onUnmounted} from 'vue'
import emitter from '../../utils/emitter'

let computer = ref('Mac');
let toy = ref('');
// 给emitter绑定send-toy事件
emitter.on('send-toy',(val:any) => {
  console.log('send-toy事件触发了',val);
  toy.value = val;
})

onUnmounted(() => {
  // 解绑事件
  emitter.off('send-toy');
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