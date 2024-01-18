<template>
  <div>
    <div class="outer">
      <h3>父组件</h3>
      <h4>{{ car }}</h4>
      <Child :car="car" :sendToy="getToy"></Child>
    </div>
  </div>
</template>
<script setup lang="ts" name="father">
import Child from './Child.vue'
import {ref} from 'vue'

/**
 * 1.通过props进行组件通信：
 *  - 父传子：在子组件的标签上通过属性绑定的方式传递数据，传递的参数不是函数
 *  - 子传父：子组件通过函数发送数据给父组件，父组件通过一个函数接受子组件传来的值
 *  
 *  tips: 如果组件中嵌套组件，不推荐使用props进行通信
 * 
 */


// 数据
let car = ref('宝马')
// 方法
function getToy(value:string){
  console.log('父组件的方法',value);
  
}

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
