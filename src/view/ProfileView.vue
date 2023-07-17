<template>
  <div class="container mx-auto min-h-screen">
    <div class="flex justify-between items-end my-6 sx:mt-[60px] md:mt-10">
      <p class="sx:text-2xl md:text-3xl text-primary">Shaxsiy kabinet</p>
      <div>
        <button @click="handleLogout" class="flex gap-2">
          <ButtonFillVue color="#F4CE47"
            ><span class="sx:py-1 md:py-2 text-black font-medium"
              >Chiqish</span
            ></ButtonFillVue
          >
        </button>
      </div>
    </div>
    <div class="sx:block md:flex sx:gap-2 md:gap-7 bg-[#00000014]  p-7 rounded-xl">
      <div>
        <div
          class="cursor-pointer bg-[#fff] rounded-full sx:w-[50%] md:w-[100%] sx:mx-auto overflow-hidden"
        >
          <img :src="profile" alt="profile" class="w-[100%]" />
        </div>
      </div>
      <div class="sx:w-[100%] sx:flex sx:justify-center md:w-[100%] lg:w-[40%]">
        <ul
          class="flex flex-col gap-2 sx:text-sm sm:text-base md:text-[18px] font-medium text-[#333] relative pt-10"
        >
          <li class="flex items-center gap-7">
            <span>F.I.Sh</span
            ><i
              class="translation text-amber-500 text-lg cursor-pointer hover:translate-x-[15px] fa-solid fa-arrow-right"
            ></i
            ><span class="w-[100%] text-left">Nodir Ikromov Shomurod o'gli</span>
          </li>
          <li class="flex items-center gap-7">
            <span>Tel</span
            ><i
              class="translation text-amber-500 text-lg cursor-pointer hover:translate-x-[15px] fa-solid fa-arrow-right"
            ></i
            ><span class="w-[100%] text-left">(99) 105 92 01</span>
          </li>
          <li class="flex items-center gap-7">
            <span>Parol</span
            ><i
              class="translation text-amber-500 text-lg cursor-pointer hover:translate-x-[15px] fa-solid fa-arrow-right"
            ></i
            ><span class="w-[100%] text-left">123456789</span>
          </li>
          <li @click="editModal = true" class="text-[red] cursor-pointer pt-6">Ma'lumotlarni o'zgartirish</li>
        </ul>
      </div>
    </div>
  </div>
  <EditProfileModal
  @closeEditProfileModal="editModal = false"
   v-if="editModal" />
  <LoadingVue v-if="isLoading" />
</template>

<script setup>
import { ref } from "vue";

import { useRouter } from "vue-router";

import ButtonFillVue from "../components/buttons/ButtonFill.vue";
import LoadingVue from "../components/modals/LoadingModal.vue";

// Edit Modal
import EditProfileModal from "@/components/modals/EditProfileModal.vue";
import profile from "../assets/svg/profile.svg";
import {useAuthStore} from "@/store/auth.js";
const editModal = ref(false);
const isLoading = ref(false);

const router = useRouter();

const authStore =  useAuthStore()
const handleLogout = () => {
    authStore.logOut()
  router.push("/");
};
</script>
<style scoped>
.translation {
  transition: all 0.5s linear;
}
</style>
