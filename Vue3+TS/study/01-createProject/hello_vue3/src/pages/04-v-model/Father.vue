<template>
  <div>
    <div class="outer">
      <h3>父组件</h3>
      <h4>{{ username }}</h4>
      <h4>{{ password }}</h4>
      <!-- v-model 用在html标签上 -->
      <!-- <input type="text" v-model="username"> -->
      <!-- v-model 等价于下面这种写法 -->
      <!-- <input type="text" :value="username" @input="username = (<HTMLInputElement>$event.target).value"> -->

      <!-- v-model用在组件标签上 -->
      <!-- <HInput v-model="username"></HInput> -->
      <!-- 上面那行的代码等价于下一行的代码 -->
      <!-- <HInput :modelValue="username" @update:modelValue="username = $event"></HInput> -->

      <!-- 修改modelValue -->
      <!-- 在v-model后加:xxx就可以自定义传递的参数名 -->
      <HInput v-model:name="username" v-model:password="password"></HInput>
    </div>
  </div>
</template>
<script setup lang="ts" name="father">
import { ref } from "vue";
// @ts-ignore
import HInput from "./HInput.vue";
/**
 * $event是什么？什么时候需要.target
 * 1. 对于原生事件，$event就是事件对象 ==> 可以.target
 * 2. 对于自定义事件，$event就是触发事件时传递的数据 ==> 不能.target
 *
 * v-model 既可以父传子也可以子传父
 */
let username = ref("zhangsan");
let password = ref(123);
</script>
<style scoped>
.outer {
  padding: 5px;
  background-color: rgb(47, 101, 164);
  width: 90%;
  margin: 10px auto;
  border-radius: 5px;
  color: white;
}
</style>
