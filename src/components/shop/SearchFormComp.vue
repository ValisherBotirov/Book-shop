<template>
  <div>
    <div
      class="container mx-auto mt-4 flex justify-between items-center md:w-4/5 mb-6"
    >
      <form class="form items-center flex gap-4">
        <div
          class="SearchForm flex items-center p-0 border border-[#0003] rounded-3xl overflow-hidden"
        >
          <button
            @click.prevent="(e) => searchFrom(e)"
            class="all px-3 md:px-6 py-1 rounded-r-2xl text-primary font-semibold cursor-pointer bg-whiteBlue"
          >
            Search
          </button>
          <input
            type="text"
            id="search-input"
            v-model="search"
            class="searchInp w-28 md:w-40 lg:w-56 px-2 py-1 outline-none bg-transparent"
            :placeholder="t('market.hero.search')"
          />
          <label for="search-input" class="searchIcon pr-4 cursor-pointer">
            <img :src="SearchIcon" class="h-6 md:h-7" alt="searchIcon" />
          </label>
        </div>
      </form>


    </div>

  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import SearchIcon from "../../assets/img/magazin/search-normal.svg";

import { useBasketStore } from "@/store/basketProducts.js";

import { useCategoryProduct } from "@/store/categoryProduct.js";

const router = useRouter();
const route = useRoute();
const { t } = useI18n();
const productStore = useCategoryProduct();

const store = useBasketStore();

const search = ref(route.query.search);

const searchFrom = () => {
  if (!search.value) return;
  router.push({ path: "/shop/category", query: { search: search.value } });
  productStore.getProducts(search.value);
};

</script>
