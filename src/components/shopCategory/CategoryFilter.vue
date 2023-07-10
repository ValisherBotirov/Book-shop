<template>
  <div class="sticky top-[200px]">
    <!-- Decktop category -->
    <div
      class="flex flex-col items-center py-5 md:w-[90%] lg:w-[80%] bg-[#fff] rounded-xl shadow-card"
    >
      <div class="flex flex-col">
        <el-checkbox v-model="checked1" label="Option 1" size="large" />
        <el-checkbox v-model="checked2" label="Option 2" size="large" />
      </div>
    </div>
    <!-- Books type checkbox -->
    <div
      class="md:flex hidden justify-center mt-5 py-5 md:w-[90%] lg:w-[80%] bg-[#fff] rounded-xl shadow-card"
    >
      <ul class="grid grid-cols-1 gap-3 w-[100%] md:text-[16px] lg:text-[19px]">
        <li class="cursor-pointer">
          <label class="w-[100%] px-2 flex gap-3 pl-[20%]">
            <input type="checkbox" class="cursor-pointer" />
            <span class="cursor-pointer hover:text-blue-500">Qog'oz</span>
          </label>
        </li>
        <li class="cursor-pointer">
          <label class="w-[100%] px-2 flex gap-3 pl-[20%]">
            <input type="checkbox" class="cursor-pointer" />
            <span class="cursor-pointer hover:text-blue-500">Audio</span>
          </label>
        </li>
        <li class="cursor-pointer">
          <label class="w-[100%] px-2 flex gap-3 pl-[20%]">
            <input type="checkbox" class="cursor-pointer" />
            <span class="cursor-pointer hover:text-blue-500">PDF</span>
          </label>
        </li>
      </ul>
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
const checkList = ref(["selected and disabled", "Option A"]);

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
