<!--
  功能：功能描述
  作者：黄逸凡
  邮箱：973528232@qq.com
  时间：2024年01月16日 15:30:01
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->
<template>
  <!-- 默认插槽 -->
  <!-- <div class="outer">
    <h3>父组件</h3>
    <div class="wrap">
      <Category title="热门游戏列表">
        <ul>
          <li v-for="item in games" :key="item.id">{{ item.name }}</li>
        </ul>
      </Category>
      <Category title="今日美食城市">
        <img :src="imgUrl" alt="">
      </Category>
    </div>
  </div> -->

  <!-- 具名插槽 -->
  <div class="outer">
    <h3>父组件</h3>
    <div class="wrap">
      <Category>
        <template v-slot:s1>
          <h2>热门游戏列表</h2>
        </template>
        <!-- 子组件中的插槽有name属性，所以父组件中要添加到子组件的内容也必须命名 -->
        <!-- 使用 v-slot 声明插槽名字 -->
        <!-- v-slot 只能放在template标签内 -->
        <template v-slot:s2>
          <ul>
            <li v-for="item in games" :key="item.id">{{ item.name }}</li>
          </ul>
        </template>
      </Category>
      <Category>
        <!-- 语法糖：#name 可以代表 v-slot:name -->
        <template #s1>
          <h2>今日美食城市</h2>
        </template>
        <template #s2>
          <img :src="imgUrl" alt="" />
        </template>
      </Category>
    </div>
  </div>
</template>

<script setup lang="ts" name="father">
/**
 * 1.插槽的分类：
 *  - 默认插槽
 *  - 具名插槽
 *  - 作用域插槽
 *
 * 2.默认插槽：
 *  - 子组件使用双标签声明
 *  - 父组件使用子组件时，可以在子组件标签中添加内容，这些内容将会被子组件的默认插槽接收
 *  - 子组件中使用slot标签接收父组件传来的内容
 */
import { ref, reactive, provide } from "vue";
import Category from "./Category.vue";
let name = ref("Nim0");
let games = reactive([
  { id: "bwviuhnwiue", name: "王者荣耀" },
  { id: "nfwiehvowe", name: "阴阳师" },
  { id: "vnoiwjiuhwiue", name: "红色警戒" },
  { id: "bfcuwbiwie", name: "斗罗大陆" },
]);

let imgUrl = "https://z1.ax1x.com/2023/11/19/piNxLo4.jpg";

let vedioUrl: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4";
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style scoped>
.outer {
  padding: 20px;
  background-color: rgb(141, 141, 141);
  width: 90%;
  margin: 10px auto;
  border-radius: 5px;
  color: white;
}
.wrap {
  display: flex;
  justify-content: space-evenly;
}
img {
  width: 100%;
}
h2 {
  background-color: sandybrown;
  text-align: center;
}
</style>
