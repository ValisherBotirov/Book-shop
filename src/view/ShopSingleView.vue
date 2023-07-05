<template>
  <div>
    <div class="container mx-auto">
      <RouteLink class="mb-3 text-base" :route="routeLink" /> 

      <div class="grid grid-cols-12 gap-8 my-8 mt-[60px] md:mt-8">
        <div class="swiperImg col-span-12 md:col-span-6 relative">
          <img class="rounded-xl w-full h-auto" :src="image" alt="product image" />
            <div class="absolute top-4 right-4">
                <SavedButton @isSaved="fetchSaved"/>
            </div>
        </div>
        <div class="content col-span-12 md:col-span-6">
           <SingleContentComp />
        </div>
      </div>
      <div class="moreInfo">
        <div class="flex gap-4 mb-6">
          <button
            class="font-bold border-b py-1 text-primary border-primary"
          >
            Описание
          </button>
        </div>
        <div>

            <p class="text-primary mb-6">
            bu yerda description bo'ladi tovar haqida
            </p>


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
import {  ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useProductDetailStore } from "../store/productDetail";
import image from '../assets/img/about/ok.jpg' 
import RouteLink from "../components/RouteLink.vue";
import SingleContentComp from "../components/shopSingle/SingleContentComp.vue";
import SmilarsCompVue from "../components/shopSingle/SmilarsSwiper.vue";
import SavedButton from "@/components/buttons/SavedButton.vue";

const store = useProductDetailStore();
const route = useRoute();
const id = route.params.id;

watch(
  () => route.params.id,
  (newId) => {
    console.log(newId, "id");
    // if (store.product.id != id) store.getOneProduct(id);
  }
);

const routeLink = ref([
    { name: "Магазин", link: "/shop" },
    { name: "Каталог", link: "/categories" },
    { name: "" }
]);

const fetchSaved = (e)=>{
    console.log(e,"emit")
//     write axios requist this
}

</script>
