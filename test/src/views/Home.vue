<template>
  <div class="home">
    <Header></Header>
    <Aside></Aside>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Aside from '@/components/Aside.vue'


export default {
  name: 'Home',
  components: {
    Header,
    Aside
  }
}
</script>
