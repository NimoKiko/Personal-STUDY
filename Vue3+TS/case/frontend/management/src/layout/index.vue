<!--
  功能：功能描述
  作者：黄逸凡
  邮箱：973528232@qq.com
  时间：2024年02月04日 14:45:03
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->
<template>
  <div class="layout-container">
    <!-- 左侧导航栏 -->
    <!-- <div :class="!menuStore.isCollapse ? 'layout-menu' : 'layout-menu-fold'"> -->
    <div class="layout-menu">
      <Logo></Logo>
      <!-- 展示菜单 -->
      <el-scrollbar class="scroll-bar">
        <!-- 菜单组件 -->
        <!-- collapse:折叠菜单 -->
        <el-menu
          unique-opened
          :collapse="menuStore.isCollapse"
          background-color="#00152b"
          text-color="white"
          :default-active="$route.path"
        >
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部标题栏 -->
    <div :class="!menuStore.isCollapse ? 'layout-top' : 'layout-top-fold'">
      <!-- 顶部导航组件 -->
      <Tabbar></Tabbar>
    </div>
    <!-- 内容展示区 -->
    <div
      :class="!menuStore.isCollapse ? 'layout-content' : 'layout-content-fold'"
    >
      <Main></Main>
    </div>
  </div>
</template>

<script setup lang="ts" name="Layout">
// 获取路由对象
import { useRoute } from 'vue-router'
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import Main from './main/index.vue'
import Tabbar from './tabbar/index.vue'
// 获取用户相关的小仓库
import useUserStore from '@/stores/modules/user'
import useMenuStore from '@/stores/modules/menu'
import { provide, toRef, watch } from 'vue'
const $route = useRoute()

let userStore = useUserStore()
let menuStore = useMenuStore()

// 监听菜单折叠变化
// watch(menuStore.isCollapse, (newVal, oldVal) => {
//   console.log('菜单折叠变化', newVal, oldVal)
// })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style lang="less" scoped>
@import '@/assets/css/less/variables.less';

.layout-container {
  width: 100%;
  height: 100vh;

  .layout-menu {
    width: @base-menu-width;
    height: 100vh;
    background-color: @base-menu-background;
    transition: all 0.3s;
    .scroll-bar {
      width: 100%;
      height: calc(100vh - @base-menu-logo-height);
      color: white;
    }
  }
  .layout-menu-fold {
    width: @base-menu-fold-width;
    height: 100vh;
    background-color: @base-menu-background;
    transition: all 0.3s;
  }

  .layout-top {
    width: calc(100% - @base-menu-width);
    height: @base-top-height;
    background-color: @base-top-background;
    position: fixed;
    top: 0;
    left: @base-menu-width;
    transition: all 0.3s;
  }
  .layout-top-fold {
    width: calc(100% - @base-menu-fold-width);
    height: @base-top-height;
    background-color: @base-top-background;
    position: fixed;
    top: 0;
    left: @base-menu-fold-width;
    transition: all 0.3s;
  }
  .layout-content {
    padding: 20px;
    width: calc(100% - @base-menu-width);
    height: calc(100vh - @base-top-height);
    background-color: @base-content-background;
    position: fixed;
    top: @base-top-height;
    left: @base-menu-width;
    overflow: auto;
    transition: all 0.3s;
  }
  .layout-content-fold {
    padding: 20px;
    width: calc(100% - @base-menu-fold-width);
    height: calc(100vh - @base-top-height);
    background-color: @base-content-background;
    position: fixed;
    top: @base-top-height;
    left: @base-menu-fold-width;
    overflow: auto;
    transition: all 0.3s;
  }
}
</style>
