<template>
  <div>
    <!-- Decktop category -->
    <div class="md:flex hidden justify-center mt-5 py-5 md:w-[90%] lg:w-[80%] bg-[#fff] rounded-xl shadow-card">
      <ul class="flex flex-col gap-3 text-left">
        <li class="cursor-pointer hover:text-blue-700">
          <a href="#">Biznes kitoblar</a>
        </li>
        <hr />
        <li class="cursor-pointer hover:text-blue-700">
          <a href="#">Badiiy kitoblar</a>
        </li>
        <hr />
        <li class="cursor-pointer hover:text-blue-700">
          <a href="#">Darslik kitoblar</a>
        </li>
        <hr />
        <li class="cursor-pointer hover:text-blue-700">
          <a href="#">Adabiyot kitoblar</a>
        </li>
        <hr />
        <li class="cursor-pointer hover:text-blue-700">
          <a href="#">Romon kitoblar</a>
        </li>
        <hr />
        <li class="cursor-pointer hover:text-blue-700">
          <a href="#">She'r</a> kitoblar
        </li>
        <hr />
        <li class="cursor-pointer hover:text-blue-700">
          <a href="#">Slavar kitoblar</a>
        </li>
        <hr />
        <li class="cursor-pointer hover:text-blue-700">
          <a href="#">Slavar kitoblar</a>
        </li>
        <hr />
        <li class="cursor-pointer hover:text-blue-700">
          <a href="#">Slavar kitoblar</a>
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
