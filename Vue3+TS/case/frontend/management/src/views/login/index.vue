<!--
  功能：功能描述
  作者：黄逸凡
  邮箱：973528232@qq.com
  时间：2024年01月30日 15:23:07
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->
<template>
  <div class="login-container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login-form">
          <h1>Hello</h1>
          <h2>欢迎使用本产品</h2>
          <div class="form-wrap">
            <el-form-item>
              <el-input
                v-model="loginForm.username"
                class="input"
                style="margin-top: 20px"
                :prefix-icon="User"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-input
                v-model="loginForm.password"
                class="input"
                type="password"
                :prefix-icon="Lock"
                show-password
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="info" class="login-btn" @click="login">
                Login
              </el-button>
            </el-form-item>
          </div>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts" name="Login">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive } from 'vue'
import { reqLogin } from '@/api/user/index'

let loginForm = reactive({
  username: 'admin',
  password: '123',
})

function login() {
  console.log(loginForm)
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style scoped lang="less">
.login-container {
  width: 100%;
  height: 100vh;
  background: url('../../assets/img/login.png') no-repeat;
  background-size: cover;

  .login-form {
    padding: 20px;
    position: relative;
    width: 60%;
    height: 30vh;
    top: 30vh;
    background: linear-gradient(180deg, #e0e0e0 0%, #c0c0c0 100%);
    border-radius: 10px;
    box-shadow: 0 0 6px #666666;

    h1 {
      font-size: 40px;
      font-weight: bold;
    }

    h2 {
      font-size: 20px;
      font-weight: bold;
      margin-top: 20px;
    }
    .form-wrap {
      margin-top: 20px;
      display: flex;
      flex-direction: column;

      .input {
        width: 80%;
      }

      .login-btn {
        width: 80%;
        font-weight: bold;
      }
    }
  }
}
</style>
