<template>
  <div>
    <div class="grid grid-cols-5">
      <div class="col-span-2 md:col-span-3 justify-between">
        <p class="text-[#4F87D3CC] text-xl">Количество</p>
        <InputCount v-model="count" />
      </div>
    </div>
    <p class="text-[#4F87D3CC] text-xl mb-3">Характеристики</p>
    <div v-for="(val, k) in JSON.parse(productSpecification)" :key="k" class="">
      <p>{{ val }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useProductDetailStore } from "@/store/productDetail.js";
const store = useProductDetailStore();
import { useBasketStore } from "@/store/basketProducts.js";
import InputCount from "../../components/shop/InputCount.vue";
const basketStore = useBasketStore();

const productSpecification = computed(() => store.productSpecification);

const count = ref(1);
const isClick = ref(false);

function saveBasket(product) {
  isClick.value = !isClick.value;
  console.log(product);
  if (isClick.value) {
    const newProduct = {
      ...product,
      count: count.value,
    };
    basketStore.products = basketStore.products.filter((item) => item.id !== product.id);
    basketStore.products.push(newProduct);
  } else {
    basketStore.products = basketStore.products.filter((item) => item.id !== product.id);
  }
}

</script>
