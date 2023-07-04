<template>
  <div class="card bg-[#f9fafd] shadow-sm h-full rounded-xl overflow-hidden">
    <div class="imgCard h-[200px] overflow-hidden relative">
        <img src="https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg?size=626&ext=jpg" alt="" class="w-full h-full object-cover">
      <div class="absolute top-1 right-1">
        <div
          @click="saved"
          class="w-[40px] h-[40px] rounded-[50%] bg-[#F1F5F9] flex items-center justify-center cursor-pointer"
        >
          <div class="flex flex-col items-center">
            <i
              class="fa-heart text-lg text-[red]"
              :class="[
                !isSaved ? 'fa-regular' : 'fa-solid',
                heartAnimation ? 'fa-shake' : 'fa-fade',
              ]"
            ></i>
          </div>
        </div>
      </div>
    </div>
    <div
      class="context px-2 pt-4 pb-2 rounded-b-xl space-y-2 flex flex-col justify-between"
    >
      <div>
        <router-link
          :to="`/shop/${product.id ? product.id : 1}`"
          class="hover:text-blue-500 duration-150 text-md font-bold line-clamp-1"
        >
          {{ product.name }} Nomi
        </router-link>
        <div>{{ product.product_detail?.condition }} Holati</div>
      </div>
      <div class="flex justify-between items-center flex-wrap">
        <div class="font-semibold">
          {{ numberWithSpaces(product?.product_detail?.price) }}1200 so’m
        </div>
      </div>
      <div class="flex justify-between items-center">
        <SaveBasket
          @click="addBasket(product)"
          :isClick="isClick"
          class="w-full mt-2"
        >
          Savatga qo'shish
        </SaveBasket>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import SaveBasket from "../buttons/SaveBasket.vue";
import numberWithSpaces from "../../helpers/numberFormat.js";
import { useBasketStore } from "@/store/basketProducts.js";
const store = useBasketStore();
const isClick = ref(false);

const props = defineProps(["product"]);
const product = computed(() => props.product);

const isSaved = ref(false);
const heartAnimation = ref(false);
function saved() {
  isSaved.value = !isSaved.value;
  heartAnimation.value = true;

  setTimeout(() => {
    heartAnimation.value = false;
  }, 100);
}

function addBasket(product) {
  isClick.value = !isClick.value;
  if (isClick.value) {
    const newProduct = {
      ...product,
      count: 1,
    };
    store.products = store.products.filter((item) => item.id !== product.id);
    store.products.push(newProduct);
  } else {
    store.products = store.products.filter((item) => item.id !== product.id);
  }
}

const fakeProduct = [
    {
        id:1,
        name:"Products",
        product_detail:{
            condition:"Bor",
            price:1200
        }
    },
    {
        id:2,
        name:"Products",
        product_detail:{
            condition:"Bor",
            price:1200
        }
    },
    {
        id:3,
        name:"Products",
        product_detail:{
            condition:"Bor",
            price:1200
        }
    },
    {
        id:4,
        name:"Products",
        product_detail:{
            condition:"Bor",
            price:1200
        }
    }
]
</script>
