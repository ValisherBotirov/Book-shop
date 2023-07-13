<template>
  <div class="container mx-auto min-h-screen">
    <div class="flex justify-between items-end my-6 sx:mt-[60px] md:mt-10">
      <p class="sx:text-2xl md:text-3xl text-primary">Shaxsiy kabinet</p>
      <div>
        <button @click="handleLogout" class="flex gap-2">
          <ButtonFillVue color="#F4CE47"
            ><span class="sx:py-1 md:py-2 text-black font-medium"
              >Chiqish</span
            ></ButtonFillVue
          >
        </button>
      </div>
    </div>
    <div class="sx:block md:flex sx:gap-2 md:gap-7 bg-[#00000014]  p-7 rounded-xl">
      <div>
        <div
          class="cursor-pointer bg-[#fff] rounded-full sx:w-[50%] md:w-[100%] sx:mx-auto overflow-hidden"
        >
          <img :src="profile" alt="profile" class="w-[100%]" />
        </div>
      </div>
      <div class="sx:w-[100%] sx:flex sx:justify-center md:w-[100%] lg:w-[40%]">
        <ul
          class="flex flex-col gap-2 sx:text-sm sm:text-base md:text-[18px] font-medium text-[#333] relative pt-10"
        >
          <li class="flex items-center gap-7">
            <span>F.I.Sh</span
            ><i
              class="translation text-amber-500 text-lg cursor-pointer hover:translate-x-[15px] fa-solid fa-arrow-right"
            ></i
            ><span class="w-[100%] text-left">Nodir Ikromov Shomurod o'gli</span>
          </li>
          <li class="flex items-center gap-7">
            <span>Tel</span
            ><i
              class="translation text-amber-500 text-lg cursor-pointer hover:translate-x-[15px] fa-solid fa-arrow-right"
            ></i
            ><span class="w-[100%] text-left">(99) 105 92 01</span>
          </li>
          <li class="flex items-center gap-7">
            <span>Parol</span
            ><i
              class="translation text-amber-500 text-lg cursor-pointer hover:translate-x-[15px] fa-solid fa-arrow-right"
            ></i
            ><span class="w-[100%] text-left">123456789</span>
          </li>
          <li @click="editModal = true" class="text-[red] cursor-pointer pt-6">Ma'lumotlarni o'zgartirish</li>
        </ul>
      </div>
    </div>
  </div>
  <EditProfileModal
  @closeEditProfileModal="editModal = false"
   v-if="editModal" />
  <LoadingVue v-if="isLoading" />
</template>

<script setup>
import { reactive, computed, ref } from "vue";
import axios from "axios";
import {
  required,
  email,
  minLength,
  helpers,
  maxLength,
} from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { useRouter } from "vue-router";

import { useUserRegister } from "../store/UserRegister";
import ButtonFillVue from "../components/buttons/ButtonFill.vue";
import LoadingVue from "../components/modals/LoadingModal.vue";

// Edit Modal
import EditProfileModal from "@/components/modals/EditProfileModal.vue";
import profile from "../assets/svg/profile.svg";
const editModal = ref(false);
const isLoading = ref(false);

const store = useUserRegister();
const router = useRouter();

let state = reactive({
  notificationEmail: store.user?.location?.notificationEmail || "",
  notificationType: store.user?.location?.notificationType || "",

  img: store.user?.img || "",
  email: store.user?.email || "",
  username: store.user?.username || "",
  tel: store.user?.tel || "",

  location: {
    street: store.user?.location?.street || "",
    section_number: store.user?.location?.section_number || "",
    home_number: store.user?.location?.home_number || "",
    entrance_number: store.user?.location?.entrance_number || "",
    comment: store.user?.location?.comment || "",
    city: store.user?.location?.city || "",
  },
});

const rules = computed(() => {
  return {
    notificationEmail: { email, maxLength: maxLength(255) },

    email: { required, email, maxLength: maxLength(255) },
    username: { required, minLength: minLength(3), maxLength: maxLength(255) },
    tel: {
      dev: helpers.withMessage(
        "This field should be + character",
        function (value) {
          if (/[+]/.test(value) || value.length === 0) {
            return true;
          }
        }
      ),
      dev2: helpers.withMessage(
        "This field should be 13 characters long",
        function (value) {
          if (value.length === 13 || value.length === 0) {
            return true;
          }
        }
      ),
    },
  };
});
const v$ = useVuelidate(rules, state);

const handlePresonalData = () => {
  v$.value.$validate();

  if (!v$.value.$error) {
    console.log(state);
    ProfileApi({
      city: state.location.city,
      street: state.location.street,
      home_number: state.location.home_number,
      section_number: state.location.section_number,
      entrance_number: state.location.entrance_number,
      comment: state.location.comment,
    });
    isLoading.value = true;
  }
};

const ProfileApi = (data) => {
  axios({
    method: "post",
    url: "users/location",
    headers: {},
    withCredentials: true,
    data: data,
  })
    .then(function (response) {
      console.log(response.data.message);
      alert(response.data.message);
      store.user.location = state.location;
    })
    .catch(function (error) {
      console.log(error);
      alert(error.response.data.message);
    })
    .finally(function () {
      isLoading.value = false;
      state = {
        notificationEmail: store.user?.location?.notificationEmail || "",
        notificationType: store.user?.location?.notificationType || "",

        img: store.user?.img || "",
        email: store.user?.email || "",
        username: store.user?.username || "",
        tel: store.user?.tel || "",

        location: {
          street: store.user?.location?.street || "",
          section_number: store.user?.location?.section_number || "",
          home_number: store.user?.location?.home_number || "",
          entrance_number: store.user?.location?.entrance_number || "",
          comment: store.user?.location?.comment || "",
          city: store.user?.location?.city || "",
        },
      };
    });
};

const handleLogout = () => {
  store.logout();
  router.push("/");
};
</script>
<style scoped>
.translation {
  transition: all 0.5s linear;
}
</style>
