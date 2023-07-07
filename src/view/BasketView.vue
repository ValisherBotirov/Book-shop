<template>
  <div class="container pt-[40px]">
      <p class="text-3xl font-medium pb-6">Savatcha</p>
      <div class="grid grid-cols-12 gap-6 items-start">
          <div class="col-span-12 lg:col-span-8 border border-[#e8e8e8] rounded-lg px-4 py-3 h-[40vh] ss:h-[60vh] md:h-[80vh] overflow-y-scroll shadow">
            <BasketCardCost v-for="(item,index) in 10" :key="index" class="mt-4"/>
          </div>
          <div class="col-span-12 md:col-span-6 lg:col-span-4 border border-[#e8e8e8] rounded-lg px-4 py-3 shadow">
              <div class="pb-4 border-b border-[#e8e8e8]">
              <div class="flex justify-between text-[#111] font-medium text-2xl  ">
                  <p >Jami:</p>
                  <p >12 000 000 UZS</p>
              </div>
                  <div class="flex justify-between text-[#111] font-normal text-lg mt-3">
                      <p>Savatchangizdagi mahsulotlar soni:</p>
                      <p>20 ta</p>
                  </div>
              </div>
              <div class="mt-3">
                  <button-fill color="#F4CE47">
                      <span class="py-2 text-lg text-black">Sotib Olish</span></button-fill>
              </div>
          </div>
      </div>
  </div>
</template>
<script setup>

import BasketCardCost from "@/components/card/BasketCardCost.vue";
import ButtonFill from "@/components/buttons/ButtonFill.vue";
</script>