<template>

    <div class="flex flex-col ss:flex-row justify-between items-center gap-5 pb-4 border-b border-[#e8e8e8] relative">
        <div class="flex-shrink-0 w-[100px] h-[100px]">
            <img src="https://islom.uz/img/section/section_1503922927.jpg" alt="book" class="w-full h-full object-cover">
        </div>
        <div class="flex flex-col  justify-between">
            <router-link to="/shop/1" class="transition duration-100 hover:text-primaryBlue line-clamp-2 text-center ss:text-left ss:pr-7">Shayx Muhammad Soqid Muhammad Yusuf Kifoya 3-juz sdfiusdgfusydgf dfiusd</router-link>

        </div>
        <InputCount v-model="count"/>
        <div class="flex-shrink-0">
            12 500 UZS
        </div>
        <div
            class="delete absolute top-0 right-0 cursor-pointer"
            @click=""
        >
            <i class="fa-solid fa-xmark text-base hover:text-[red]"></i>
        </div>
    </div>
</template>
<script setup lang="ts">
import InputCount from "@/components/shop/InputCount.vue";
import {ref} from "vue";
const count = ref(5)
</script>