<template>
  <div
    class="md:hidden fixed z-10 bottom-0 left-0 right-0 w-full h-[80px] bg-[#fff]"
  >
    <ul class="flex justify-between items-center h-full px-4 text-2 xl">
      <li>
        <router-link to="/" class="flex flex-col items-center gap-1">
          <div class="w-[25px]">
            <img :src="homeSvg" alt="home image" class="w-full" />
          </div>
          <span class="sx:text-base font-semibold opacity-[0.8]"> Asosiy </span>
        </router-link>
      </li>
      <li
        @click="emit('openBasketModal', true)"
        class="flex flex-col items-center gap-1"
      >
        <div class="w-[25px]">
          <img :src="savatSvg" alt="home image" class="w-full" />
        </div>
        <span class="sx:text-base font-semibold opacity-[0.8]"> Savat </span>
      </li>
      <li>
        <router-link to="/favourites" class="flex flex-col items-center gap-1">
          <div class="w-[25px]">
            <img :src="sevimliSvg" alt="home image" class="w-full" />
          </div>
          <span class="sx:text-base font-semibold opacity-[0.8]">
            Sevimli
          </span>
        </router-link>
      </li>
      <li>
        <router-link to="/profile" class="flex flex-col items-center gap-1">
          <div class="w-[25px]">
            <img :src="profileSvg" alt="home image" class="w-full" />
          </div>
          <span class="textsx:text-base font-semibold opacity-[0.8]">
            Profil
          </span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script setup>
import homeSvg from "../../assets/svg/home.svg";
import profileSvg from "../../assets/svg/profile.svg";
import sevimliSvg from "../../assets/svg/sevimli.svg";
import savatSvg from "../../assets/svg/savat.svg";

const emit = defineEmits(["openBasketModal"]);
</script>
