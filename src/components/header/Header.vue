<template>
  <div class="w-full fixed z-[999] top-0 backdrop-blur-sm">
    <div
      class="bg-black drop-shadow-lg sx:rounded-b-0 md:rounded-b-2xl shadow-lg"
    >
      <div class="container mx-auto lg:gap-4 flex justify-between items-center">
        <span @click="isOpenSidebar = true" class="md:hidden text-white">
          <i class="fa-solid fa-bars p-3 text-xl"></i>
        </span>
        <RouterLink
          to="/"
          class="flex items-center gap-1 group"
          :class="
            router.currentRoute.value.path === '/'
              ? 'text-primary'
              : 'text-white'
          "
        >
          <div class="w-[50px] md:w-[85px]">
            <img
              :src="logo"
              class="w-[100%] md:w-[100%] object-cover"
              alt="site logo"
            />
          </div>
        </RouterLink>

        <div class="hidden md:flex"></div>
        <div class="hidden md:flex items-center grow">
          <Category />
          <div class="w-full relative mx-1">
            <SearchInput
              class="w-full"
              @getFocus="(e) => (showSearchBox = e)"
              @click="isShowSearch"
            />
            <SearchResult v-if="showSearchBox" @click="isShowSearch" />
          </div>
        </div>

        <div class="text-[#F4F6F9] flex items-center gap-2">
          <div class="flex justify-between items-center gap-3">
            <RouterLink to="/favourites">
              <SavedCart class="hidden md:block" />
            </RouterLink>
            <ShopCart @click="openShopModal = true" class="hidden md:block" />
            <LangCompVue />
            <BasketModal
              :isOpen="openShopModal"
              @closeModal="(e) => (openShopModal = e)"
            />
          </div>
          <LineSVG class="hidden md:inline" />
          <SignSection
            v-if="!isRegister"
            @isRegister="(e) => (isRegisterationModal = e)"
            @isLogin="(e) => (isLoginModal = e)"
          />
          <AuthSection
            :user-name="authStore?.user?.fullName"
            v-else
          />
        </div>
      </div>
      <div
        class="flex items-center gap-1 border-t py-2 px-2 border-white b md:hidden justify-between mt-3 mb-1"
      >
        <div>
          <Category />
        </div>
        <div class="w-full relative">
          <SearchInput
            class="w-full min-w-min"
            @getFocus="(e) => (showSearchBox = e)"
            @click="isShowSearch"
          />
          <SearchResult v-if="showSearchBox" @click="isShowSearch" />
        </div>
      </div>
    </div>
  </div>

  <div class="h-16"></div>
  <RegisterModalVue
    @closeRegiterModal="isRegisterationModal = false"
    v-if="isRegisterationModal"
  />
  <LoginModalVue
    @changeTo="changeLoginToRegister"
    @closeLoginModal="isLoginModal = false"
    v-if="isLoginModal"
  />
  <SideBar @openSidebar="openSidebar" :isOpenSidebar="isOpenSidebar" />
</template>

<script setup>
import {onMounted, ref, watch} from "vue";
import { RouterLink, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import RegisterModalVue from "../modals/RegisterModal.vue";
import LoginModalVue from "../modals/LoginModal.vue";
import LangCompVue from "./LangComp.vue";
import SideBar from "../sideBar/SideBar.vue";
import ShopCart from "@/components/header/ShopCart.vue";
import BasketModal from "@/components/modals/BasketModal.vue";
import SearchInput from "@/components/form/SearchInput.vue";
import SearchResult from "@/components/form/SearchResult.vue";
import SavedCart from "@/components/header/SavedCart.vue";
import LineSVG from "@/components/header/LineSVG.vue";
import SignSection from "@/components/header/SignSection.vue";
import AuthSection from "@/components/header/AuthSection.vue";
import Category from "../category/Category.vue";
import logo from "../../assets/img/static/books.png";
import {useAuthStore} from "@/store/auth.js";
const authStore =  useAuthStore()
const router = useRouter();
const { t } = useI18n();


const showSearchBox = ref(false);

const isLoginModal = ref(false);
const isRegisterationModal = ref(false);
const isOpenSidebar = ref(false);

const openShopModal = ref(false);

function isShowSearch(e) {
  e.stopPropagation();
}

window.addEventListener("click", () => {
  showSearchBox.value = false;
});

const changeLoginToRegister = () => {
  isRegisterationModal.value = true;
  isLoginModal.value = false;
};

function openSidebar() {
  isOpenSidebar.value = false;
}

const isRegister = ref(false)
function checkUser(){
    isRegister.value = authStore.checkUserRegister()
}

watch(()=>localStorage.getItem('token'),
    ()=>{
        console.log("watch is header")
        checkUser()
    }
)

watch(()=>authStore.isRegister,
    ()=>{
        console.log("watch is header")
        checkUser()
    }
)

onMounted((()=>{
    checkUser()
}))
</script>
