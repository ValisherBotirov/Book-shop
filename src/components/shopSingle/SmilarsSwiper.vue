<template>
  <CustomSwiper>
    <SwiperSlide v-for="product in fakeProduct">
      <Card :product="product" />
    </SwiperSlide>
  </CustomSwiper>
</template>

<script setup>
import { useProductDetailStore } from "@/store/productDetail.js";
import { SwiperSlide } from "swiper/vue";
import CustomSwiper from "../Swiper.vue";
import Card from "../card/SwiperCard.vue";

const store = useProductDetailStore();

const fakeProduct = [
    {
        id:1,
        name:"Products",
        product_detail:{
            condition:"Bor",
            price:1200
        }
    },
    {
        id:2,
        name:"Products",
        product_detail:{
            condition:"Bor",
            price:1200
        }
    },
    {
        id:3,
        name:"Products",
        product_detail:{
            condition:"Bor",
            price:1200
        }
    },
    {
        id:4,
        name:"Products",
        product_detail:{
            condition:"Bor",
            price:1200
        }
    }
]
</script>
