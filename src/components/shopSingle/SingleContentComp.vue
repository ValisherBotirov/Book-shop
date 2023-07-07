<template>
  <div class="flex">
    <div class="w-[50%]">
      <ul>
        <li class="flex justify-between px-10 text-start items-end"><span>Til</span><span class="w-[100%] border-dashed border-[1px] border-[#333] opacity-[0.5]"></span><span>O'zbekcha</span></li>
        <li class="flex justify-between px-10 text-start items-end"><span>Yozuv</span><span class="w-[100%] border-dashed border-[1px] border-[#333] opacity-[0.5]"></span><span>Kirilcha</span></li>
        <li class="flex justify-between px-10 text-start items-end"><span>Sana</span><span class="w-[100%] border-dashed border-[1px] border-[#333] opacity-[0.5]"></span><span>10.07.2023</span></li>
        <!-- <li class="flex justify-between px-10 text-start items-end"><span class="w-[33%]">Nashriyot</span><i class="iconAn w-[20%] fa-solid fa-minus hover:cursor-pointer"></i><span class="w-[33%]">Hilol</span></li>
        <li class="flex justify-between px-10 text-start items-end"><span class="w-[33%]">Yozuv</span><i class="iconAn w-[20%] fa-solid fa-minus hover:cursor-pointer"></i><span class="w-[33%]">Krilcha</span></li>
        <li class="flex justify-between px-10 text-start items-end"><span class="w-[33%]">Sana</span><i class="iconAn w-[20%] fa-solid fa-minus hover:cursor-pointer"></i><span class="w-[33%]">10.07.2023</span></li>
        <li class="flex justify-between px-10 text-start items-end"><span class="w-[33%]">Sahifa</span><i class="iconAn w-[20%] fa-solid fa-minus hover:cursor-pointer"></i><span class="w-[33%]">100</span></li> -->
      </ul>
    </div>
    <div
      class="border-[#9d9a9a] border-solid border-[2px] p-5 rounded-xl w-[50%]"
    >
      <div>
        <h1 class="font-medium text-2xl">40 000 so'm</h1>
      </div>
      <div class="flex items-center gap-6 mt-2 my-2">
        <p class="text-[#333] text-2xl">Miqdori:</p>
        <InputCount v-model="count" />
      </div>
      <div class="flex flex-col gap-3">
        <SaveBasket class="w-full"> Savatga qo'shish </SaveBasket>
        <SaveBasket
          class="w-full"
          :icon="false"
          custom-class="bg-[#79a206] !text-white border-none !hover:!bg-[#3E444A]"
        >
          Joyida sotib olish
        </SaveBasket>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import InputCount from "../../components/shop/InputCount.vue";
import SaveBasket from "@/components/buttons/SaveBasket.vue";
const count = ref(1);
</script>
<style scoped>
.iconAn {
  /* transform: translateX(-100%); */
  animation: 3s linear 1s infinite alternate example;
}

@keyframes example {
  0% {
    transform: translateX(-100px);
  }
  25% {
    transform: translateX(-50px);
    opacity: 0;
  }
  50% {
    transform: translateX(0px);
    opacity: 1;
  }
  75% {
    transform: translateX(50px);
    opacity: 0;
  }
  100% {
    transform: translateX(100px);
    opacity: 1;
  }
}
</style>
