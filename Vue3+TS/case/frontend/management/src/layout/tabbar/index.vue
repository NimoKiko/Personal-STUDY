<!--
  功能：功能描述
  作者：黄逸凡
  邮箱：973528232@qq.com
  时间：2024年02月19日 10:49:06
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->
<template>
  <div class="tabbar">
    <!-- 顶部左侧的静态 -->
    <div class="tabbar-left">
      <!-- 面包屑组件 -->
      <Breadcrumb></Breadcrumb>
    </div>
    <!-- 顶部右侧的静态 -->
    <div class="tabbar-right">
      <!-- 设置部分组件 -->
      <Set></Set>
    </div>
  </div>
</template>

<script setup lang="ts" name="tabbar">
import Breadcrumb from './breadcrumb/index.vue'
import Set from './setting/index.vue'
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style lang="less" scoped>
.tabbar {
  height: 100%;
  // border: 1px solid #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  .tabbar-left {
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
  .tabbar-right {
    // border: 1px solid #000;
    display: flex;
    align-items: center;

    .avatar {
      margin-left: 10px;
      width: 38px;
      height: 38px;
      border-radius: 100%;
      border: 2px solid #ffffff;
    }
    /deep/ .el-dropdown-link {
      color: white;
    }
  }
}
</style>
