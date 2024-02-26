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
        <el-form
          :model="loginForms"
          :rules="rules"
          class="login-form"
          ref="loginForm"
        >
          <h1>Hello</h1>
          <h2>欢迎使用本产品</h2>
          <div class="form-wrap">
            <el-form-item prop="username">
              <el-input
                v-model="loginForms.username"
                class="input"
                style="margin-top: 20px"
                :prefix-icon="User"
              ></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model="loginForms.password"
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
import { reactive, ref } from 'vue'
import useUserStore from '@/stores/modules/user'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
import { judgeNow } from '@/utils/Date'
import type { FormInstance, FormRules } from 'element-plus'
let loginForm = ref()
let loginForms = reactive({
  username: 'admin',
  password: '111111',
})
let userStore = useUserStore()
let $router = useRouter()
// 表单验证规则
let rules = reactive({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' },
  ],
})

// 方法
async function login() {
  // 保证表单校验全部通过才发送请求
  await loginForm.value.validate()
  // 调用登录接口
  try {
    await userStore.userLogin(loginForms)
    // 编程式导航跳转到首页
    $router.push('/')
    ElNotification({
      type: 'success',
      message: '登录成功',
      title: `Hi,${judgeNow()}`,
    })
  } catch (error) {
    // 登录失败的信息
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
  }
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
