<template>
  <div class="py-[10px]">
    <h1 class="text-center text-[30px] font-semibold">Biz haqimizda</h1>
    <p class="text-center">Siz bizga ishonchni taqdim eting, biz sizga dunyoni taqdim etamiz !</p>
    <div class="md:flex">
      <div class="xs:w-full md:w-[50%] p-2">
        <span>Bu yerda magazining tashqi tamondan olingan rasimi bo'ladi</span>
        <img
          :src="bookImage"
          alt="Market Image"
          class="overflow-hidden rounded-lg"
        />
      </div>
      <p class="xs:w-full md:w-[50%] p-3 text-[20px]">
        <span class="">FAYZ BOOKS</span> - haqida malumotlar Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Sed facilis non quidem, velit ut
        delectus atque consequuntur itaque dicta nemo perferendis sint obcaecati
        quasi explicabo fuga, optio eligendi, dolorem repellendus maxime placeat
        odio dolor autem eum ducimus. Laudantium perspiciatis veritatis ex odio
        voluptate assumenda beatae soluta nobis maiores nisi reiciendis cumque
        dolore libero rerum, iure id aspernatur amet quidem, aliquam culpa quo?
        Pariatur non fugiat quod. Ipsam est eligendi ipsum harum nam quis vero
        velit ea enim molestiae! Unde repellat minus alias quia recusandae in
        distinctio laudantium perferendis blanditiis, culpa ipsa deleniti
        sapiente expedita obcaecati veritatis quam, rem at non.
      </p>
    </div>
    <div class="pt-3">
      <h2 class="text-center text-[25px] font-semibold">Bizning manzil</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.248620576037!2d69.25967122803775!3d41.36868282294212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d9f9804a2cb%3A0x2e02276c91f06cc1!2sMakro%20Supermarket%20Express!5e0!3m2!1sru!2s!4v1688241712535!5m2!1sru!2s"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="w-full h-[700px]"
      ></iframe>
    </div>
  </div>
</template>
<script setup>
import bookImage from "../../assets/img/about/ok.jpg";
</script>
