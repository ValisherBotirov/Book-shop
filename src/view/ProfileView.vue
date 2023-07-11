<template>
  <div class="container mx-auto min-h-screen">
    <div class="flex justify-between items-end my-6 sx:mt-[60px] md:mt-10">
      <p class="sx:text-2xl md:text-3xl text-primary">Shaxsiy kabinet</p>
      <div>
        <button @click="handleLogout" class="flex gap-2">
          <ButtonFillVue color="#D52C55" ><span class="sx:py-1 md:py-2">Log out</span></ButtonFillVue>
        </button>
      </div>
    </div>
    <div class="flex flex-col items-center">
      <div class="w-[50%] flex justify-center">
        <div
          class="sx:w-[80%] md:w-[40%] cursor-pointer h-full bg-[#d0d5c3] rounded-full overflow-hidden"
        >
          <img :src="profile" alt="profile" class="w-[100%]" />
        </div>
      </div>
      <div class="sx:w-[100%] md:w-[80%] lg:w-[50%]">
        <div class="sx:w-[80%] md:w-[60%] mx-auto">
          <ul
            class="flex flex-col sx:gap-2 md:gap-4 mt-4 sx:text-base md:text-xl"
          >
            <li class="flex justify-between text-start items-center">
              <span>Ism:</span><span>Nodir</span>
            </li>
            <li class="flex justify-between text-start items-center">
              <span>Familiya:</span><span>Ikromov</span>
            </li>
            <li class="flex justify-between text-start items-center">
              <span>Tel:</span><span>(99) 105-92-01</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
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

import profile from "../assets/svg/profile.svg";
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
