<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo rounded-md overflow-hidden flex items-center"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-sub-menu index="1">
        <template #title><span class="md:h-[43px] sx:py-2 flex items-center text-lg">Category</span></template>
        <el-menu-item index="2-1">ok</el-menu-item>
        <el-menu-item index="2-2">Yangi kitoblar</el-menu-item>
        <el-sub-menu index="2-3">
          <template #title>Biznes kitoblar</template>
          <el-menu-item index="2-4-1">ok</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="2-4">Jahon adabiyotlari</el-menu-item>
        <el-menu-item index="2-5">Ertak kitoblar</el-menu-item>
        <el-sub-menu index="2-6">
          <template #title>item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2-7">
          <template #title>item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const arr = [
  {
    id: 1,
    name: "biznes",
  },
  {
    id: 2,
    name: "adssa",
    child: [
      {
        id: 1,
        name: "sdfn",
      },
      {
        id: 2,
        name: "dfsd2",
      },
      {
        id: 3,
        name: "sdfn3",
      },
    ],
  },
  {
    id: 3,
    name: "rus",
  },
  {
    id: 4,
    name: "jahon",
    child: [
      {
        id: 1,
        name: "sdfn",
      },
      {
        id: 2,
        name: "dfsd2",
      },
      {
        id: 3,
        name: "sdfn3",
      },
    ],
  },
];
</script>

<style>
.flex-grow {
  flex-grow: 1;
}

@media (min-width: 240px) {
  .el-sub-menu__title {
    padding-left: 8px !important;
    padding-right: 8px !important;
  }
  .el-sub-menu__icon-arrow {
    display: none !important;
  }
}
@media (min-width: 768px) {
  .el-sub-menu__title {
    height: 40px !important;
  }
}
.el-sub-menu__icon-arrow {
  display: none !important;
}
@media (min-width: 1536px) {
  .el-sub-menu__title {
    padding: 0px 50px 0px 20px !important;
    height: 45px !important;
  }
  .el-sub-menu__icon-arrow {
    display: block !important;
  }
}
</style>
