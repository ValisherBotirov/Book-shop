<template>
  <div
    class=" flex gap-3 max-h-48 overflow-hidden"
  >
    <div class="flex-shrink-0 border border-[#e1e1e1] transition duration-300 hover:border-[#010101] p-1">
      <router-link :to="`/shop/1`" class=" hover:border cursor-pointer">
        <img
          class="object-cover w-[90px] h-[90px] object-center"
          :src="item?.image_url ? item.image_url : 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGYtczczLXRlZC0xMDIyMi5qcGc.jpg'"
          alt="cardImg"
        />
      </router-link>
    </div>
    <div class="relative ">
      <div
        class="delete absolute top-0 right-0 cursor-pointer"
        @click="deleteProduct(item.id)"
      >
        <i class="fa-solid fa-xmark text-base hover:text-[red]"></i>
      </div>
      <router-link
        :to="`/shop/1`"
        class="transition duration-100 hover:text-primaryBlue line-clamp-2 pr-7"
      >
        {{ item?.name }} MacBook Air 15 | Up to 24GB unified memory
      </router-link>

        <p class="mt-2 text-sm">{{item?.count}} x <span class="font-medium">{{ numberWithSpaces(15000000) }} UZS</span> </p>
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
