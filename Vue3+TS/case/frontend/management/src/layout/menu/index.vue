<!--
  功能：菜单组件
  作者：黄逸凡
  邮箱：973528232@qq.com
  时间：2024年02月06日 16:43:01
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->
<template>
  <template v-for="(item, index) in menuList" ::key="item.path">
    <!-- 没有子路由 -->
    <template v-if="!item.children">
      <el-menu-item
        v-if="!item.meta.hidden"
        :index="item.path"
        @click="goRoute"
      >
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <template #title>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>

    <!-- 有子路由 但只有一个 -->
    <template v-if="item.children && item.children.length == 1">
      <el-menu-item
        :index="item.children[0].path"
        v-if="!item.children[0].meta.hidden"
        @click="goRoute"
      >
        <el-icon>
          <component :is="item.children[0].meta.icon"></component>
        </el-icon>
        <template #title>
          <span>{{ item.children[0].meta.title }}</span>
        </template>
      </el-menu-item>
    </template>

    <!-- 有子路由且个数大于1个 -->
    <el-sub-menu
      v-if="item.children && item.children.length > 1"
      :index="item.path"
    >
      <template #title>
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <Menu :menuList="item.children"></Menu>
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts" name="Menu">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
const $router = useRouter()
defineProps(['menuList'])

const goRoute = (vc: any) => {
  // 跳转路由
  $router.push(vc.index)
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style scoped></style>
