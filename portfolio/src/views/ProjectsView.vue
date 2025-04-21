<script setup lang="ts">
import Project from "@/components/Project.vue";
import {ref} from "vue";
import bb1Img from '@/assets/bubbleBrawl/bubble-brawl-title.webp';
import bb2Img from '@/assets/bubbleBrawl/characters.webp';
import bb3Img from '@/assets/bubbleBrawl/in-game.webp';

/*const bubbleBrawlImages = ref([{url: 'bb1'}, {url: '../assets/bubbleBrawl/characters.webp'},
  {url: '../assets/bubbleBrawl/in-game.webp'}]);*/

const bubbleBrawlImages = ref([{url: bb1Img}, {url: bb2Img}, {url: bb3Img}]);

const bubbleBrawlDesc = "filler description";

</script>

<template>
  <Project title="Motodo Events App" :image-on-right="true" :photos="bubbleBrawlImages" :description="bubbleBrawlDesc"/>
  <br />
  <Project title="Bubble Brawl" :image-on-right="false" :photos="bubbleBrawlImages" :description="bubbleBrawlDesc"/>
  <br />
  <Project title="Keyboard Website" :image-on-right="true" :photos="bubbleBrawlImages" :description="bubbleBrawlDesc"/>

</template>

<style scoped>

</style>
