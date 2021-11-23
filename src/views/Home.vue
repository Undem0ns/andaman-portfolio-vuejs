<template>
  <div class="home">
    <h2>Welcome to my Portfolio</h2>
    <portfolio/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Portfolio from '@/components/portfolio.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Portfolio
  }
}
</script>

<style>
.responsive {
  width: 75%;
  height: auto;
}
</style>
