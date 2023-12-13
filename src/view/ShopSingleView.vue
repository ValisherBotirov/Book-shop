<template>
  <div>
    <div class="container mx-auto">
      <RouteLink class=" text-xl sx:pt-[65px] md:pt-[35px]" :route="routeLink" />
      <h1 class="sx:text-xl md:text-2xl font-sans font-medium">
        MacBook Air 15:
        <span>M2 chip 8-core CPU </span>
      </h1>
      <div class="grid lg:grid-cols-12 sx:grid-cols-6 my-8 sx:mt-[15px] md:mt-8">
        <div class="swiperImg col-span-12 md:col-span-6 lg:col-span-4 relative">
          <img
            class="rounded-xl object-cover cursor-pointer w-[100%]"
            src="https://image.shutterstock.com/image-photo/image-260nw-2068476605.jpg"
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
          <button class="font-bold border-b py-1 text-2xl text-[#333] border-primary">
            Mahsulot ta'rifi
          </button>
        </div>
        <div>
          <p class="text-[#333] text-xl mb-6 sx:w-[100%] md:w-[50%]">
            Apple Silicon M1 chip: MacBook Air 2020 modelida Apple o'zini ishlab chiqgan M1 chipni qo'llab-quvvatlashga o'tgan. Bu yangi chipta odatiy xususiyatlarga ega bo'lib, operatsion tizimning samaradorligini oshiradi va batareya davriyini uzaytiradi.

            8GB RAM (tugagan model uchun): Birinchi marta, MacBook Air 8 gigabayt xotiraga ega. Bu, odatiy yoki muntazam foydalanish uchun kifoya bo'lishi mumkin.

            256GB SSD (tugagan model uchun): Uzlukdagi omborda odatiy modelda 256 gigabayt hajmi mavjud. Bu SSD (xotira kiskasi) tizimni tez ishlatishda va fayllarga tezroq kirishda yordam beradi.

            Retina Display: MacBook Air, qadriy Retina displeyga ega, bu esa yaxshi ko'rsatish va grafikalar uchun yaxshi natijalarni ta'minlashda yordam beradi.

            USB-C portlar: MacBook Air 2020 modeli, faqatgina USB-C portlar bilan ta'minlangan. Bu portlar batareya zaryadi, har birini ishlatish va boshqa ulanmalar bilan ishlash uchun mo'ljallangan.

            Yengil dizayn: MacBook Air 2020 modeli, yengil va hafif dizaynga ega bo'lib, to'g'ri xayotda, o'qish yoki ishda ishlatish uchun mos keladi.
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
