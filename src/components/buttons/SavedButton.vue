<template>
    <div
            @click="saved"
            class="w-[40px] h-[40px] rounded-[50%] bg-[#F1F5F9] flex items-center justify-center cursor-pointer"
    >
        <div class="flex flex-col items-center">
            <i
                    class="fa-heart text-lg text-[red]"
                    :class="[
                !isSaved ? 'fa-regular' : 'fa-solid',
                heartAnimation ? 'fa-shake' : 'fa-fade',
              ]"
            ></i>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const emit = defineEmits(['isSaved'])

const isSaved = ref(false)
const heartAnimation = ref(false)

function saved() {
    isSaved.value = !isSaved.value;
    heartAnimation.value = true;

    setTimeout(() => {
        heartAnimation.value = false;
    }, 100);

    emit('isSaved',isSaved.value)
}

</script>