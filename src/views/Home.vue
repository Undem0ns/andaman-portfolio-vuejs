<template>
  <div class="home">
    <h2>Welcome to my Portfolio</h2>
    <h3>Here is my Resume</h3>
    <img class="responsive" alt="Andaman's Portfolio" src="https://firebasestorage.googleapis.com/v0/b/bamboo-copilot-298702.appspot.com/o/andaman_resume.png?alt=media&token=b625350f-2ad8-496b-83da-2dcca0cfc6f0">
    <h3>Here is my experience detail</h3>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style>
.responsive {
  width: 75%;
  height: auto;
}
h3 {
  text-align: start;
  padding-left:5%;
  color: rgb(21, 4, 116);
}
</style>
