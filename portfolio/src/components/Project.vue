<script setup lang="ts">
import {BCard, BRow, BCol, BCarousel, BCarouselSlide, BCardBody, BCardText, BImg} from "bootstrap-vue-next";

/*const props = defineProps({
  imageOnRight: Boolean,
  title: String,
  description: String,
  photos:
})*/

const props = defineProps(['imageOnRight', 'title', 'description', 'photos', 'link']);


</script>

<template>

  <BCard no-body class="overflow-hidden" v-if="!imageOnRight">
    <BRow class="g-0">
      <BCol md="6">
        <BCarousel indicators controls>
          <BCarouselSlide v-for="(item, index) in photos" :item="item" :index="index" :key="item.url">
            <template #img>
              <BImg :src="item.url" alt="image slot" height="480" width="854"/>
            </template>
          </BCarouselSlide>
        </BCarousel>
      </BCol>
      <BCol md="6">
        <BCardBody :title="title">
          <BCardText>
            {{ description }}
          </BCardText>
        </BCardBody>
      </BCol>
    </BRow>
  </BCard>

  <BCard no-body class="overflow-hidden" v-if="imageOnRight">
    <BRow class="g-0">
      <BCol md="6">
        <BCardBody :title="title">
          <BCardText>
            {{ description }}
          </BCardText>
        </BCardBody>
      </BCol>
      <BCol md="6">
        <BCarousel indicators controls>
          <BCarouselSlide v-for="(item, index) in photos" :item="item" :index="index" :key="item.url">
            <template #img>
              <BImg :src="item.url" alt="image slot" height="480" width="854"/>
            </template>
          </BCarouselSlide>
        </BCarousel>
      </BCol>
    </BRow>
  </BCard>

</template>

<style scoped>

</style>