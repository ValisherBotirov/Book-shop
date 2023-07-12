<template>
  <Teleport to="body">
    <div
      @click="emit('closeRegiterModal')"
      class="fixed z-[999999] bg-[#00000030] inset-0 backdrop-blur-[11.5px]"
    ></div>
    <div
      class="fixed z-[999999] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg max-sm:w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%]"
    >
      <div
        class="max-sm:px-3 sm:px-16 py-8 text-lg relative bg-[#fafcf5] rounded-lg"
      >
        <div class="flex flex-col gap-6">
          <form class="flex flex-col gap-2 text-black">
            <div class="name flex flex-col gap-0">
              <label for="username text-sm">Full Name:</label>
              <!-- <input
                class="border border-solid border-black min-w-[20rem]  rounded-[6px] py-1 px-3 text-[#333] outline-none text-start placeholder:text-[#000]"
                type="text"
                v-model="userData.username"
                name="username"
                id="username"
                placeholder="Введите ваш логин"
              /> -->
              <FormInput
                type="text"
                v-model="userData.username"
                name="username"
                id="username"
                placeholder="full name"
              />
              <p
                v-if="v$.username.$error"
                class="text-sm text-end text-red-600"
              >
                {{ v$.username.$errors[0].$message }}*
              </p>
            </div>

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

            <div class="confirmPassword flex flex-col gap-0">
              <label for="passwordConfirm">Confirm Password:</label>
              <FormInput
                v-model="userData.passwordConfirm"
                placeholder="confirm password"
                id="passwordConfirm"
                :type="eyeConfirmHidden ? 'text' : 'password'"
              />
              <span
                @click="changeConfirmPassword"
                v-if="!eyeConfirmHidden"
                class="relative cursor-pointer"
                ><i class="fa-solid fa-eye absolute right-2 bottom-3"></i
              ></span>
              <span
                @click="changeConfirmPassword"
                v-else
                class="relative cursor-pointer"
                ><i
                  class="fa-sharp fa-solid fa-eye-slash absolute right-2 bottom-3"
                ></i
              ></span>
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
                  submit
                </button>
              </ButtonFillVue>
            </div>
          </form>
        </div>
        <div
          @click="emit('closeRegiterModal')"
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

const emit = defineEmits(["closeRegiterModal"]);
</script>
