<template>
  <div
    class="flex flex-col items-center cursor-pointer group relative"
    @click="passSavedPage"
  >
    <i
      class="fa-heart text-[20px] md:text-[22px] lg:text-[28px] fa-regular text-[#fff] transition hover:text-[#F4CE47]"
    ></i>
    <span
      class="absolute flex flex-shrink-0 bottom-0 right-0 md:right-[-6px] w-[16px]  h-[16px] rounded-full bg-white group-hover:bg-[#F4CE47] hover:bg-[#F4CE47] text-black font-medium text-[10px] mx-auto items-center justify-center"
      :class="customCircleClass">
      20
    </span>
  </div>
</template>

<script setup >
import { useRouter } from "vue-router";


const router = useRouter();
function passSavedPage() {
  router.push("/saved");
}
defineProps({
  customClass: String,
  customCircleClass: String,
});
</script>
