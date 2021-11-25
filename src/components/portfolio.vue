<template>
  <div class="container">
    <div class="row">
    <div class="col-md-6  py-5 hover-zoomin">
      <h4 v-on:click="goTo('/fpg-ms')" >Four Provincial Group Mangement System (FPG-MS)</h4>
        <p><a href="" rel="noopener noreferrer" v-on:click="goTo('/fpg-ms')">see more...</a></p>
      
      <img v-on:click="goTo('/fpg-ms')" class="responsive" src="https://firebasestorage.googleapis.com/v0/b/bamboo-copilot-298702.appspot.com/o/FPG-MS.png?alt=media&token=ce38d7fc-d439-413b-b1e4-65b53e69a4f7" alt="demo Four Provinccial Group Maragement System (FPG-MS) web page">
    </div>
    <div class="col-md-6  py-5 hover-zoomin">
      <h4  v-on:click="goToFacemask()">Face Mask Detector Moblie Application</h4>
      <p><a href="" rel="noopener noreferrer" v-on:click="goToFacemask()">see more...</a></p>
      <img v-on:click="goToFacemask()" class="responsive" src="https://firebasestorage.googleapis.com/v0/b/bamboo-copilot-298702.appspot.com/o/facemask.png?alt=media&token=9e894501-3d70-45ee-a51c-0bdd9c0b0abc" alt="demo Face Mask Detector Moblie Application">
    </div>
    <!-- <div class="col-md-6  py-5">
      <h4  >Hotel Review Sentiment Analysis</h4>
      <p><a href="" rel="noopener noreferrer" v-on:click="this.$router.push('/facemask')">see more...</a></p>
      <img class="responsive" src="https://firebasestorage.googleapis.com/v0/b/bamboo-copilot-298702.appspot.com/o/facemask.png?alt=media&token=9e894501-3d70-45ee-a51c-0bdd9c0b0abc" alt="demo Face Mask Detector Moblie Application">
    </div> -->
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
      },
   goToFacemask(){  
   this.$router.push('/facemask'); 
      },

  }
};
</script> 