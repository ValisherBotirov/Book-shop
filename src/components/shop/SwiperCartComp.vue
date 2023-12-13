<template>
  <!-- <pre>{{ store }}</pre> -->
  <div class="container mx-auto" v-for="data in fake" :key="data.id">
    <RouterLink
      :to="`/shop/category/?search=${data.name}`"
      class="category-title group"
    >
      {{ data.name }}
      <i class="fa-sharp fa-solid fa-arrow-right-long category-icon"></i>
    </RouterLink>
    <Swiper>
      <SwiperSlide v-for="product in data.products" :data-swiper-slide-index="product.id">
        <SwiperCard :product="product" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import Swiper from "../Swiper.vue";
import { SwiperSlide } from "swiper/vue";
import SwiperCard from "../card/SwiperCard.vue";

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

const fake = [
  {
    id: 1,
    name: "MacBook",
    products:[
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
  },
  {
    id: 2,
    name: "Asus",
    products:[
      {
        id:1,
        name:'Asus Pro',
        image:"https://www.express-service.com.ua/upload/iblock/c21/kcz526sf2lio71uijjzbrcqsu76p2bsz/63efdfdc16117_111111111111111.jpg",
        product_detail:{
          condition:"Bor",
          price:"800"
        }
      },
      {
        id:2,
        name:'Asus ExpertBook',
        image:"https://content1.rozetka.com.ua/goods/images/big/310411764.jpg",
        product_detail:{
          condition:"Bor",
          price:"1000"
        }
      },
      {
        id:3,
        name:'Asus ProArt',
        image:"https://content.rozetka.com.ua/goods/images/base_action/310356521.jpg",
        product_detail:{
          condition:"Bor",
          price:"900"
        }
      },
      {
        id:4,
        name:'Asus StudioBook',
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG88kRJcPqpyO6MXbMSjZfJuZfvO4NXxFf-v1pNtpCEmBG9YQb-_jVHlVk6swGvjAD8qA&usqp=CAU",
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
  },

  {
    id: 4,
    name: "Acer",
    products:[
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
  },
  {
    id: 3,
    name: "HP",
    products:[
      {
        id:1,
        name:'Hp Laptop',
        image:"https://www.shutterstock.com/image-photo/bangkok-thailand-hp-launch-new-260nw-2126914553.jpg",
        product_detail:{
          condition:"Bor",
          price:"900"
        }
      },
      {
        id:2,
        name:'HP Laptop 14-ed0xx',
        image:"https://content2.rozetka.com.ua/goods/images/big/317607561.jpg",
        product_detail:{
          condition:"Bor",
          price:"1100"
        }
      },
      {
        id:3,
        name:'Hp Laptop 256',
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdsO1j0XumnQqG26WzbnBlOlYLCS2InVlbl61KlW09FyNEnypMD0x4WyonT1A7zLmlbCo&usqp=CAU",
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
        name:'HP 1400',
        image:"https://www.shutterstock.com/image-photo/kyiv-ukraine-fabruary-28th-2017-260nw-590283719.jpg",
        product_detail:{
          condition:"Bor",
          price:"1200"
        }
      },
      {
        id:3,
        name:'Hp Laptop 256',
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdsO1j0XumnQqG26WzbnBlOlYLCS2InVlbl61KlW09FyNEnypMD0x4WyonT1A7zLmlbCo&usqp=CAU",
        product_detail:{
          condition:"Bor",
          price:"1500"
        }
      },
    ]
  },
  {
    id: 1,
    name: "MacBook",
    products:[
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
  },
  // {
  //   id: 2,
  //   name: "Asus",
  //   products:[
  //     {
  //       id:1,
  //       name:'Asus Pro',
  //       image:"https://www.express-service.com.ua/upload/iblock/c21/kcz526sf2lio71uijjzbrcqsu76p2bsz/63efdfdc16117_111111111111111.jpg",
  //       product_detail:{
  //         condition:"Bor",
  //         price:"800"
  //       }
  //     },
  //     {
  //       id:2,
  //       name:'Asus ExpertBook',
  //       image:"https://content1.rozetka.com.ua/goods/images/big/310411764.jpg",
  //       product_detail:{
  //         condition:"Bor",
  //         price:"1000"
  //       }
  //     },
  //     {
  //       id:3,
  //       name:'Asus ProArt',
  //       image:"https://content.rozetka.com.ua/goods/images/base_action/310356521.jpg",
  //       product_detail:{
  //         condition:"Bor",
  //         price:"900"
  //       }
  //     },
  //     {
  //       id:4,
  //       name:'Asus StudioBook',
  //       image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG88kRJcPqpyO6MXbMSjZfJuZfvO4NXxFf-v1pNtpCEmBG9YQb-_jVHlVk6swGvjAD8qA&usqp=CAU",
  //       product_detail:{
  //         condition:"Bor",
  //         price:"1200"
  //       }
  //     },
  //     {
  //       id:5,
  //       name:'MacBook Air M2',
  //       image:"https://www.digitaltrends.com/wp-content/uploads/2022/08/macbook-air-m2-1.jpg?resize=625%2C417&p=1",
  //       product_detail:{
  //         condition:"Bor",
  //         price:"1200"
  //       }
  //     },
  //     {
  //       id:6,
  //       name:'MacBook Air M1 Space Grey',
  //       image:"https://i0.shbdn.com/photos/44/34/60/x5_986443460f27.jpg",
  //       product_detail:{
  //         condition:"Bor",
  //         price:"1800"
  //       }
  //     }
  //   ]
  // },
];
</script>

<style>
.category-title {
  @apply inline text-2xl lg:text-3xl text-black font-semibold pl-4 pb-4 line-clamp-1;
}
.category-icon {
  @apply pl-3 translate-y-[2px] group-hover:translate-x-3 duration-200;
}
</style>
