<template>
  <div>
    <div class="outer">
      <h3>父组件</h3>
      <h4>子组件传来的玩具：{{ }}</h4>
      <Child1></Child1>
      <Child2></Child2>
    </div>
  </div>
</template>

<script setup lang="ts" name="father">
import Child1 from './Child1.vue'
import Child2 from './Child2.vue'
import {ref} from 'vue'
/**
 * mitt: 
 *  - 安装mitt：npm i mitt
 *  - 配置emitter.ts配置，引入mitt
 *  - 在emitter.ts中创建emitter对象
 *  - 在组件中引入emitter.ts，使用emitter.on()绑定事件，使用emitter.emit()触发事件
 *  tips: 在组件中最后解绑事件 emitter.off()
 */

</script>

<style scoped>
.outer{
  padding: 5px;
  background-color: rgb(47, 101, 164);
  width: 90%;
  margin: 10px auto;
  border-radius: 5px;
  color: white;
}
</style>  