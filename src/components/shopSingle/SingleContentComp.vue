<template>
  <div class="flex">
    <div class="w-[50%]">
      <ul>
        <li class="flex justify-between px-10 text-start items-center">
          <span>Til</span
          ><span
            class="iconAn w-[100%] border-dashed border-[1px] border-[#333] opacity-[0.5]"
          ></span
          ><span>O'zbekcha</span>
        </li>
        <li class="flex justify-between px-10 text-start items-center">
          <span>Yozuv</span
          ><span
            class="iconAn2 w-[100%] border-dashed border-[1px] border-[#333] opacity-[0.5]"
          ></span
          ><span>Kirilcha</span>
        </li>
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
  animation: 3s linear 1s infinite alternate example;
}
.iconAn2 {
  animation: 2s linear 1s infinite alternate example2;
}

@keyframes example {
  0% {
  }
  25% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes example2 {
  0% {
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
