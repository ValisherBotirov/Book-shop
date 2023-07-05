<template>
  <div>
      <h2 class="text-3xl mb-2 font-bold text-primaryBlue">
          product name
      </h2>
    <div class="grid grid-cols-5">
      <div class="col-span-2 md:col-span-3 justify-between">
        <p class="text-[#4F87D3CC] text-xl">Количество</p>
        <InputCount v-model="count" />
      </div>
    </div>
    <p class="text-[#4F87D3CC] text-xl mb-3">Характеристики</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import InputCount from "../../components/shop/InputCount.vue";
const count = ref(1);

</script>
