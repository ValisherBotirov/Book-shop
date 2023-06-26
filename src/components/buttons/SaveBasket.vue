<template>
  <div  class="card duration-300 text-[#002E69] hover:text-white border-[#002E69]  hover:bg-[#002E69]  bg-white border py-2 px-2 rounded-lg flex items-center justify-center cursor-pointer" @click="saveBasket">
      <div class="flex gap-2 items-center">
          <i class="fa-sharp fa-solid fa-cart-plus text-[20px] " :class="isClick ? 'fa-bounce' : 'fa-fade'"></i>
          <slot></slot>
      </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {useToast} from "vue-toastification";

const toast = useToast()

const isClick = ref(false)

function saveBasket(){
    isClick.value = true
    toast.success("Savatga muvaffaqiyatli qo'shildi")
    setTimeout(()=>{
        isClick.value = false
    },1000)
}
</script>

<style scoped>
  .card{
      transition: all 0.3s;
  }
  .card:active{
      transform: scale(0.96);
  }
</style>
