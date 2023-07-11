<template>
  <div class="mt-5">
    <!-- Decktop category -->
    <div
      class="md:flex hidden flex-col items-start md:pl-6 lg:pl-10 py-5 md:w-[90%] bg-[#fff] rounded-xl shadow-card"
    >
      <div class="flex flex-col">
        <el-checkbox v-model="checked1" label="Biznes" size="large" />
        <el-checkbox v-model="checked2" label="Ertak" size="large" />
        <el-checkbox v-model="checked2" label="Adabiyot" size="large" />
        <el-checkbox v-model="checked2" label="Nodir" size="large" />
        <el-checkbox v-model="checked2" label="Ikromov" size="large" />
        <el-checkbox v-model="checked2" label="Jizzax" size="large" />
        <el-checkbox v-model="checked2" label="Battar bo'l" size="large" />
        <el-checkbox v-model="checked2" label="Garang" size="large" />
        <el-checkbox v-model="checked2" label="Garangdi" size="large" />
      </div>
    </div>
    <!-- Books type checkbox -->
    <div
      class="md:flex hidden flex-col items-start md:pl-6 lg:pl-10 mt-5 py-5 md:w-[90%] bg-[#fff] rounded-xl shadow-card"
    >
      <div class="flex flex-col">
        <el-checkbox v-model="checked2" label="Qog'oz" size="large" />
        <el-checkbox v-model="checked2" label="Audio" size="large" />
        <el-checkbox v-model="checked2" label="Pdf" size="large" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCategoryProduct } from "../../store/categoryProduct";
import { useLoadingStore } from "../../store/loading";
import axios from "axios";
const store = useCategoryProduct();
const loading = useLoadingStore();

const data = ref({
  range: [0, 1],
  model: "",
  color: "",
  typeMoney: "",
});

// checkbox element puls
// const checkList = ref(["selected and disabled", "Option A"]);

async function rangeInp(rangeMinMaxArr) {
  data.value.range = rangeMinMaxArr;
  console.log(rangeMinMaxArr);
}

const handleFilter = async () => {
  loading.loading = true;
  console.log(data.value.range);
  try {
    const res = await axios.get(
      `/products/search?search=cat&minPrice=${data.value.range[0]}&maxPrice=${data.value.range[1]}`
    );
    console.log(res);
    console.log(res.data.data.results);
    store.products = res.data.data.results;
  } catch (error) {
    console.log(error.message);
  } finally {
    loading.loading = false;
  }
};
const handleReset = () => {
  data.value = {
    range: [0, 1],
    model: "",
    color: "",
    typeMoney: "",
  };
};
</script>
<style>
@media (min-width: 768px) {
  .el-checkbox__label {
    font-size: 16px !important;
    color: #333;
    margin-left: 5px;
  }
  .el-checkbox__inner {
    border: 1px solid #696363 !important;
  }
  .el-checkbox__original:checked{
    font-size: 20px !important;
  }
}
@media (min-width: 1280px) {
  .el-checkbox__label {
    font-size: 18px !important;
    margin-left: 10px; 
  }
}
@media (min-width: 1536px) {
  .el-checkbox__label {
    font-size: 19px !important;
  }
}
</style>
