<template>
  <div><p>Lorem ipsum dolor sit amet.</p>
      <Portfolio/>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Portfolio from '@/components/portfolio.vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Portfolio',
  components: {
    Portfolio
  }
}
</script>