<script setup>
import {RouterView} from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import NavbarComp from './components/Navbar/NavbarComp.vue';
import FootComponent from './components/Footer/FootComponent.vue';
// import Home from '../vie';

</script>

<template>
  <div>
    <NavbarComp/>
    <RouterView class="m-0 overflow-hidden "/>
    <FootComponent/>
  </div>
  
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

</style>
