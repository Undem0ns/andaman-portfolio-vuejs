<template>
  <div id="nav">
    <router-link to="/">Portfolio</router-link> |
    <router-link to="/resume">Resume</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 50px;
  font: 1.5em sans-serif;
  background-color: #D4F1F4;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #009ca6;
}

h2 {
 padding-top: 50px;
 padding-bottom: 50px;
}
/*ZoomIn Hover Effect*/
.hover-zoomin a {
  display: block;
  position: relative;
  overflow: hidden;
}
.hover-zoomin img {
  width: 70%;
  height: auto;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}
.hover-zoomin:hover img {
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -o-transform: scale(1.2);
  -ms-transform: scale(1.2);
  transform: scale(1.2);
}

</style>