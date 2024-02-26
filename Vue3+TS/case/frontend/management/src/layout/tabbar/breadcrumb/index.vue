<!--
  功能：功能描述
  作者：黄逸凡
  邮箱：973528232@qq.com
  时间：2024年02月20日 10:13:48
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->
<template>
  <div class="bread-crumb">
    <el-icon
      v-if="menuStore.isCollapse"
      :size="20"
      style="margin-left: 10px"
      @click="switchCollapse"
    >
      <Fold />
    </el-icon>
    <el-icon
      v-if="!menuStore.isCollapse"
      :size="20"
      style="margin-left: 10px"
      @click="switchCollapse"
    >
      <Expand />
    </el-icon>
    <el-breadcrumb :separator-icon="ArrowRight" style="margin-left: 10px">
      <el-breadcrumb-item
        v-for="(item, index) in $route.matched"
        :key="index"
        v-show="item.meta.title"
        :to="item.path"
      >
        <!-- 面包屑展示匹配路由的图标 -->
        <el-icon style="margin: 0px 2px">
          <component :is="item.meta.icon"></component>
        </el-icon>
        <!-- 面包屑展示匹配路由的标题 -->
        <span>{{ item.meta.title }}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts" name="breadcrumb">
import { ArrowRight } from '@element-plus/icons-vue'
import useMenuStore from '@/stores/modules/menu'
import { useRoute } from 'vue-router'
const menuStore = useMenuStore()
const $route = useRoute()

function switchCollapse() {
  menuStore.toggleCollapse()
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style lang="less" scoped>
.bread-crumb {
  display: flex;
  align-items: center;
  // border: 1px solid #000;
  /deep/ .el-breadcrumb__inner {
    color: white;
  }
  /deep/ .el-breadcrumb__separator {
    color: white;
  }
}
</style>
