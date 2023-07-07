<template>
  <div class="hidden md:flex items-center gap-2">
    <span
      @click="emit('isRegister', true)"
      class="duration-200 cursor-pointer transition hover:text-[#F4CE47]"
      >{{ $t("register") }}</span
    >
    <span
      @click="emit('isLogin', true)"
      class="flex items-center gap-1 cursor-pointer border px-3 py-1 rounded-xl duration-200 border-[#fff] bg-[#F4CE47] hover:bg-white text-[#000] group"
    >
      <span>
        <svg
          class="w-6 h-6 stroke-[#000] group-hover:stroke-primary"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.5 4.0102H26.425C27.5808 3.95868 28.7099 4.36705 29.5654 5.14597C30.4208 5.92488 30.9329 7.01091 30.9896 8.16645V26.8331C30.9329 27.9887 30.4208 29.0747 29.5654 29.8536C28.7099 30.6325 27.5808 31.0409 26.425 30.9894H17.5"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.00977 17.5H21.8743"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21.8743 17.4998L16.041 11.6665"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21.8743 17.5L16.041 23.3333"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
      {{ $t("exit") }}
    </span>
  </div>
</template>

<script setup>
const emit = defineEmits(["isRegister", "isLogin"]);
</script>
