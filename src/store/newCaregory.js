import axios from "@/plugins/axios.js";
import { defineStore } from "pinia";
import { useToast } from "vue-toastification";

const toast = useToast();

export const useCategoryGetStore = defineStore("categoryGetStore", {
  state: () => ({
      categories: [],
  }),
  actions: {
    async getCategoryAll() {
      try {
        const getCategory = await axios.get(`category/all`);
        this.categories = getCategory.data

      } catch (err) {
        console.log(err);
      }
    },
  },
});
