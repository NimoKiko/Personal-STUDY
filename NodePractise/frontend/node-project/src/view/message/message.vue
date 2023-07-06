<!--
  功能：消息中心
  作者：黄逸凡
  邮箱：973528232@qq.com
  时间：2023年07月04日 11:59:46
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->
<template>
  <div id="message" @click="recover">
    <div
      class="displayCard"
      @click.stop="open(index)"
      v-for="(item, index) in cards"
    ></div>
  </div>
</template>

<script>
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
      cards: [{}, {}, {}, {}, {}, {}, {}],
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    // 查看卡片
    open(index) {
      this.openAnimation(index);
    },
    // 打开动画
    openAnimation(index) {
      let card = document.getElementsByClassName("displayCard");
      for (let num in card) {
        if (num != index && !isNaN(num * 1)) {
          card[num].style.opacity = 0;
        } else if (num == index && !isNaN(num * 1)) {
          card[num].style.opacity = 1;
          card[num].style.width = "300px";
          card[num].style.height = "400px";
        }
      }
    },
    recover() {
      let card = document.getElementsByClassName("displayCard");
      for (let item of card) {
        item.style.position = "none";
        item.style.left = "0";
        item.style.width = "10%";
        item.style.height = "25%";
        item.style.opacity = 1;
      }
    },
    getMessage() {
      this.$store.dispatch("getPo").then((res) => {
        console.log(res);
      });
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
    this.getMessage()
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
#message {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;

  .displayCard {
    margin: 20px 20px;
    height: 25%;
    width: 10%;
    background: rgb(108, 154, 194);
    border-radius: 15px;
    box-shadow: 2px 2px 10px 2px grey;
    transition: 0.5s all;
    opacity: 1;
  }
}
</style>
