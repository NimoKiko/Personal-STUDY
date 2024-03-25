<!--
  功能：功能描述
  作者：黄逸凡
  邮箱：973528232@qq.com
  时间：2024年01月16日 14:58:43
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->
<template>
  <input type="text" :value="name" />
  <!-- @input="emit('update:name', (<HTMLInputElement>$event.target).value)" -->
  <!-- <input
    type="text"
    :value="password"
    @input="emit('update:password', (<HTMLInputElement>$event.target).value)"
  /> -->
  <!-- <h1>{{ name }}</h1> -->
</template>

<script setup lang="ts" name="HInput">
/**
 * 作为被封装的子组件如果父组件要用在这个组件上使用v-model，那么组件的开发者必须做好对应的处理。
 * 1. 接收一个modelValue的props
 * 2. 接收一个update:modelValue的emit
 * 3. 在input标签上绑定value属性，值为modelValue
 * 4. 在input标签上绑定input事件，事件处理函数为emit('update:modelValue',(<HTMLInputElement>$event.target).value)
 */
// 1. 接收一个modelValue的props
defineProps(["modelValue", "name", "password"]);
// 2. 接收一个update:modelValue的emit
// const emit = defineEmits([
//   "update:modelValue",
//   "update:name",
//   "update:password",
// ]);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style scoped>
input {
  border: 2px solid black;
  background-image: linear-gradient(45deg, red, yellow, green);
  height: 30px;
  font-size: 20px;
  color: white;
  margin: 5px;
}
</style>
