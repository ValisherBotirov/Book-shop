<template>
  <div class="pt-5 md:p-0">
    <ul v-if="!hasProduct" class="cardContainer mt-6">
      <li v-for="product in fake" :key="product.id">
        <Card :product="product.name" />
      </li>
    </ul>
    <div class="flex justify-end py-6">
      <VuePagination
        v-if="total > limit"
        :total="total"
        :limit="limit"
        :current-page="currentPage"
        @fetchPage="fetchPagination"
        class="flex justify-end mt-5"
      />
    </div>
  </div>
</template>

<script setup>
import { useCategoryProduct } from "@/store/categoryProduct.js";
import Card from "../card/SwiperCard.vue";
import VuePagination from "../pagination/VuePagination.vue";
import { computed, ref } from "vue";

const categoryStore = useCategoryProduct();
categoryStore.getProducts();

const hasProduct = computed(() => categoryStore.products.length);

// pagination
const limit = ref(5);
const total = ref(50);
const currentPage = ref(1);
function fetchPagination(page) {
  currentPage.value = page;
  // offset.value =  (currentPage.value - 1) * limit.value;
}

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
  @apply grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-4 gap-4;
}
</style>
