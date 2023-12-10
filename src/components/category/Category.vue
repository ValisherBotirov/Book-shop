<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo rounded-md overflow-hidden flex items-center"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect('sdfsd', [])"

    >
      <el-sub-menu index="1">
        <template #title
          ><span
            class="md:h-[43px] sx:py-[5px] sx:text-[15px] md:text-[20px] flex items-center text-lg"
            >Category</span
          ></template
        >
        <div v-for="(item, index) in categories" :key="index">
          <el-menu-item v-if="!item?.subCategories.length" :index="`2-${index}`">{{
            item?.name
          }}</el-menu-item>
          <el-sub-menu v-else :index="`2-${index}`">
            <template #title>{{ item?.name }}</template>
            <el-menu-item
              v-for="(child, childIndex) in item.subCategories"
              :index="`2-4-${childIndex + 1}`"
              >{{ child.name }}</el-menu-item
            >
          </el-sub-menu>
        </div>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from "vue";



const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const categories = [
  {
    id: 1,
    name: "MacBook",
    subCategories: [],
  },
  {
    id: 2,
    name: "Kompyuter",
    subCategories: [
      {
        id: 1,
        name: "ASUS",
      },
      {
        id: 2,
        name: "ACER",
      },
      {
        id: 3,
        name: "HP",
      },
    ],
  },
  {
    id: 3,
    name: "Desktop",
    subCategories: [],
  },
  {
    id: 4,
    name: "Telefonlar",
    subCategories: [],
  },
  {
    id: 5,
    name: "Asessuarlar",
    subCategories: [
      {
        id: 1,
        name: "Quvvatlagichlar",
      },
      {
        id: 2,
        name: "Sichqonchalar",
      },
    ],
  },
];

</script>
