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
</style>
