<template>
  <div>
    <div class="wrap1">
      <h2>当前求和为：{{ sum }}</h2>
      <select v-model.number="selected">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button @click="add">加</button>
      <button @click="minu">减</button>
    </div>
  </div>
</template>

<script setup lang="ts" name="count">
import { ref } from 'vue';
import {useCountStore} from '../store/count'
import { storeToRefs } from 'pinia';
let selected = ref(1);

const countStore = useCountStore()

const { sum } = storeToRefs(countStore)

function add() {  
  // 第三种修改方式：
  countStore.increment(selected.value);
}
function minu() {
  countStore.sum -= selected.value
}
</script>

<style scoped>
.wrap1{
  padding: 10px;
  border-radius: 10px;
  width: 400px;
  background: rgb(152, 186, 222);
}
select,button{
  margin-left: 10px;
}
</style>