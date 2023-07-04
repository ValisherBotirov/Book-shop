<template>
  <div class="container mx-auto">
    <div
      class="text-primary scroll flex flex-nowrap w-full space-x-4 overflow-x-scroll"
    >
      <p
        class=" cursor-pointer flex-shrink-0"
        v-for="(val, i) in  fakeData"
        :key="i"
      >
        <RouterLink
          @click="() => categoryHandle(val.name)"
          :to="'/shop/category/?search=' + val.name"
        >
          <span
            class="bg-blue-100 text-primary text-sm font-medium px-2.5 py-0.5 rounded"
            >{{ val.name }}</span
          >
        </RouterLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import { useMainProducts } from "@/store/mainProducts.js";
import { useCategoryProduct } from "@/store/categoryProduct.js";
import { useRoute } from "vue-router";
const store = useMainProducts();
const categoryStore = useCategoryProduct();
const route = useRoute();

const fakeData = [
    {
        id:1,
        name : "Test"
    },
    {
        id:2,
        name : "Tes2"
    },
    {
        id:3,
        name : "Tes3"
    },
]

const categoryHandle = (search) => {
  categoryStore.getProducts(search);
};

</script>

<style scoped>
.scroll::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
</style>
