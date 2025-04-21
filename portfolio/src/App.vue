<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import {BNavbar, BNavbarBrand, BNavItem, BNavbarNav} from "bootstrap-vue-next";
import './assets/skybackground-opengameart.png';

</script>

<template>
  <header>
    <BNavbar id="navBar">
      <BNavbarBrand><h3 class="navText">Rayne's Portfolio</h3></BNavbarBrand>
      <BNavbarNav>
        <BNavItem to="/"><span class="navText">Home</span></BNavItem>
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
      Last Updated April, 2025 - © Rayne Perry
    </div>
  </footer>

</template>


<style scoped>
:global(#app) {
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(./assets/skybackground-opengameart.png);
}

.navText {
  color: white;
}

#container {
  display: flex;
  width: 80%;
  background-color: rgba(191, 172, 192, 0.80);
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  min-height: 100vh;
  margin-bottom: 4.5rem;
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

</style>
