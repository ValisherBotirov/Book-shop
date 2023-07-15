<template>
  <div
    @click="emit('closeEditProfileModal')"
    class="fixed z-[999999] bg-[#00000030] inset-0 backdrop-blur-[11.5px]"
  ></div>
  <div
    class="fixed z-[999999] bg-[#fafcf5] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg max-sm:w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] sx:p-3 sx:pt-8 md:p-5 rounded-md"
  >
    <form class="flex flex-col gap-2 text-black">
      <FormInput
        label="Full Name:"
        type="text"
        v-model="userData.username"
        placeholder="full name"
        :error="v$.username.$error"
      />

      <FormInput
        type="string"
        v-model="userData.phone"
        label="Phone number:"
        :error="v$.phone.$error"
        v-maska="'(##) ###-##-##'"
      >
        <template #prefix>
          <span class="mr-1">+998</span>
        </template>
      </FormInput>

      <FormInput
        :type="eyeHidden ? 'text' : 'password'"
        v-model="userData.password"
        label="Password:"
        :error="v$.password.$error"
        placeholder="password"
      >
        <template #suffix>
          <span
            @click="changePassword"
            v-if="!eyeHidden"
            class="relative cursor-pointer"
            ><i class="fa-solid fa-eye"></i
          ></span>
          <span @click="changePassword" v-else class="relative cursor-pointer"
            ><i class="fa-sharp fa-solid fa-eye-slash"></i
          ></span>
        </template>
      </FormInput>

      <FormInput
        label="Confirm Password:"
        v-model="userData.passwordConfirm"
        placeholder="confirm password"
        id="passwordConfirm"
        :type="eyeConfirmHidden ? 'text' : 'password'"
        :error="v$.passwordConfirm.$error"
      >
        <template #suffix>
          <span
            @click="changeConfirmPassword"
            v-if="!eyeConfirmHidden"
            class="relative cursor-pointer"
            ><i class="fa-solid fa-eye"></i
          ></span>
          <span
            @click="changeConfirmPassword"
            v-else
            class="relative cursor-pointer"
            ><i class="fa-sharp fa-solid fa-eye-slash"></i
          ></span>
        </template>
      </FormInput>
      <div>
        <ButtonFillVue>
          <button class="py-1 px-4 w-full">
            O'zgartish
          </button>
        </ButtonFillVue>
      </div>
    </form>

    <div
      @click="emit('closeEditProfileModal')"
      class="absolute top-1 right-3 text-xl"
    >
      <i
        class="fa-solid fa-xmark duration-200 cursor-pointer hover:opacity-50"
      ></i>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, sameAs, minLength, maxLength } from "@vuelidate/validators";

import { useUserRegister } from "../../store/UserRegister";
import ButtonFillVue from "../buttons/ButtonFill.vue";

// input Valisher tashlab bergan
import FormInput from "../form/FormInput.vue";

const eyeHidden = ref(false);
const eyeConfirmHidden = ref(false);

const changePassword = () => {
  eyeHidden.value = !eyeHidden.value;
};

const changeConfirmPassword = () => {
  eyeConfirmHidden.value = !eyeConfirmHidden.value;
};

const store = useUserRegister();

const userData = reactive({
  username: "",
  phone: "",
  password: "",
  passwordConfirm: "",
});

const rules = computed(() => {
  return {
    username: { required, minLength: minLength(3), maxLength: maxLength(52) },
    phone: { required },
    password: { required, minLength: minLength(4), maxLength: maxLength(32) },
    passwordConfirm: { required, sameAs: sameAs(userData.password) },
  };
});

const v$ = useVuelidate(rules, userData);

const handleRegister = async () => {
  v$.value.$validate();
  if (!v$.value.$error) {
    try {
      await store.signup(userData);
      !store.closemodal && emit("closeRegiterModal");
    } finally {
      userData.username = "";
      userData.phone = "";
      userData.password = "";
      userData.passwordConfirm = "";
    }
  }
};

const emit = defineEmits(["closeEditProfileModal"]);
// const emit = defineEmits(["closeRegiterModal"]);
</script>
