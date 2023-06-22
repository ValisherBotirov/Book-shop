<template>
  <div class="w-full fixed z-[999] top-0  backdrop-blur-sm">
    <div class="px-4 bg-[#444444BF] drop-shadow-lg rounded-b-2xl flex justify-between items-center shadow-lg">
      <span @click="isOpenSidebar = true" class="md:hidden text-white">
        <i class="fa-solid fa-bars p-3 text-xl"></i>
      </span>
      <RouterLink
        to="/"
        class="flex items-center gap-1 group"
        :class="router.currentRoute.value.path === '/' ? 'text-primary' : 'text-white'"
      >
          <img src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png" class="w-[40px]" alt="">
        <span class="uppercase font-normal text-lg md:text-xl duration-200 group-hover:text-primary">
          BOOKSHOP
        </span>
      </RouterLink>

      <ul class="hidden md:flex gap-6 [&>li]:inline-block [&>li]:py-3">
        <li
          v-for="(val, i) in routeNav"
          :key="i"
          class="relative before:duration-300 before:absolute before:bottom-0 before:opacity-0 hover:before:opacity-100 hover:before:bottom-3 before:left-1/2 hover:before:left-0 hover:before: before:w-2 hover:before:w-full before:h-[1px] before:bg-white"
          :class="router.currentRoute.value.path === val.link ? 'text-primary' : 'text-[#F4F6F9]'"
        >
          <RouterLink class="capitalize" :to="val.link">{{ $t(val.name) }}</RouterLink>
        </li>
      </ul>

      <div class="text-[#F4F6F9] flex items-center gap-1">
        <LangCompVue />

        <span class="hidden md:inline">
          <svg class="w-[1px] h-7" viewBox="0 0 1 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.5" y1="0.5" x2="0.499999" y2="29.5" stroke="#F4F6F9" stroke-linecap="round" />
          </svg>
        </span>

        <div class="hidden md:flex items-center gap-2" v-if="!store.isRegisteration">
          <span @click="isRegisterationModal = true" class="duration-200 cursor-pointer hover:text-primary"
            >{{ $t('register') }}</span
          >
          <span
            @click="isLoginModal = true"
            class="flex items-center gap-1 cursor-pointer border px-3 py-1 rounded-xl duration-200 border-[#F4F6F9] hover:bg-[#F4F6F9] hover:text-primary group"
          >
            <span>
              <svg
                class="w-6 h-6 stroke-[#F4F6F9] group-hover:stroke-primary"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 4.0102H26.425C27.5808 3.95868 28.7099 4.36705 29.5654 5.14597C30.4208 5.92488 30.9329 7.01091 30.9896 8.16645V26.8331C30.9329 27.9887 30.4208 29.0747 29.5654 29.8536C28.7099 30.6325 27.5808 31.0409 26.425 30.9894H17.5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path d="M4.00977 17.5H21.8743" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M21.8743 17.4998L16.041 11.6665"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21.8743 17.5L16.041 23.3333"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            {{$t('exit')}}
          </span>
        </div>

        <div class="hidden md:flex items-center gap-2" v-if="store.isRegisteration">
          <RouterLink class="flex items-center gap-1 px-3 py-1 group" to="/profile">
            <span>
              <svg class="w-6 h-6 fill-white group-hover:fill-primary duration-200" viewBox="0 0 35 35" fill="none">
                <path
                  d="M17.4997 18.5936C12.8768 18.5936 9.11426 14.8311 9.11426 10.2082C9.11426 5.58525 12.8768 1.82275 17.4997 1.82275C22.1226 1.82275 25.8851 5.58525 25.8851 10.2082C25.8851 14.8311 22.1226 18.5936 17.4997 18.5936ZM17.4997 4.01025C14.0872 4.01025 11.3018 6.79567 11.3018 10.2082C11.3018 13.6207 14.0872 16.4061 17.4997 16.4061C20.9122 16.4061 23.6976 13.6207 23.6976 10.2082C23.6976 6.79567 20.9122 4.01025 17.4997 4.01025Z"
                />
                <path
                  d="M30.0268 33.1771C29.4289 33.1771 28.9331 32.6812 28.9331 32.0833C28.9331 27.0521 23.7997 22.9687 17.4997 22.9687C11.1997 22.9687 6.06641 27.0521 6.06641 32.0833C6.06641 32.6812 5.57057 33.1771 4.97266 33.1771C4.37474 33.1771 3.87891 32.6812 3.87891 32.0833C3.87891 25.8562 9.98932 20.7812 17.4997 20.7812C25.0101 20.7812 31.1206 25.8562 31.1206 32.0833C31.1206 32.6812 30.6247 33.1771 30.0268 33.1771Z"
                />
              </svg>
            </span>
            <p class="duration-200 group-hover:text-primary">
              {{ store.user?.username }}
            </p>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>

  <div class="h-16"></div>

  <RegisterModalVue @closeRegiterModal="isRegisterationModal = false" v-if="isRegisterationModal" />
  <LoginModalVue @changeTo="changeLoginToRegister" @closeLoginModal="isLoginModal = false" v-if="isLoginModal" />
  <SideBar @openSidebar="openSidebar" :isOpenSidebar="isOpenSidebar" />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { useUserRegister } from "../../store/UserRegister";
import { useI18n } from "vue-i18n";
import RegisterModalVue from "../modals/RegisterModal.vue";
import LoginModalVue from "../modals/LoginModal.vue";
import LangCompVue from "./LangComp.vue";
import SideBar from "../sideBar/SideBar.vue";

const store = useUserRegister();
const router = useRouter();
const { t } = useI18n();

const routeNav = ref([
  { name: ("header.service"), link: "/services" },
  { name: ("header.magazin"), link: "/shop" },
  { name: ("header.about"), link: "/about" },
  { name: ("header.contact"), link: "/contact" },
]);

const isLoginModal = ref(false);
const isRegisterationModal = ref(false);
const isOpenSidebar = ref(false);

const changeLoginToRegister = () => {
  isRegisterationModal.value = true;
  isLoginModal.value = false;
};

function openSidebar() {
  isOpenSidebar.value = false;
}
</script>
