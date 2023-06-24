<template>
  <div class="space-y-6">
    <ShortNavCompVue class="mt-5 fixed z-[100] top-[65px]" />
    <SwiperBigCompVue class=" pt-[35px]" />
    <SwiperCartCompVue  />
  </div>
</template>

<script setup>
import ShortNavCompVue from "../components/shop/ShortNavComp.vue";
import SwiperBigCompVue from "../components/shop/SwiperBigComp.vue";
import SwiperCartCompVue from "../components/shop/SwiperCartComp.vue";
</script>
