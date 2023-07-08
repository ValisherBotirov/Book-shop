<template>
  <div class="pt-5 md:p-0">
    <ul v-if="!hasProduct" class="cardContainer mt-6">
      <li v-for="product in fake" :key="product.id">
        <Card :product="product.name" />
      </li>
    </ul>
    <div  class="flex justify-center py-6">
      Paginate
    </div>
  </div>
</template>

<script setup>
import { useCategoryProduct } from "@/store/categoryProduct.js";
import Card from "../card/SwiperCard.vue";
import { computed } from "vue";

const categoryStore = useCategoryProduct();
categoryStore.getProducts();

const hasProduct = computed(() => categoryStore.products.length);

const fake = [
  { id: 1, name: "ok" },
  { id: 1, name: "ok" },
  { id: 1, name: "ok" },
  { id: 1, name: "ok" },
  { id: 1, name: "ok" },
  { id: 1, name: "ok" },
  { id: 1, name: "ok" },
  { id: 1, name: "ok" },
  { id: 1, name: "ok" },
  { id: 1, name: "ok" },
];
</script>

<style scoped>
.cardContainer {
  @apply grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 gap-4;
}
</style>
