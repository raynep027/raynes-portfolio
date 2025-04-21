<script setup lang="ts">
import Project from "@/components/Project.vue";
import {ref} from "vue";
import bb1Img from '@/assets/bubbleBrawl/bubble-brawl-title.webp';
import bb2Img from '@/assets/bubbleBrawl/characters.webp';
import bb3Img from '@/assets/bubbleBrawl/in-game.webp';

import accessoryImg from '@/assets/DTBRkeyboards/accessories.png';
import FAQImg from '@/assets/DTBRkeyboards/FAQ.png';
import keychronIMG from '@/assets/DTBRkeyboards/keychronq3.png';

const bubbleBrawlImages = ref([{url: bb1Img}, {url: bb2Img}, {url: bb3Img}]);
const bubbleBrawlDesc = "Honourable Mention for Best Multiplayer";

const keyboardImages = ref([{url: keychronIMG}, {url: FAQImg}, {url: accessoryImg}]);
const keyboardsDesc = "Made for the final project of my year one CWEB 195 class, DTBR keyboards is a mock website for" +
    "a company that sells parts and accessories for custom mechanical keyboards. The project was made by three other" +
    " classmates and myself. While we all had a hand in most of the project, the section that I worked on are the " +
    "'Showcase' pages and the FAQ page."

const motodoDesc = "filler desc"

</script>

<template>
  <div class="titleArea">
    <h1>Projects</h1>
  </div>
  <Project title="Motodo Events App" :image-on-right="true" :photos="bubbleBrawlImages" :description="motodoDesc"
  link="https://effulgent-dolphin-09ec55.netlify.app/"/>
  <br />
  <Project title="Bubble Brawl" :image-on-right="false" :photos="bubbleBrawlImages" :description="bubbleBrawlDesc"
  link="https://ltngkarbn.itch.io/bubble-brawl"/>
  <br />
  <Project title="DTBR Keyboards" :image-on-right="true" :photos="keyboardImages" :description="keyboardsDesc"
  link="https://raynep027.github.io/dtbr-keyboards/"/>

</template>

<style scoped>
.titleArea, h1 {
  text-align: center;
  font-size: 40pt;
}

.mainArea {
  padding-top: 1rem;
  text-align: center;
}
</style>
