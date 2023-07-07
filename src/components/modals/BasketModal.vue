<template>
    <Teleport class="basket" to="body">
        <div
                @click="closeModal"
                v-if="isOpen"
                class="modal fixed z-[99999] inset-0 bg-[#0005] backdrop-blur-sm"
        ></div>
        <div
                :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
                class="fixed w-[30rem] inset-y-0 z-[99999] duration-300 right-0 bg-white  flex flex-col justify-between items-center px-4 py-3"
        >
            <div class="text-start mt-2 space-y-2 overflow-y-auto h-[2/3]">
                <div class="flex text-black justify-between border-b pb-3 border-[#e1e1e1]">
                <p class="text-lg text-center ">Cart</p>
                    <i class="fa-solid fa-xmark text-lg hover:text-[red] cursor-pointer " @click="closeModal"></i>
                </div>
                <!-- empty component start-->
                <div
                        v-if="!store.productCount"
                        class="empty px-12 text-white flex flex-col gap-3"
                >
                    <div class="empty_img self-center">
                        <SVGEmtyBasket/>
                    </div>
                    <p class="titleName text-2xl">Ваша корзина пуста</p>
                    <p class="titleName text-sm">
                        Перейдите на страницу магазина и начните покупки сейчас
                    </p>
                    <p class="titleName text-sm">Желаем приятных покупок!</p>
                    <button-fill-vue color="#D52C55" to="/">
              <span @click="closeModal" class="py-2 self-start"
              >Перейти в каталог</span
              >
                    </button-fill-vue>
                </div>
                <!-- empty component end -->

                <div v-else class="flex flex-col gap-3 ">
                    <BasketCard
                            v-for="(item, index) in store.products"
                            :key="index"
                            :item="item"
                    />
                </div>
            </div>
            <div
                    class="menu w-full bg-white text-primaryBlue rounded-t-xl  space-y-6 h-[1/3]"
            >
                <div class="flex justify-between items-center font-bold">
                    <p>{{ $t("all") }}</p>
                    <p>{{ numberWithSpaces(store.allSum) }} сум</p>
                </div>
                <div class="flex justify-between items-center">
                    <ButtonFillVue to="/basket"
                    ><span class="py-2">Оформить заказ</span></ButtonFillVue
                    >
                    <button
                            @click="closeModal"
                            class="underline p-2 hover:no-underline"
                    >
                        Закрыть
                    </button>
                </div>
            </div>
        </div>
    </Teleport>
</template>
<script setup >
import numberWithSpaces from "@/helpers/numberFormat.js";
import BasketCard from "@/components/card/BasketCard.vue";
import ButtonFillVue from "@/components/buttons/ButtonFill.vue";
import { useBasketStore } from "@/store/basketProducts.js";
import {ref} from "vue";
import SVGEmtyBasket from"@/assets/svg/EmtyBasket.vue"
const store = useBasketStore();


const props = defineProps({
    isOpen: Boolean,
});

const open = ref(props.isOpen)

const emit = defineEmits(["closeModal"]);

function closeModal (){
    open.value = false
    emit("closeModal",open.value)
}

</script>