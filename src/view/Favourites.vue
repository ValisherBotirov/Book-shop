<template>
  <div class="container mx-auto sx:pt-[65px]">
  <h1 class="py-2 font-bold sx:text-2xl md:text-3xl">Sevimlilar</h1>
  <div class="grid sx:gap-2 md:gap-4 sx:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
    <SwiperCard :product="fakeProduct"  v-for="item in 10" :key="item.id" />
  </div>
  </div>
</template>
<script setup>
import SwiperCard from "@/components/card/SwiperCard.vue";
const fakeProduct = [
  {
    id: 1,
    name: "Products",
    product_detail: {
      condition: "Bor",
      price: 1200,
    },
  },
  {
    id: 2,
    name: "Products",
    product_detail: {
      condition: "Bor",
      price: 1200,
    },
  },
  {
    id: 3,
    name: "Products",
    product_detail: {
      condition: "Bor",
      price: 1200,
    },
  },
  {
    id: 4,
    name: "Products",
    product_detail: {
      condition: "Bor",
      price: 1200,
    },
  },
];
</script>
