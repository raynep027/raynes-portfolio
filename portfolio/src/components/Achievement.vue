<script setup lang="ts">

import {BCard, BCardBody, BCardText, BCol, BImg, BRow} from "bootstrap-vue-next";


const props = defineProps(['imageOnRight', 'image', 'title', 'description']);
</script>

<template>
  <BCard no-body class="overflow-hidden" v-if="!imageOnRight">
    <BRow class="g-0">
      <BCol md="6">
        <BImg :src="image" alt="image slot" fluid thumbnail/>
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
        <BImg :src="image" alt="image slot" fluid thumbnail/>
      </BCol>
    </BRow>
  </BCard>
</template>

<style scoped>

</style>