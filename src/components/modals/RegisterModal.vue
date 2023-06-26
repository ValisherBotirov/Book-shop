<template>
  <Teleport to="body">
    <div
      @click="emit('closeRegiterModal')"  
      class="fixed z-[999999] bg-[#0006] inset-0 backdrop-blur-sm"
    ></div>
    <div
      class="fixed z-[999999] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg max-sm:w-[90%] md:w-[70%] lg:w-[50%]"
    >
      <div class="max-sm:px-3 sm:px-16 py-8 text-lg relative bg-[#fafcf5] rounded-lg">
        <div class="flex flex-col gap-6">
          <form class="flex flex-col gap-2 text-black">
            <div class="name flex flex-col gap-0">
              <label for="username text-sm">Логин:</label>
              <input
                class="border border-solid border-black min-w-[20rem]  rounded-[6px] py-1 px-3 text-[#333] outline-none text-start placeholder:text-[#000]"
                type="text"
                v-model="userData.username"
                name="username"
                id="username"
                placeholder="Введите ваш логин"
              />
              <p
                v-if="v$.username.$error"
                class="text-sm text-end text-red-600"
              >
                {{ v$.username.$errors[0].$message }}*
              </p>
            </div>
            <div class="email flex flex-col gap-0">
              <label for="email">Электронная почта:</label>
              <input
                class="border border-solid border-black min-w-[16rem] rounded-[6px] py-1 px-3 text-[#333] outline-none text-start placeholder:text-[#333]"
                type="email"
                v-model="userData.email"
                name="email"
                id="email"
                placeholder="Введите электронной почты"
              />
              <p v-if="v$.email.$error" class="text-sm text-end text-red-600">
                {{ v$.email.$errors[0].$message }}*
              </p>
            </div>
            <div class="password flex flex-col gap-0">
              <label for="password">Пароль:</label>
              <input
                class="capitalize border min-w-[16rem] border-black rounded-[6px] py-1 px-3 text-[#333] outline-none text-start placeholder:text-[#333]"
                :type="eyeHidden ? 'text' : 'password'"
                v-model="userData.password"
                name="password"
                id="password"
              />
              <span @click="changePassword" v-if="!eyeHidden" class="relative cursor-pointer"><i class="fa-solid fa-eye absolute right-2 bottom-2"></i></span>
              <span @click="changePassword" v-else class="relative cursor-pointer"
                ><i class="fa-sharp fa-solid fa-eye-slash absolute right-2 bottom-2"></i></span>
              <p
                v-if="v$.password.$error"
                class="text-sm text-end text-red-600"
              >
                {{ v$.password.$errors[0].$message }}*
              </p>
            </div>
            <div class="confirmPassword flex flex-col gap-0">
              <label for="passwordConfirm">Подтвердите пароль:</label>
              <input
                class="capitalize border min-w-[16rem] border-black rounded-[6px] py-1 px-3 text-[#333] outline-none text-start placeholder:text-[#000]"
                :type="eyeConfirmHidden ? 'text' : 'password'"
                v-model="userData.passwordConfirm"
                name="passwordConfirm"
                id="passwordConfirm"
              />
              <span @click="changeConfirmPassword" v-if="!eyeConfirmHidden" class="relative cursor-pointer"
                ><i class="fa-solid fa-eye absolute right-2 bottom-2 "></i></span>
              <span @click="changeConfirmPassword" v-else class="relative cursor-pointer"
                ><i class="fa-sharp fa-solid fa-eye-slash absolute right-2 bottom-2"></i></span>
              <p
                v-if="v$.passwordConfirm.$error"
                class="text-sm text-end text-red-600"
              >
                {{ v$.passwordConfirm.$errors[0].$message }}*
              </p>
            </div>
            <div>
              <ButtonFillVue>
                <button
                  @click.prevent="handleRegister"
                  class="py-1 px-4 w-full"
                >
                  Далее
                </button>
              </ButtonFillVue>
            </div>
          </form>
        </div>
        <div
          @click="emit('closeRegiterModal')"
          class="absolute top-1 right-3 text-xl"
        >
          <i class="fa-solid fa-xmark duration-200 cursor-pointer hover:opacity-50"></i>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  email,
  sameAs,
  minLength,
  maxLength,
} from "@vuelidate/validators";

import { useUserRegister } from "../../store/UserRegister";
import ButtonFillVue from "../buttons/ButtonFill.vue";

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
  email: "",
  password: "",
  passwordConfirm: "",
});

const rules = computed(() => {
  return {
    username: { required, minLength: minLength(3), maxLength: maxLength(52) },
    email: { required, email, maxLength: maxLength(84) },
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
      userData.email = "";
      userData.password = "";
      userData.passwordConfirm = "";
    }
  }
};

const emit = defineEmits(["closeRegiterModal"]);
</script>
