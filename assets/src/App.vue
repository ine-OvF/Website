<template>
  <div>
    <app-header></app-header>
    <router-view />
  </div>
  <div>
    <app-footer></app-footer>
  </div> 
</template>

<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"

export default {
components: {
    'app-header': Header,
    'app-footer': Footer,
  }
}
</script>

<style>
* {
 margin: 0;
 padding: 0; 
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
