<!--
  功能：功能描述
  作者：黄逸凡
  邮箱：973528232@qq.com
  时间：2024年01月16日 16:06:46
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->
<template>
  <div class="outer">
    <h3>父组件</h3>
    <h4>父亲的名字：{{ name }}</h4>
    <h4>房产数量：{{ house }}</h4>
    <button @click="changeToy">修改child1的玩具</button>
    <button @click="changeToy2">修改child2的电脑</button>
    <!-- 获取所有的子组件实例对象可以使用 $refs -->
    <button @click="getAllChild($refs)">给所有孩子的书本数量增加</button>
    <Child1 ref="c1" />
    <Child2 ref="c2" />
  </div>
</template>

<script setup lang="ts" name="">
/**
 * $refs: 父传子
 * $parent: 子传父
 *
 */
import Child1 from "./Child1.vue";
import Child2 from "./Child2.vue";
import { ref } from "vue";
let house = ref(4);
let c1 = ref();
let c2 = ref();
let name = ref("mimo");

function changeToy() {
  console.log(c1.value);
  c1.value.toy = "switch";
}
function changeToy2() {
  c2.value.computer = "lenvo";
}
function getAllChild(refs: any) {
  // console.log(refs);
  for (let key in refs) {
    // console.log(refs[key].book);
    refs[key].book += 3;
  }
}
// 把数据暴露出去
defineExpose({ house, name });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
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
