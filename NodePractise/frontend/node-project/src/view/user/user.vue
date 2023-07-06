<!--
  功能：用户中心
  作者：黄逸凡
  邮箱：973528232@qq.com
  时间：2023年07月04日 11:16:16
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->
<template>
  <div id="user">
    <div class="card1">
      <div class="title">Sign In</div>
      <input class="input" value="" />
      <input class="input" value="" />
      <button class="loginBtn" @click="login">login</button>
    </div>
    <div class="card2">
      <el-card class="elCard" :body-style="{ padding: '0px' }">
        <img src="../../assets/img/zyr.jpg" class="image" />
      </el-card>
      <p class="welcome">Welcome ~ {{ username }}</p>
      <button class="logout" @click="logout">Sign out</button>
    </div>
  </div>
</template>

<script>
// import { ElMessage } from "element-plus";
export default {
  // 组件名称
  name: "demo",
  // 组件参数 接收来自父组件的数据
  props: {},
  // 局部注册的组件
  components: {},
  // 组件状态值
  data() {
    return {
      username: "admin",
      account: "",
      password: "",
      isLogin: false,
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    // 登录方法
    login() {
      let input = document.getElementsByClassName("input");

      let account = input[0].value;

      let password = input[1].value;

      let params = {
        account: account,
        password: password,
      };
      // 获取token
      this.$store.dispatch("getToken", params).then((res) => {
        if (res.state) {
          // 保存token
          sessionStorage.setItem("token", res.token);
          this.getUser();
        } else {
          this.$message({ message: res.msg, type: "error" });
        }
      });
    },
    // 获取用户名
    getUser() {
      this.$store.dispatch("getUser").then((res) => {
        if (res.username) {
          console.log(res.username);
          this.username = res.username;
          this.rotate();
          sessionStorage.setItem("isLogin", true);
        } else {
          this.reRotate()
        }
      });
    },
    //退出登录
    logout() {
      const input = document.getElementsByClassName("input");

      input[0].value = "";

      input[1].value = "";

      sessionStorage.setItem("isLogin", false);
      this.reRotate();
    },
    // 旋转卡片
    rotate() {
      const card1 = document.querySelector(".card1");
      const card2 = document.querySelector(".card2");

      card1.style.transform = "rotateY(180deg)";
      card2.style.transform = "rotateY(360deg)";
    },
    // 反向旋转卡片
    reRotate() {
      const card1 = document.querySelector(".card1");
      const card2 = document.querySelector(".card2");

      card1.style.transform = "rotateY(0deg)";
      card2.style.transform = "rotateY(180deg)";
    },
  },
  // 以下是生命周期钩子   注：没用到的钩子请自行删除
  /**
   * 在实例初始化之后，组件属性计算之前，如data属性等
   */
  beforeCreate() {},
  /**
   * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
   */
  created() {},
  /**
   * 在挂载开始之前被调用：相关的 render 函数首次被调用。
   */
  beforeMount() {},
  /**
   * el 被新创建的 vm.$ el 替换，并挂载到实例上去之后调用该钩子。
   * 如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$ el 也在文档内。
   */
  mounted() {
    this.getUser()
    this.isLogin = sessionStorage.getItem("isLogin");
    if (this.isLogin) {
      this.rotate();
    }
  },
  /**
   * 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
   * 你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
   */
  beforeUpdate() {},
  /**
   * 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
   * 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。
   */
  updated() {},
  /**
   * keep-alive 组件激活时调用。 仅针对keep-alive 组件有效
   */
  activated() {},
  /**
   * keep-alive 组件停用时调用。 仅针对keep-alive 组件有效
   */
  deactivated() {},
  /**
   * 实例销毁之前调用。在这一步，实例仍然完全可用。
   */
  beforeUnmount() {},
  /**
   * Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，
   * 所有的事件监听器会被移除，所有的子实例也会被销毁。
   */
  unmounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style lang="less" scoped>
#user {
  perspective: 800px;
  width: 100%;
  height: 100%;
  // border: 1px solid red;
  position: relative;

  .card1 {
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 500px;
    height: 320px;
    margin: 4% auto;
    background: rgb(116, 179, 160);
    border-radius: 15px;
    box-shadow: 5px 4px 8px 3px grey;
    display: flex;
    flex-direction: column;
    align-items: center;
    backface-visibility: hidden;
    transition: 2s all;
    .title {
      font-size: 24px;
      text-align: center;
      padding-top: 10px;
      color: white;
      font-weight: bold;
    }
    .input {
      height: 40px;
      margin-top: 8%;
      width: 40%;
      background: transparent;
      border: 2px solid white;
      border-radius: 100px;
      text-align: center;
      color: white;
      font-weight: bold;
    }
    .loginBtn {
      width: 20%;
      background: transparent;
      margin-top: 6%;
      border: 2px solid white;
      height: 40px;
      border-radius: 100px;
      color: white;
      font-weight: bold;
      cursor: pointer;
      transition: 0.3s all;
      &:hover {
        background: #5ec77d;
        border: 2px solid #5ec77d;
      }
    }
  }
  .card2 {
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    // transform: translateX(-50%);
    width: 500px;
    height: 320px;
    margin: 4% auto;
    background: rgb(116, 179, 160);
    border-radius: 15px;
    box-shadow: 5px 4px 8px 3px grey;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: rotateY(180deg);
    backface-visibility: hidden;
    transition: 2s all;

    .elCard {
      position: absolute;
      left: 12%;
      top: 10%;
      width: 35%;
      height: 75%;
      border: 0;
      // height: 70%;
      .image {
        width: 100%;
        display: block;
      }
    }
    .welcome {
      position: absolute;
      left: 52%;
      top: 18%;
      font-size: 24px;
      color: white;
      font-weight: bold;
    }
    .logout {
      position: absolute;
      left: 62%;
      top: 50%;
      width: 20%;
      background: transparent;
      border: 2px solid white;
      height: 40px;
      border-radius: 100px;
      color: white;
      font-weight: bold;
      cursor: pointer;
      transition: 0.3s all;
      &:hover {
        background: #f17666;
        border: 2px solid #f17666;
      }
    }
  }
}
</style>
