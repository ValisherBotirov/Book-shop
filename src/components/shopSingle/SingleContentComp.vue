<template>
  <div>
      <h2 class="text-3xl mb-2 font-bold text-primaryBlue">
          Mahsulot nomi
      </h2>
      <div class="flex items-center gap-6 mt-2">
        <p class="text-[#4F87D3CC] text-xl">Quantity:</p>
        <InputCount v-model="count" />
      </div>
      <div class="flex items-center gap-6 mt-4">
          <p class="text-[#4F87D3CC] text-xl ">Narxi:</p>
          <p class="text-2xl font-bold text-[#4F87D3CC]">70 000 SUM</p>
      </div>
      <div class="flex items-center gap-6 mt-4">
          <p class="text-[#4F87D3CC] text-xl ">Kategoriya:</p>
          <p class="text-xl  text-[#4F87D3CC]">Biznes</p>
      </div>
      <div class="flex items-center gap-6 mt-4">
          <p class="text-[#4F87D3CC] text-xl ">Nashriyoti:</p>
          <p class="text-xl  text-[#4F87D3CC]">Asaxiy</p>
      </div>
      <div class="flex mt-6 items-center gap-6">
          <SaveBasket class="w-full " >
              Savatga qo'shish
          </SaveBasket>
          <SaveBasket class="w-full " :icon="false" custom-class="bg-[#79a206] !text-white border-none !hover:!bg-[#3E444A]">
              Joyida sotib olish
          </SaveBasket>
      </div>

  </div>
</template>

<script setup>
import { ref } from "vue";
import InputCount from "../../components/shop/InputCount.vue";
import SaveBasket from "@/components/buttons/SaveBasket.vue";
const count = ref(1);

</script>
