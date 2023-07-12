<template>
  <Teleport to="body">
    <div
      @click="emit('closeLoginModal')"
      class="fixed z-[999999] bg-[#00000030] inset-0 backdrop-blur-[11.5px]"
    ></div>
    <div
      class="fixed z-[999999] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg max-sm:w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%]"
    >
      <div
        class="max-sm:px-3 sm:px-16 py-10 text-lg relative bg-[#fafcf5] rounded-lg"
      >
        <div class="flex flex-col gap-6">
          <form class="flex flex-col gap-6 text-black">
            <div class="flex flex-col">
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
                  <span
                    @click="changePassword"
                    v-else
                    class="relative cursor-pointer"
                    ><i class="fa-sharp fa-solid fa-eye-slash"></i
                  ></span>
                </template>
              </FormInput>
            </div>
            <div>
              <button
                type="submit"
                @click.prevent="formLoginData"
                class="w-full"
              >
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
          class="absolute top-1 right-3 text-xl"
        >
          <i
            class="fa-solid fa-xmark duration-200 cursor-pointer hover:opacity-50"
          ></i>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import { required, minLength, helpers, maxLength } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

import ButtonFillVue from "../buttons/ButtonFill.vue";
import { useUserRegister } from "../../store/UserRegister";

// input from Valisher
import FormInput from "../form/FormInput.vue";

const store = useUserRegister();
const eyeHidden = ref(false);

const changePassword = () => {
  eyeHidden.value = !eyeHidden.value;
};
console.log(store.isRegisteration);

const state = reactive({
  email: "",
  password: "",
});
const rules = computed(() => {
  return {
    phone: { required },
    password: {
      required,
      minLength: minLength(8),
      maxLength: maxLength(32),
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
    state.phone = "";
    state.password = "";
  } catch (error) {
    console.log(error);
  }
};
const emit = defineEmits(["closeLoginModal", "changeTo"]);
</script>
