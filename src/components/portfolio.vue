<template>
  <div class="row">
    <div class="col-md-6">
      <h4>Four Provinccial Group Maragement System (FPG-MS)   
        <a href="" target="_blank" rel="noopener noreferrer" v-on:click="goTo('/')">see more...</a>
      </h4>
      <img class="responsive" src="https://firebasestorage.googleapis.com/v0/b/bamboo-copilot-298702.appspot.com/o/FPG-MS.png?alt=media&token=ce38d7fc-d439-413b-b1e4-65b53e69a4f7" alt="demo Four Provinccial Group Maragement System (FPG-MS) web page">
    </div>
    <div class="col-md-6">
      <h4>Face Mask Detector Moblie Application   
        <a href="" target="_blank" rel="noopener noreferrer" v-on:click="goTo('/')">see more...</a>
      </h4>
      <img class="responsive" src="https://firebasestorage.googleapis.com/v0/b/bamboo-copilot-298702.appspot.com/o/facemask.png?alt=media&token=9e894501-3d70-45ee-a51c-0bdd9c0b0abc" alt="demo Face Mask Detector Moblie Application">
    </div>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  //   props: {
  //     msg: String
  //   }
  methods:{
   goTo(path){  
   this.$router.push(path); 
      }
  }
};
</script> 