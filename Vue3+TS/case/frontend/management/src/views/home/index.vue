<!--
  功能：功能描述
  作者：黄逸凡
  邮箱：973528232@qq.com
  时间：2024年01月30日 15:25:52
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->
<template>
  <div>
    <h1>Home</h1>
  </div>
</template>

<script setup lang="ts" name="Home">
import { onMounted } from 'vue'
import useUserStore from '@/stores/modules/user'
import { ElNotification } from 'element-plus'
const userStore = useUserStore()
// 生命周期:组件挂载完成
onMounted(() => {
  console.log('Home')
  try {
    userStore.getUserInfo()
  } catch (error) {
    // 登录失败的信息
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style lang="less" scoped></style>
