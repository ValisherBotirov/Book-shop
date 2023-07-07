<template>
  <!-- <pre>{{ store }}</pre> -->
  <div class="container mx-auto" v-for="data in fake" :key="data.id">
    <RouterLink
      :to="`/shop/category/?search=${data.name}`"
      class="category-title group"
    >
      {{ data.name }}
      <i class="fa-sharp fa-solid fa-arrow-right-long category-icon"></i>
    </RouterLink>
    <Swiper>
      <SwiperSlide v-for="product in 5" :data-swiper-slide-index="product.id">
        <SwiperCard :product="fakeProduct" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { useMainProducts } from "@/store/mainProducts.js";
import Swiper from "../Swiper.vue";
import { SwiperSlide } from "swiper/vue";
import SwiperCard from "../card/SwiperCard.vue";
const store = useMainProducts();

if (!store.categories.length) store.getAllProductsByCategory();

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

const fake = [
  {
    id: 1,
    name: "Tets1",
  },
  {
    id: 2,
    name: "Tets1",
  },
  {
    id: 3,
    name: "Tets1",
  },
  {
    id: 4,
    name: "Tets1",
  },
];
</script>

<style>
.category-title {
  @apply inline text-2xl lg:text-3xl text-primaryBlue font-semibold pl-4 pb-4 line-clamp-1;
}
.category-icon {
  @apply pl-3 translate-y-[2px] group-hover:translate-x-3 duration-200;
}
</style>
