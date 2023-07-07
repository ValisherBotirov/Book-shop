<template>
  <div>
    <div class="container mx-auto">
      <RouteLink class=" text-xl sx:pt-[65px] md:pt-[35px]" :route="routeLink" />
      <h1 class="text-2xl font-sans font-medium">
        Shayx Muhammad Sodiq Muhammad Yusuf:
        <span>Olam va Odam Din va Ilm</span>
      </h1>
      <div class="grid grid-cols-12 my-8 mt-[60px] md:mt-8">
        <div class="swiperImg col-span-12 md:col-span-4 relative">
          <img
            class="rounded-xl object-cover cursor-pointer w-[100%]"
            :src="image"
            alt="product image"
          />
          <div class="absolute top-4 right-4">
            <SavedButton @isSaved="fetchSaved" />
          </div>
        </div>
        <div class="content col-span-12 md:col-span-8">
          <SingleContentComp />
        </div>
      </div>
      <div class="moreInfo">
        <div class="flex gap-4 mb-6">
          <button
            class="font-bold border-b py-1 text-2xl text-[#333] border-primary"
          >
            Mahsulot ta'rifi
          </button>
        </div>
        <div>
          <p class="text-[#333] text-xl mb-6 sx:w-[100%] md:w-[50%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            blanditiis assumenda amet officia consequatur neque. Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. At facilis dolorum
            veritatis expedita sequi similique natus nihil cumque perferendis
            nulla!
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
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useProductDetailStore } from "../store/productDetail";
import image from "../assets/img/about/ok.jpg";
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
  { name: "" },
]);

const fetchSaved = (e) => {
  console.log(e, "emit");
  //     write axios requist this
};
</script>
