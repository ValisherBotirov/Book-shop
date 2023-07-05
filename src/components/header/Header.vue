<template>
  <div class="w-full fixed z-[999] top-0 backdrop-blur-sm">
    <div
      class="px-4 py-2 bg-[#444444BF] drop-shadow-lg rounded-b-2xl shadow-lg"
    >
      <div class="gap-4 flex justify-between items-center">
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
          <img
            src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png"
            class="w-[30px] md:w-[40px]"
            alt=""
          />
          <span
            class="uppercase font-normal text-lg md:text-xl duration-200 text-white"
          >
            BOOKSHOP
          </span>
        </RouterLink>

        <div class="hidden md:flex"></div>
        <div class="hidden md:flex items-center grow">
          <Category />
          <div class="w-full relative mx-2">
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
            <SavedCart class="hidden md:block" />
            <ShopCart @click="openShopModal = true" class="hidden md:block" />
            <LangCompVue />
            <BasketModal
              :isOpen="openShopModal"
              @closeModal="(e) => (openShopModal = e)"
            />
          </div>
          <LineSVG class="hidden md:inline" />
          <SignSection
            v-if="!store.isRegisteration"
            @isRegister="(e) => (isRegisterationModal = e)"
            @isLogin="(e) => (isLoginModal = e)"
          />
          <AuthSection
            :user-name="store.user?.name"
            v-if="store.isRegisteration"
          />
        </div>
      </div>
      <div
        class="flex items-center gap-1 border-t pt-3 border-white b md:hidden justify-between mt-3 mb-1"
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

        <!-- savatcha -->

        <!-- <ShopCart
          @click="openShopModal = true"
          class="flex md:flex"
          customClass="w-[30px] h-[30px]"
          customCircleClass="!w-6 !h-6"
        /> -->
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
import { ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { useUserRegister } from "@/store/UserRegister.js";
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
const store = useUserRegister();
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
  console.log("click");
  showSearchBox.value = false;
});

const changeLoginToRegister = () => {
  isRegisterationModal.value = true;
  isLoginModal.value = false;
};

function openSidebar() {
  isOpenSidebar.value = false;
}
</script>
