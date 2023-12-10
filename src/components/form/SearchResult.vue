<template>
    <div class="w-full bg-white rounded-lg px-3 py-2 absolute" >
        <div class="flex justify-between">
            <p>Natijalar (23)</p>
            <p>
                <router-link to="#" class="text-[#0B91FD] transition hover:text-blue">

                    Hammasini ko'rish
                </router-link>
            </p>
        </div>

        <div class="border-t border-black/2 mt-2 pt-2">
            <div class="group transition mt-3" v-for="i in 5" :key="i">
                <router-link to="/" class="flex justify-between gap-4 items-center">
                    <div class="flex items-center gap-3">

                      <img src="https://image.shutterstock.com/image-photo/image-260nw-2290646579.jpg" alt="" class="h-[70px] w-[60px] object-contain" >
                        <p class="transition group-hover:text-[#0B91FD] line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem illo incidunt, laborum quibusdam quo quos saepe! Consequatur doloribus esse eveniet quis ratione.</p>
                    </div>
                    <p class="flex shrink-0 text-[#0B91FD]">45 000 sum</p>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script setup>
import {RouterLink} from "vue-router";
</script>