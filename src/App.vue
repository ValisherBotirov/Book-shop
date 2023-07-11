<template>
  <div
    class="h-full overflow-hidden min-h-[100vh] flex flex-col justify-between"
  >
    <div>
      <HeaderVue />
      <RouterView />
    </div>
    <BasketModal
      :isOpen="openShopModal"
      @closeModal="(e) => (openShopModal = e)"
    />
    <MobileCategory @openBasketModal="openShopModal = true"/>
    <FooterVue />
  </div>
  <Loading v-if="loading" />
</template>

<script setup>
import { RouterView } from "vue-router";
import HeaderVue from "./components/header/Header.vue";
import FooterVue from "./components/footer/Footer.vue";
import Loading from "./components/modals/LoadingModal.vue";
import { useLoadingStore } from "./store/loading";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import BasketModal from "@/components/modals/BasketModal.vue";
import MobileCategory from "./components/shopCategory/MobileCategory.vue";
const store = useLoadingStore();
const { loading } = storeToRefs(store);
const openShopModal = ref(false);

// Amount();

onMounted(() => {
  localStorage.removeItem("ProductDetail");
  localStorage.removeItem("mainProducts");
  localStorage.removeItem("loadingStore");
  localStorage.removeItem("servis");
});
</script>
