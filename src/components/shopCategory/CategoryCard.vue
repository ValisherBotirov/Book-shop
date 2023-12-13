<template>
  <div class="pt-5 md:p-0">
    <ul v-if="!hasProduct" class="cardContainer mt-6">
      <li v-for="product in products" :key="product">
        <Card :product="product" />
      </li>
    </ul>
    <div class="flex justify-end py-6">
      <VuePagination
        v-if="total > limit"
        :total="total"
        :limit="limit"
        :current-page="currentPage"
        @fetchPage="fetchPagination"
        class="flex justify-end mt-5"
      />
    </div>
  </div>
</template>

<script setup>
import { useCategoryProduct } from "@/store/categoryProduct.js";
import Card from "../card/SwiperCard.vue";
import VuePagination from "../pagination/VuePagination.vue";
import { computed, ref } from "vue";

const categoryStore = useCategoryProduct();
categoryStore.getProducts();

const hasProduct = computed(() => categoryStore.products.length);

// pagination
const limit = ref(5);
const total = ref(50);
const currentPage = ref(1);
function fetchPagination(page) {
  currentPage.value = page;
  // offset.value =  (currentPage.value - 1) * limit.value;
}

const products =[
  {
    id:1,
    name:'MacBook Air M1',
    image:"https://techcrunch.com/wp-content/uploads/2020/11/2020-11-16-074520097.jpg",
    product_detail:{
      condition:"Bor",
      price:"1200"
    }
  },
  {
    id:2,
    name:'MacBook Air M2',
    image:"https://smb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com/product/image/19092023/64883eeb584210966a5ea43c/65094aa2a20a0581a547c503/cb783e363bea451dc0927f5577bd8e.jpg",
    product_detail:{
      condition:"Bor",
      price:"1300"
    }
  },
  {
    id:3,
    name:'MacBook Air M1 (gamechaing)',
    image:"https://iphoneforum.fr/wp-content/uploads/2022/04/Deux-nouveaux-Mac-annonces-pour-la-WWDC-MacBook-Air-M2.jpg",
    product_detail:{
      condition:"Bor",
      price:"1500"
    }
  },
  {
    id:4,
    name:'MacBook Air M1',
    image:"https://techcrunch.com/wp-content/uploads/2020/11/2020-11-16-074520097.jpg",
    product_detail:{
      condition:"Bor",
      price:"1200"
    }
  },
  {
    id:5,
    name:'MacBook Air M2',
    image:"https://www.digitaltrends.com/wp-content/uploads/2022/08/macbook-air-m2-1.jpg?resize=625%2C417&p=1",
    product_detail:{
      condition:"Bor",
      price:"1200"
    }
  },
  {
    id:6,
    name:'MacBook Air M1 Space Grey',
    image:"https://i0.shbdn.com/photos/44/34/60/x5_986443460f27.jpg",
    product_detail:{
      condition:"Bor",
      price:"1800"
    }
  },
  {
    id:1,
    name:'MacBook Air M1',
    image:"https://techcrunch.com/wp-content/uploads/2020/11/2020-11-16-074520097.jpg",
    product_detail:{
      condition:"Bor",
      price:"1200"
    }
  },
  {
    id:2,
    name:'MacBook Air M2',
    image:"https://smb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com/product/image/19092023/64883eeb584210966a5ea43c/65094aa2a20a0581a547c503/cb783e363bea451dc0927f5577bd8e.jpg",
    product_detail:{
      condition:"Bor",
      price:"1300"
    }
  },
  {
    id:3,
    name:'MacBook Air M1 (gamechaing)',
    image:"https://iphoneforum.fr/wp-content/uploads/2022/04/Deux-nouveaux-Mac-annonces-pour-la-WWDC-MacBook-Air-M2.jpg",
    product_detail:{
      condition:"Bor",
      price:"1500"
    }
  },
  {
    id:4,
    name:'MacBook Air M1',
    image:"https://techcrunch.com/wp-content/uploads/2020/11/2020-11-16-074520097.jpg",
    product_detail:{
      condition:"Bor",
      price:"1200"
    }
  },
  {
    id:5,
    name:'MacBook Air M2',
    image:"https://www.digitaltrends.com/wp-content/uploads/2022/08/macbook-air-m2-1.jpg?resize=625%2C417&p=1",
    product_detail:{
      condition:"Bor",
      price:"1200"
    }
  },
  {
    id:6,
    name:'MacBook Air M1 Space Grey',
    image:"https://i0.shbdn.com/photos/44/34/60/x5_986443460f27.jpg",
    product_detail:{
      condition:"Bor",
      price:"1800"
    }
  }
]
</script>

<style scoped>
.cardContainer {
  @apply grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-4 gap-4;
}
</style>
