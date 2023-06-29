<template>
  <div id="nav">
    <h1>我是网站标题</h1>
    <!-- 1.通过router-link修改路由 -->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="'user/' + userId">用户</router-link>
    <!-- 2.通过点击事件修改路由 -->
    <!-- <button @click="gotoHome">首页</button>
    <button @click="gotoAbout">关于</button> -->
    <!-- <router-view></router-view> -->
    <!-- 
      新版本的keep-alive写法：
        keep-alive是为了保持组件活跃，创建之后的组件不会在离开页面的时候销毁
    -->
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: "lisi",
    };
  },
  methods: {
    gotoHome() {
      // 通过this.$router修改路由
      /*
        replace和push都能进行路由切换
        push相当于把页面加入栈，可以通过网页左上的返回切回上一个页面
        replace相当于替换，不可通过网页左上返回
      
      */
      // this.$router.push("/home");
      this.$router.replace("/home");
    },
    gotoAbout() {
      // this.$router.push("/about");
      this.$router.replace("/about");
    },
  },
};
</script>

<style lang="less">
html,
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
li {
  margin: 0;
  padding: 0;
  // font: 14px "微软雅黑";
}
#nav {
  width: fit-content;
  margin: 20px auto;
  text-align: center;

  a {
    margin-left: 10px;
    font-size: 20px;
    color: rgb(38, 95, 63);
    &.router-link-exact-active {
      color: #b94242;
    }
  }
}
</style>
