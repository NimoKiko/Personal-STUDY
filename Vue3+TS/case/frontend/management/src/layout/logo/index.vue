<!--
  功能：logo组件
  作者：黄逸凡
  邮箱：973528232@qq.com
  时间：2024年02月06日 09:51:42
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->
<template>
  <div v-if="setting.logoHidden" class="logo">
    <img class="logo-img" :src="setting.logo" alt="" />
    <p>{{ setting.title }}</p>
  </div>
</template>

<script setup lang="ts" name="logo">
// 引入设置标题和logo的配置文件
import setting from '@/setting'
import useMenuStore from '@/stores/modules/menu'
const menuStore = useMenuStore()
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style scoped lang="less">
@import '@/assets/css/less/variables.less';
.logo {
  width: 100%;
  height: @base-menu-logo-height;
  display: flex;
  align-items: center;
  // justify-content: center;
  .logo-img {
    margin-left: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  p {
    font-size: @base-menu-logo-title-font-size;
    color: @base-menu-logo-title-color;
    margin-left: 10px;
  }
}
</style>
