<template>
  <div>
    <SearchFormComp />
    <div class="container mx-auto">
      <RouteLink class="mb-3 text-base" :route="routeLink" /> 
      <h2 class="text-3xl mb-2 font-bold text-primaryBlue">
        <!-- {{ product.name }} -->
        product name
      </h2>
      <div class="singleComp grid grid-cols-12 gap-8 my-8">
        <div class="swiperImg col-span-12 md:col-span-5">
          <img class="rounded-xl w-full h-auto" :src="image" alt="product image" />
        </div>
        <div class="content col-span-12 md:col-span-7">
          <!-- <SingleContentComp /> -->
        </div>
      </div>
      <div class="moreInfo">
        <div class="flex gap-4 mb-6">
          <button
            @click="infomations = 0"
            class="font-bold border-b py-1"
            :class="infomations === 0 ? 'text-primary border-primary' : 'text-[#4F87D3CC] border-[#4F87D3CC]'"
          >
            Описание
          </button>
        </div>
        <div>
          <div v-if="infomations === 0">
            <p class="text-primary mb-6">
              <!-- {{ product.product_detail?.description }} -->
              description
            </p>
          </div>
          <div>
            <UserCommit v-if="infomations === 2" />
          </div>
        </div>
      </div>
      <div class="my-10">
        <h3 class="text-3xl text-primary pb-4">Похожие товары</h3>
        <SmilarsCompVue />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useProductDetailStore } from "../store/productDetail";
import image from '../assets/img/about/ok.jpg' 
import RouteLink from "../components/RouteLink.vue";
import SingleContentComp from "../components/shopSingle/SingleContentComp.vue";
import UserCommit from "../components/shopSingle/UserCommit.vue";
import SmilarsCompVue from "../components/shopSingle/SmilarsSwiper.vue";

const store = useProductDetailStore();
const route = useRoute();
const id = route.params.id;

watch(
  () => route.params.id,
  (newId) => {
    console.log(newId, "id");
    if (store.product.id != id) store.getOneProduct(id);
  }
);

if (store.product.id != id) store.getOneProduct(id);

const routeLink = ref([{ name: "Магазин", link: "/shop" }, { name: "Каталог", link: "/categories" }, { name: "" }]);

const product = computed(() => {
  if (store.product.name) routeLink.value[2] = { name: store.product.name };
  return store.product;
});

const infomations = ref(0);
</script>
