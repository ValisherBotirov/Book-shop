<template>
  <div class="card bg-[#f9fafd] shadow h-full rounded-xl overflow-hidden">
    <div class="imgCard h-[200px] overflow-hidden relative">
      <router-link :to="`/shop/${product.id ? product.id : 1}`">
        <img
          :src="product.image"
          alt=""
          class="w-full h-full object-cover cursor-pointer"
        />
      </router-link>
      <div class="absolute top-1 right-1">
        <SavedButton v-if="!isDelete" @isSaved="fetchSaved" />  
        <i v-else class="deleteIcon fa-solid fa-trash-can text-[#fafcf5] hover:text-[#ff0000dc]"></i>
      </div>
    </div>
    <div
      class="context px-2 pt-4 pb-2 rounded-b-xl space-y-2 flex flex-col justify-between"
    >
      <div>
        <router-link
          :to="`/shop/1`"
          class="hover:text-[#F4CE47] duration-150 text-md font-bold line-clamp-1"
        >
          {{ product.name }}
        </router-link>
        <div>{{ product.product_detail?.condition }} </div>
      </div>
      <div class="flex justify-between items-center flex-wrap">
        <div class="font-semibold">
          {{ numberWithSpaces(product?.product_detail?.price) }} $
        </div>
      </div>
      <div class="flex justify-between items-center">
        <SaveBasket
          @click="addBasket(product)"
          :isClick="isClick"
          class="w-full mt-2 text-sm sm:text-base"
        >
          Savatga qo'shish
        </SaveBasket>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import SaveBasket from "../buttons/SaveBasket.vue";
import numberWithSpaces from "../../helpers/numberFormat.js";
import { useBasketStore } from "@/store/basketProducts.js";
import SavedButton from "@/components/buttons/SavedButton.vue";
const store = useBasketStore();

interface Props {
  product?: {
    id: number;
    name: string;
    image:string;
    product_detail?: {
      price: number;
      condition: string;
    };
  };
  isDelete?: boolean;
}

withDefaults(defineProps<Props>(), {
  isDelete: false,
});

const isClick = ref(false);

// const props = defineProps(["product"]);
// const product = computed(() => props.product);

const fetchSaved = (e) => {
  console.log(e, "emit");
  //     axios zapros shu yerga yoziladi
};

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
    id: 1,
    name: "Products",
    product_detail: {
      condition: "Bor",
      price: 1200,
    },
  },
  {
    id: 2,
    name: "Products",
    product_detail: {
      condition: "Bor",
      price: 1200,
    },
  },
  {
    id: 3,
    name: "Products",
    product_detail: {
      condition: "Bor",
      price: 1200,
    },
  },
  {
    id: 4,
    name: "Products",
    product_detail: {
      condition: "Bor",
      price: 1200,
    },
  },
];
</script>
<style scoped>
.deleteIcon{
  font-size: 24px;
  padding-right: 5px;
  padding-top: 5px;
  transform: scale(0.95);
  transition: all 0.4s linear;
}
.deleteIcon:hover{
  cursor: pointer;
  transition: all 0.3s linear;
}
</style>