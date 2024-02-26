<!--
  功能：功能描述
  作者：黄逸凡
  邮箱：973528232@qq.com
  时间：2024年02月20日 10:16:00
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->
<template>
  <div class="setting">
    <el-button
      @click="refresh"
      size="large"
      circle
      :icon="RefreshRight"
    ></el-button>
    <el-button
      @click="handleFullScreen"
      size="large"
      circle
      :icon="FullScreen"
    ></el-button>
    <el-button size="large" circle :icon="Setting"></el-button>
    <img class="avatar" src="../../../assets/img/avatar.png" alt="" />
    <el-dropdown style="margin-left: 10px; margin-right: 20px">
      <span class="el-dropdown-link">
        {{ userStore.userInfo.username }}
        <el-icon class="el-icon--right"><arrow-down /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts" name="setting">
import {
  RefreshRight,
  FullScreen,
  Setting,
  ArrowDown,
} from '@element-plus/icons-vue'
import useMenuStore from '@/stores/modules/menu'
import useUserStore from '@/stores/modules/user'
import { useRouter } from 'vue-router'

const menuStore = useMenuStore()
const userStore = useUserStore()
const $router = useRouter()
// 方法
// 刷新按钮点击的回调事件
function refresh() {
  menuStore.toggleRefresh()
}
// 全屏按钮点击的回调事件
function handleFullScreen() {
  // dom对象的一个属性，可以用来判断当前是否是全屏，全屏:true | 非全屏:null
  let full = document.fullscreenElement
  // 切换为全屏
  if (!full) {
    // 利用文档根节点的方法：requestFullscreen()来实现全屏
    document.documentElement.requestFullscreen()
  } else {
    // 利用文档的方法：exitFullscreen()来实现退出全屏
    document.exitFullscreen()
  }
}
// 退出登录按钮点击的回调事件
function logout() {
  // 1.向服务器发送请求[退出登录接口]
  // 2.仓库中关于用户相关的数据清空[token | userInfo]
  userStore.userLogout()
  // 3.跳转到登录页面
  $router.push('/login')
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style lang="less" scoped>
.setting {
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
</style>
