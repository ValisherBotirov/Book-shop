<template>
  <div class="md:flex block sx:py-5 sx:mt-3 lg:py-0">
    <div class="md:w-[50%] w-[100%]">
      <ul>
        <li class="flex justify-between md:px-10 text-start items-center">
          <span>Til</span><span>O'zbekcha</span>
        </li>
        <li class="flex justify-between md:px-10 text-start items-center">
          <span>Yozuv</span><span>Krilcha</span>
        </li>
        <li class="flex justify-between md:px-10 text-start items-center">
          <span>Sana</span><span>10.09.2023</span>
        </li>
        <li class="flex justify-between md:px-10 text-start items-center">
          <span>Nashriyot</span><span>Hilol nashr</span>
        </li>
        <li class="flex justify-between md:px-10 text-start items-center">
          <span>Sana</span><span>10.09.2023</span>
        </li>
        <li class="flex justify-between md:px-10 text-start items-center">
          <span>Sahifalar soni</span><span>100</span>
        </li>
        <li class="flex justify-between md:px-10 text-start items-center">
          <span>Sana</span><span>10.09.2023</span>
        </li>
        <li class="flex justify-between md:px-10 text-start items-center">
          <span>Size</span><span>A4</span>
        </li>
        <li class="flex justify-between md:px-10 text-start items-center">
          <span>Sotuvda</span><span>Bor</span>
        </li>
      </ul>
      <ul
        class="md:px-10 lg:px-[26px] xl:px-10 pt-12 flex justify-between gap-3"
      >
        <li
          @click="openModalAudio"
          class="translation flex items-center gap-3 cursor-pointer justify-center bg-[#002E69] rounded-md w-[50%] py-2 text-white hover:bg-transparent hover:text-black hover:border-black border-[1px] hover:border-solid"
        >
          <i class="iconAn fa-solid fa-headphones"></i>Kitob audiosi
        </li>
        <li
          @click="openModalPdf"
          class="translation flex items-center gap-3 cursor-pointer justify-center bg-[#002E69] rounded-md w-[50%] py-2 text-white hover:bg-transparent hover:text-black hover:border-black border-[1px] hover:border-solid"
        >
          <i class="iconAn fa-solid fa-book-open"></i> Kitobni o'qish
        </li>
      </ul>
    </div>
    <div
      class="border-[#9d9a9a] border-solid border-[2px] p-5 sx:mt-6 md:mt-0 rounded-xl sx:w-[100%] md:w-[50%]"
    >
      <div class="flex items-end gap-3 relative">
        <h1 class="font-medium text-2xl">40 000 so'm</h1>
        <del class="font-medium text-xl opacity-[0.5]">52 000 so'm</del>
        <strong
          class="iconAn sx:text-[17px] md:text-[20px] absolute right-[-75px] top-10 rotate-45 bg-[red] text-white px-3 py-1 rounded-md"
          ><i class="fa-solid fa-bookmark mx-2"></i>Supper chegirma
          <span>32</span><i class="mx-1 fa-solid fa-percent"></i
        ></strong>
      </div>
      <div class="flex items-center gap-3 pt-4 font-medium">
        <p class="text-2xl">Umumiy so'm:</p>
        <h2 class="text-2xl">40 000 so'm</h2>
      </div>
      <div class="flex items-center gap-6 mt-2 my-2">
        <p class="text-[#333] text-2xl">Miqdori:</p>
        <InputCount v-model="count" />
      </div>
      <div class="flex flex-col gap-3 pt-5">
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
    <BooksTypeModal
      @closeBookTypeModal="isModalBook = false"
      v-if="isModalBook"
      :type="typeModal"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import InputCount from "../../components/shop/InputCount.vue";
import SaveBasket from "@/components/buttons/SaveBasket.vue";
import BooksTypeModal from "../modals/BooksTypeModal.vue";
const typeModal = ref("");
const isModalBook = ref(false);
const emit = defineEmits(["isModalBook"]);
const count = ref(1);

const openModalAudio = () => {
  isModalBook.value = true;
  typeModal.value = "audio";
};
const openModalPdf = () => {
  isModalBook.value = true;
  typeModal.value = "pdf";
};
</script>
<style scoped>
.translation {
  transition: all 0.2s linear;
}
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
    opacity: 0.2;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
}
</style>
