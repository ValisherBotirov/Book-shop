<template>
  <div class="container mx-auto">
    <SearchFormCompVue />
    <RouteLinkVue :route="arrFunc" />
    <ShortNavCompVue />
    <div class="grid grid-cols-9 mb-6">
      <div v-if="openFilter" class="col-span-9 md:col-span-2 filter">
        <FilterVue />
      </div>
      <div class="col-span-9 md:col-span-7 cards">
        <CardVue />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import RouteLinkVue from "../components/RouteLink.vue";
import ShortNavCompVue from "../components/shop/ShortNavComp.vue";
import FilterVue from "../components/shopCategory/CategoryFilter.vue";
import CardVue from "../components/shopCategory/CategoryCard.vue";
import SortVue from "../components/shop/Sort.vue";

const arrFunc = reactive([
  { name: "Магазин", link: "/" },
  { name: "Каталог", link: "/shop/category" },
  { name: "all" },
]);
const openFilter = ref(true);
</script>
