<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import {BNavbar, BNavbarBrand, BNavItem, BNavbarNav} from "bootstrap-vue-next";
</script>

<template id="background">
  <header>
    <BNavbar variant="primary-subtle" id="navBar">
      <BNavbarBrand tag="h1">Rayne's Portfolio</BNavbarBrand>
      <BNavbarNav>
        <BNavItem to="/">Home</BNavItem>
        <BNavItem to="/about">About Me</BNavItem>
        <BNavItem to="/projects">Projects</BNavItem>
      </BNavbarNav>
    </BNavbar>
  </header>
  <body>
    <RouterView />
  </body>
  <footer>
    some stuff
  </footer>


</template>

<style scoped>

#background {
  background-color: #b07373;
}

body {
  width: 80%;
  background-color: #b1e1ff;
  display: flex;
  margin-right: auto;
  margin-left: auto;
}
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
