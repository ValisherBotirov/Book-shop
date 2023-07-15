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
            <FormInput
              label="Full Name:"
              type="text"
              v-model="userData.fullName"
              name="fullName"
              id="fullName"
              placeholder="full name"
              :error="v$.fullName.$error"
            />

            <FormInput
              type="string"
              v-model="userData.phoneNumber"
              placeholder="00 000-00-00"
              label="Phone number:"
              :error="v$.phoneNumber.$error"
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

            <FormInput
              label="Confirm Password:"
              v-model="userData.confirmPassword"
              placeholder="confirm password"
              id="confirmPassword"
              :type="eyeConfirmHidden ? 'text' : 'password'"
              :error="v$.confirmPassword.$error"
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
                <button
                  @click.prevent="handleRegister"
                  class="py-1 px-4 w-full"
                >
                  submit
                </button>
              </ButtonFillVue>
                <code-input
                        @change="e=>codeSend = e"
                        @complete="completed = true"
                        :fields="6"
                        :fieldWidth="56"
                        :fieldHeight="56"
                        :required="true"
                />

                    <button class="border py-2 rounded-lg  text-white w-full bg-[#002E69]" :class="!completed ? 'bg-gray-700' :'bg-[#002E69]'" :disabled="!completed" @click="sendCode">
                        Continue
                    </button>

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
import { useUserRegister } from "@/store/UserRegister.js";
import ButtonFillVue from "../buttons/ButtonFill.vue";
import {useAuthStore} from "@/store/auth.js";
import FormInput from "../form/FormInput.vue";
import CodeInput from "@/components/form/CodeInput.vue";
import {useToast} from "vue-toastification";


const authStore = useAuthStore()
const completed = ref(false);
const eyeHidden = ref(false);
const eyeConfirmHidden = ref(false);

const toast = useToast()

const codeSend = ref("")

const changePassword = () => {
  eyeHidden.value = !eyeHidden.value;
};

const changeConfirmPassword = () => {
  eyeConfirmHidden.value = !eyeConfirmHidden.value;
};

const store = useUserRegister();

const userData = reactive({
  fullName: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
});

const rules = computed(() => {
  return {
    fullName: { required, minLength: minLength(3), maxLength: maxLength(52) },
    phoneNumber: { required },
    password: { required, minLength: minLength(8), maxLength: maxLength(50) },
    confirmPassword: { required, sameAs: sameAs(userData.password) },
  };
});

const v$ = useVuelidate(rules, userData);

const handleRegister = async () => {
  v$.value.$validate();
  if (!v$.value.$error) {
    try {
        userData.phoneNumber ='+998' + userData.phoneNumber.replaceAll('-','').replace('(','').replace(') ','')
        const user = await authStore.getUser(userData)

        if(user.data.ID){



        }

    } finally {
      // userData.fullName = "";
      // userData.phoneNumber = "";
      // userData.password = "";
      // userData.confirmPassword = "";
      // v$.value.$reset()
    }
  }
};

async function sendCode(e){
    e.preventDefault()
    const activeParams={
        code:codeSend.value,
        phoneNumber:userData.phoneNumber
    }
    const tokenParams  = {
        phoneNumber : userData.phoneNumber,
        password: userData.password
    }
    await authStore.userActive(activeParams).then((res)=>{
        console.log(res)
        toast.success("Muvaffaqiyatli ro'yxatdan o'tdizngiz")
        emit('closeRegiterModal')
    }).catch((err)=>{
        console.log(err)
        toast.error("Ro'yxatdan o'tishda xatolik yuz berdi!")
    })

    await authStore.setAccessToken(tokenParams)
}

const emit = defineEmits(["closeRegiterModal"]);
</script>
