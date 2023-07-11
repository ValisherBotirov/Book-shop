<template>
  <div
    @click="emit('closeBookTypeModal')"
    class="fixed z-[999999] bg-[#00000030] inset-0 backdrop-blur-[11.5px]"
  ></div>
  <div
    class=" fixed z-[999999] bg-[#fafcf5] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg max-sm:w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] sx:p-3 sx:pt-8 md:p-5 rounded-md"
  >
    <div class="grid sx:grid-cols-1 md:grid-cols-2" v-if="type === 'audio'">
      <div class="w-[100%]">
        <img
          :src="imageBook"
          alt="image book"
          class="rounded-md sx:w-[100%] md:w-[90%] md:h-[100%] object-cover"
        />
      </div>
      <div class="w-[100%] grid sx:grid-cols-1 md:grid-cols-1">
        <h1
          class="sx:text-[17px] sm:text-[20px] sx:pt-3 md:pt-0 md:text-[25px] font-medium px-1 font-serif"
        >
          <span>Nodir Ikromov: </span>
          <span>Tentaklikning bir turi kitobi </span>
        </h1>
        <ul class="sx:pt-2 md:pt-5 sx:text-[15px] md:text-[17px] w-[100%]">
          <li class="flex justify-between">
            <span>Kitob turi</span><span>Audio</span>
          </li>
          <li class="flex justify-between">
            <span>Audio mualif</span><span>Bilmimz hali</span>
          </li>
          <li class="flex justify-between">
            <span>Narxi</span><span>145 000 so'm</span>
          </li>
          <li class="flex justify-between">
            <span>Holati</span><span>Sotuvda bor</span>
          </li>
          <li class="flex justify-between">
            <span>Sana</span><span>23.03.2025</span>
          </li>
          <li class="pt-3">
            <ButtonFill><span class="py-1">Sotib olish </span></ButtonFill>
          </li>
        </ul>
      </div>
    </div>
    <div class="grid sx:grid-cols-1 md:grid-cols-2 opacity-[10]" v-else-if="type === 'pdf'">
      <div class="w-[100%]">
        <img
          :src="imageBook"
          alt="image book"
          class="rounded-md sx:w-[100%] md:w-[90%] md:h-[100%] object-cover"
        />
      </div>
      <div class="w-[100%] grid sx:grid-cols-1 md:grid-cols-1">
        <h1
          class="sx:text-[17px] sm:text-[20px] sx:pt-3 md:pt-0 md:text-[25px] font-medium px-1 font-serif"
        >
          <span>Nodir Ikromov: </span>
          <span>Tentaklikning bir turi kitobi </span>
        </h1>
        <ul class="sx:pt-2 md:pt-5 sx:text-[15px] md:text-[17px] w-[100%]">
          <li class="flex justify-between">
            <span>Kitob turi</span><span>PDF</span>
          </li>
          <li class="flex justify-between">
            <span>Sahifalar soni</span><span>120</span>
          </li>
          <li class="flex justify-between">
            <span>Narxi</span><span>145 000 so'm</span>
          </li>
          <li class="flex justify-between">
            <span>Holati</span><span>Sotuvda bor</span>
          </li>
          <li class="flex justify-between">
            <span>Sana</span><span>23.03.2025</span>
          </li>
          <li class="pt-3">
            <ButtonFill><span class="py-1">Sotib olish </span></ButtonFill>
          </li>
        </ul>
      </div>
    </div>
    <div
      @click="emit('closeBookTypeModal')"
      class="absolute top-1 right-3 text-xl"
    >
      <i
        class="fa-solid fa-xmark duration-200 cursor-pointer hover:opacity-50"
      ></i>
    </div>
  </div>
</template>
<script setup lang="ts">
import imageBook from "../../assets/img/about/ok.jpg";
import ButtonFill from "../buttons/ButtonFill.vue";

interface Props {
  type?: string;
}
withDefaults(defineProps<Props>(), {
  type: "audio",
});
const emit = defineEmits(["closeBookTypeModal"]);
</script>
<style scoped>
.ok{
  transition: all 3s linear;
}
</style>
