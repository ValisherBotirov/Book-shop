import { createRouter, createWebHistory } from "vue-router";


const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../view/ShopView.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../view/About.vue"),
  },

  {
    path: "/shop/:id",
    name: "ShopSingle",
    component: () => import("../view/ShopSingleView.vue"),
  },
  {
    path: "/shop/category",
    name: "ShopCategory",
    component: () => import("../view/ShopCategoryView.vue"),
  },

  {
    path: "/contact",
    name: "Contact",
    component: () => import("../view/ContactView.vue"),
  },

  {
    path: "/basket",
    name: "Basket",
    component: () => import("../view/BasketView.vue"),
  },

  {
    path: "/profile",
    name: "Profile",
    component: () => import("../view/ProfileView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "PageNotFound",
    component: () => import("../view/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),

  scrollBehavior() {
    return { top: 0 };
  },
  routes,
});
export default router;
