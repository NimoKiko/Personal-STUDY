<!--
  功能：功能描述
  作者：黄逸凡
  邮箱：973528232@qq.com
  时间：2023年12月20日 13:52:40
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->
<template>
  <div class="person">
    <ul>
      <li v-for="item in list" :key="item.id">
        {{ item.name }} -- {{ item.age }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="Person">
import { withDefaults } from "vue";
import { PersonInter, Persons } from "../types";
// 接受list属性
// defineProps(['list'])

// 接受list + 限制类型
// defineProps<{list:Persons}>();

// 接受list + 限制类型 + 必要性 + 默认值
// 使用 ? 表示可选
withDefaults(defineProps<{ list?: Persons }>(), {
  list: () => {
    return [{ id: "dbuwbdi", name: "张三", age: 182 }];
  },
});

// tips: defineProps()为宏函数，不需要引入

// 数据
</script>

<style scoped>
.person {
  background-color: #ddd;
  box-shadow: 0 0 10px #ddd;
  border-radius: 10px;
  padding: 20px;
}
button {
  margin: 10px;
}
</style>
