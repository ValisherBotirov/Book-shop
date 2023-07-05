<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo rounded-md overflow-hidden"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-sub-menu index="1">
        <template #title><span class="h-[39px] sx:h-[33px] flex items-center">Category</span></template>
        <el-menu-item index="2-1">Top kitoblar</el-menu-item>
        <el-menu-item index="2-2">Yangi kitoblar</el-menu-item>
        <el-sub-menu index="2-3">
          <template #title>Biznes kitoblar</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
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
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>
