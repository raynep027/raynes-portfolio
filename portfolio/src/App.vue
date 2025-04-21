<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import {BNavbar, BNavbarBrand, BNavItem, BNavbarNav} from "bootstrap-vue-next";


</script>

<template>
  <header>
    <BNavbar id="navBar">
      <BNavbarBrand><h3 class="navText">Rayne's Portfolio</h3></BNavbarBrand>
      <BNavbarNav>
        <BNavItem to="/"><span class="navText">Home</span></BNavItem>
        <BNavItem to="/about"><span class="navText">About Me</span></BNavItem>
        <BNavItem to="/projects"><span class="navText">Projects</span></BNavItem>
        <BNavItem to="/achievements"><span class="navText">Achievements</span></BNavItem>
      </BNavbarNav>
    </BNavbar>
  </header>

  <div id="container">
    <div id="fillToBottom">
      <RouterView />
    </div>

  </div>



  <footer>
    <div>
      © Rayne Perry, 2025
    </div>
  </footer>



</template>

<style scoped>

#app {
  /*background: url("portfolio/src/assets/skybackground-opengameart.png") !important;*/
}

.navText {
  color: white;
}

#container {
  display: flex;
  width: 80%;
  background-color: rgba(191, 172, 192, 0.43);
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  min-height: 100vh;
}

#fillToBottom {
  flex: 1;
  padding: 10px;
}

footer {
  height: 8%;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #3d3452;
  color: white;
  text-align: center;
}

#navBar {
  background-color: #5c4e79;
}



/*body {
  background-color: #b1e1ff;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  height: 80%;
}*/
/*header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}*/
</style>
