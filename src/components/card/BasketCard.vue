<template>
  <div
    class="card bg-white rounded-xl grid grid-cols-3 max-h-48 overflow-hidden"
  >
    <div class="img h-full col-span-1">
      <router-link :to="`/shop/${item?.id}`">
        <img
          class="object-cover h-full w-full object-center"
          :src="item?.image_url ? item.image_url : 'https://islom.uz/img/section/section_1503922927.jpg'"
          alt="cardImg"
        />
      </router-link>
    </div>
    <div class="img rounded-xl bg-[#F4F6F9] flex flex-col gap-3 px-3 py-2 relative col-span-2">
      <div
        class="delete absolute top-2 right-3 cursor-pointer"
        @click="deleteProduct(item.id)"
      >
        <i class="fa-solid fa-xmark text-lg hover:text-[red]"></i>
      </div>
      <router-link
        :to="`/shop/${item?.id}`"
        class="transition duration-100 hover:text-primaryBlue line-clamp-2"
      >
        {{ item?.name }} Shayx Muhammad Sodiq Muhammad Yusuf - Kifoya
      </router-link>

      <div class="flex justify-between items-center flex-wrap">
        <p class="font-semibold">
          {{ numberWithSpaces(item?.product_detail?.price) }} сум
        </p>
        <InputCount v-model="item.count" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import numberWithSpaces from "../../helpers/numberFormat.js";
import InputCount from "../shop/InputCount.vue";

import { useBasketStore } from "../../store/basketProducts.js";

const store = useBasketStore();

interface Props {
  item: {
    id: number;
    image_url: string;
    product_detail: {
      price: number;
    };
    name: string;
    count: number;
  };
}

defineProps<Props>();

function deleteProduct(id) {
  store.products = store.products.filter((item) => item.id !== id);
}
</script>
