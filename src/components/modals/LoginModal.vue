<template>
  <Teleport to="body">
    <div
      @click="emit('closeLoginModal')"
      class="fixed z-[999999]  bg-[#00000030] inset-0 backdrop-blur-[11.5px]"
    ></div>
    <div
      class="fixed z-[999999] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg max-sm:w-[90%] md:w-[70%] lg:w-[50%]"
    >
      <div class="p-16 text-lg relative bg-[#fafcf5] rounded-lg">
        <div class="flex flex-col gap-6">
          <form class="flex flex-col gap-6 text-black">
            <div class="flex flex-col">
              <div class="mb-4 flex flex-col">
                <input
                  class="bg-transparent border min-w-[16rem] border-black rounded-[6px] py-1 px-3 text-[#f4f4f9] outline-none text-start placeholder:text-[#000]"
                  type="email"
                  v-model="state.email"
                  name="email"
                  id="email"
                  placeholder="Электронная почта"
                />
                <span
                  class="text-sm text-end text-red-600"
                  v-if="v$.email.$error"
                  >{{ v$.email.$errors[0].$message }}</span
                >
              </div>
              <div class="flex flex-col">
                <input
                  class="bg-transparent border min-w-[16rem] border-black rounded-[6px] py-1 px-3 text-black outline-none text-start placeholder:text-[#000]"
                  type="password"
                  v-model="state.password"
                  name="password"
                  id="password"
                  placeholder="Пароль"
                />
                <span
                  class="text-sm text-end text-red-600"
                  v-if="v$.password.$error"
                  >{{ v$.password.$errors[0].$message }}</span
                >
              </div>
            </div>
            <div>
              <button type="submit" @click.prevent="formLoginData" class="w-full">
                <ButtonFillVue>
                  <span class="py-1 px-4">{{ $t("exit") }}</span>
                </ButtonFillVue>
              </button>
            </div>
          </form>
          <div class="flex justify-between items-center">
            <div
              @click="emit('changeTo')"
              class="underline hover:no-underline active:no-underline cursor-pointer"
            >
              {{ $t("register") }}
            </div>
            <div
              @click="emit('changeTo')"
              class="underline hover:no-underline active:no-underline cursor-pointer"
            >
              Забыли пароль?
            </div>
          </div>
        </div>
        <div
          @click="emit('closeLoginModal')"
          class="absolute top-3 right-3 text-xl"
        >
          <i class="fa-solid fa-xmark p-3 duration-200 hover:opacity-40"></i>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import {
  required,
  email,
  minLength,
  helpers,
  maxLength,
} from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

import ButtonFillVue from "../buttons/ButtonFill.vue";
import { useUserRegister } from "../../store/UserRegister";
const store = useUserRegister();

console.log(store.isRegisteration);

const state = reactive({
  email: "",
  password: "",
});
const rules = computed(() => {
  return {
    email: { required, email, maxLength: maxLength(84) },
    password: {
      required,
      minLength: minLength(8),
      maxLength: maxLength(32),
      containsUppercase: helpers.withMessage(
        "The password requires an uppercase character",
        function (value) {
          return /[A-Z]/.test(value);
        }
      ),
      containsLowercase: helpers.withMessage(
        "The password requires an lowercase character",
        function (value) {
          return /[a-z]/.test(value);
        }
      ),
      containsNumber: helpers.withMessage(
        "The password requires an number character",
        function (value) {
          return /[0-9]/.test(value);
        }
      ),
      containsSpecial: helpers.withMessage(
        "The password requires an special character",
        function (value) {
          return /[#?!_@$%^&*.-]/.test(value);
        }
      ),
    },
  };
});
const v$ = useVuelidate(rules, state);
const formLoginData = () => {
  v$.value.$validate();
  if (v$.value.$error) return;
  fetchApi(state);
};
const fetchApi = async (data) => {
  try {
    await store.signIn(data);
    emit("closeLoginModal");
    state.email = "";
    state.password = "";
  } catch (error) {
    console.log(error);
  }
};
const emit = defineEmits(["closeLoginModal", "changeTo"]);
</script>
