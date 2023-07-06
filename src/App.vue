<template>
  <div
    class="h-full overflow-hidden min-h-[100vh] flex flex-col justify-between"
  >
    <div>
      <HeaderVue />
      <RouterView />
    </div>
    <MobileCategory />
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
import { onMounted } from "vue";
import MobileCategory from "./components/shopCategory/MobileCategory.vue";
const store = useLoadingStore();
const { loading } = storeToRefs(store);

// Amount();

onMounted(() => {
  localStorage.removeItem("ProductDetail");
  localStorage.removeItem("mainProducts");
  localStorage.removeItem("loadingStore");
  localStorage.removeItem("servis");
});
</script>
