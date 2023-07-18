import axios from "@/plugins/axios.js";
import { defineStore } from "pinia";
import { useToast } from "vue-toastification";

const toast = useToast();

export const useCategoryGetStore = defineStore("categoryGetStore", {
  state: () => ({
    products: [],
  }),
  actions: {
    async getCategoryAll() {
      try {
        const getCategory = await axios.get(`category/all`);
        // this.products = getCategory.data.data
        console.log(getCategory);
      } catch (err) {
        console.log(err);
      }
    },
  },
});
