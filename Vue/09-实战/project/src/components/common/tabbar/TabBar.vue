<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "TabBar",
    }
</script>

<style scoped>

  #tab-bar{
    display: flex;
    background: #f5f5f5;
    position: fixed;
    z-index: 9;
    bottom:0;
    left:0;
    right: 0;
    box-shadow: 0px -1px 10px 1px rgb(207, 207, 207);
  }
</style>
