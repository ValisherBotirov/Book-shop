<template>
    <div class="flex flex-col items-center cursor-pointer group relative " @click="passSavedPage">
        <i
                class="fa-heart text-[20px] md:text-[22px] lg:text-[28px] fa-regular  text-white transition hover:text-primary"
        ></i>
        <span
                class="absolute flex flex-shrink-0 bottom-0 right-0 md:right-[-6px] w-4 h-4 rounded-full bg-black group-hover:bg-primary hover:bg-primary text-gray-100 text-[10px]  items-center justify-center" :class="customCircleClass"
        >
       20
      </span>
    </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter()
function passSavedPage(){
    router.push("/saved")
}
</script>