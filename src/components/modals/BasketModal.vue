<template>
  <Teleport class="basket" to="body">
    <div
      @click="closeModal"
      v-if="isOpen"
      class="modal fixed z-[99999] inset-0 bg-[#0005] backdrop-blur-sm"
    ></div>
    <div
      :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
      class="fixed w-[350px] sm:w-[400px] inset-y-0 z-[99999] duration-300 right-0 bg-white px-4 py-3 text-center flex flex-col justify-between items-center"
    >
      <div class="text-start  space-y-2 overflow-y-auto h-[75%]">
          <div class="flex justify-between text-black pb-3 border-b border-[#e1e1e1]">
              <p class="text-xl ">Cart</p>
              <i class="fa-solid fa-xmark text-lg hover:text-[red] cursor-pointer" @click="closeModal"></i>
          </div>
        <!-- empty component start-->
        <div
          v-if="!store.productCount"
          class="empty  text-white flex flex-col gap-3 text-center mt-5"
        >
          <div class="empty_img self-center">
            <SVGEmtyBasket />
          </div>
          <p class="text-black text-2xl">Ваша корзина пуста</p>
          <p class="text-black text-sm">
            Перейдите на страницу магазина и начните покупки сейчас
          </p>
          <p class="text-black text-sm">Желаем приятных покупок!</p>
          <button-fill-vue color="#D52C55" to="/">
            <span @click="closeModal" class="py-2 self-start"
              >Перейти в каталог</span
            >
          </button-fill-vue>
        </div>
        <!-- empty component end -->

        <div v-else class="flex flex-col gap-3 ">
          <BasketCard
                  class="mt-2 pb-3 border-b border-[#e1e1e1]"
            v-for="(item, index) in 5"
            :key="index"
            :item="item"
          />
        </div>
      </div>
      <div
        class="menu w-full bg-white text-black py-4   border-t-[2px] space-y-6 h-[25%] flex flex-col justify-between"
      >
        <div class="flex justify-between items-center pt-2">
          <p>{{ $t("all") }}</p>
          <p class="font-medium">{{ numberWithSpaces(120000) }} UZS</p>
        </div>
        <div class="mt-7">
          <ButtonFillVue to="/basket" color="#F4CE47"
            ><span class="py-2 text-black">Batafsil ko'rish</span></ButtonFillVue
          >
            <ButtonFillVue to="/basket" color="#F4CE47"
            ><span class="py-2 text-black ">Joyida sotib olish</span></ButtonFillVue
            >
        </div>
      </div>
    </div>
  </Teleport>
</template>
<script setup>
import numberWithSpaces from "@/helpers/numberFormat.js";
import BasketCard from "@/components/card/BasketCardModal.vue";
import ButtonFillVue from "@/components/buttons/ButtonFill.vue";
import { useBasketStore } from "@/store/basketProducts.js";
import { ref } from "vue";
import SVGEmtyBasket from "@/assets/svg/EmtyBasket.vue";
const store = useBasketStore();

const props = defineProps({
  isOpen: Boolean,
});

const open = ref(props.isOpen);

const emit = defineEmits(["closeModal"]);

function closeModal() {
  open.value = false;
  emit("closeModal", open.value);
}
</script>

<style scoped>
::-webkit-scrollbar {
   display: none;
}

</style>
