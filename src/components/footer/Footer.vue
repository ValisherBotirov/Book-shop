<template>
  <footer id="footer" class="mt-5">
    <div class="w-[100%] mx-auto bg-[#000]  pb-[80px] md:pb-0">
      <div
        class="px-4 container mx-auto drop-shadow-lg rounded-t-2xl pt-5 flex flex-wrap flex-col md:flex-row justify-between shadow-lg text-white"
      >
        <div>
          <ul>
            <li class="text-[25px] font-bold mb-2 hover:text-[#F4CE47] cursor-pointer">Ma`lumot</li>
            <li class="text-[17px] hover:text-[#F4CE47] cursor-pointer">Ko'p so'raladigan savollar</li>
            <li class="text-[17px] hover:text-[#F4CE47] cursor-pointer">Qabul qilish punktlari</li>
            <li class="text-[17px] hover:text-[#F4CE47] cursor-pointer">Blog</li>
            <li class="text-[17px] hover:text-[#F4CE47] cursor-pointer">Bizning brendlarimiz</li>
            <li class="text-[17px] hover:text-[#F4CE47] cursor-pointer">
              Ommaviy taklif (Foydalanuvchi shartnomasi)
            </li>
            <li class="text-[17px] hover:text-[#F4CE47] cursor-pointer">Bo'lib-bo'lib xarid qilish uchun taklif</li>
            <li class="text-[17px] hover:text-[#F4CE47] cursor-pointer">Biz haqimizda</li>
          </ul>
        </div>
        <div>
          <ul>
            <li class="text-[25px] font-bold mb-2 hover:text-[#F4CE47] cursor-pointer">Aloqa uchun</li>
            <li class="text-[17px] hover:text-[#F4CE47] cursor-pointer"><a href="#"><i class="fa-solid fa-phone"></i>  +998 71 200 01 05</a></li>
            <li class="text-[17px] hover:text-[#F4CE47] cursor-pointer"><a href="#"><i class="fa-regular fa-envelope hover:text-[#F4CE47] cursor-pointer"></i> computerservice@gmail.com</a></li>
            <li class="text-[17px] hover:text-[#F4CE47] cursor-pointer">
              <a href="#"> <i class="fa-solid fa-location-dot"></i> Yunusobod Toshkent | TATU</a>
            </li>
          </ul>
          <ul>
            <li class="text-[25px] font-bold mb-2 hover:text-[#F4CE47] cursor-pointer">Filiallarimiz</li>
            <li class="text-[17px] hover:text-[#F4CE47] cursor-pointer"><a href="#"><i class="fa-solid fa-location-dot"></i> STAR5</a></li>
            <li class="text-[17px] hover:text-[#F4CE47] cursor-pointer"><a href="#"><i class="fa-solid fa-location-dot"></i> MacBock Media</a></li>
            <li class="text-[17px] hover:text-[#F4CE47] cursor-pointer">
              <a href="#"><i class="fa-solid fa-location-dot"></i>Malika Shop</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li class="text-[25px] font-bold mb-2 hover:text-[#F4CE47] cursor-pointer">Bizning yutuqlarimiz</li>
            <li class="text-[17px] hover:text-[#F4CE47] cursor-pointer">Tahsin mukofoti</li>
            <li class="text-[17px] hover:text-[#F4CE47] cursor-pointer">Shuhrat Medal</li>
            <li class="text-[17px] hover:text-[#F4CE47] cursor-pointer">Yil brendi - 2023</li>
          </ul>
          <ul>
            <li class="text-[25px] font-bold mb-2 hover:text-[#F4CE47] cursor-pointer">Bizni kuzatib boring!</li>
            <li class="text-[17px] hover:text-[#F4CE47] cursor-pointer">
              <!-- <span>{{ t("footer.social") }}:</span> -->
              <div class="flex gap-2 flex-wrap">
                <a
                  target="_blank"
                  class="inline-block"
                  href="https://t.me/Valisher_Botirov"
                >
                  <img
                    :src="icon1"
                    alt="icon"
                    class="duration-200 hover:-translate-y-1 w-6 h-6"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://t.me/Valisher_Botirov"
                >
                  <img
                    :src="icon2"
                    alt="icon"
                    class="duration-200 hover:-translate-y-1 w-6 h-6"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://t.me/Valisher_Botirov"
                >
                  <img
                    :src="icon3"
                    alt="icon"
                    class="duration-200 hover:-translate-y-1 w-6 h-6"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://t.me/Valisher_Botirov"
                >
                  <img
                    :src="icon4"
                    alt="icon"
                    class="duration-200 hover:-translate-y-1 w-6 h-6"
                  />
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <ul class="w-[330px] pb-5">
            <li class="text-[25px] font-bold mb-2 hover:text-[#F4CE47] cursor-pointer">To'lov turlari</li>
            <li class="flex flex-wrap">
              <li class="bg-[#f2f2f7] h-[60px] w-[120px] flex items-center justify-center rounded-lg m-1"><img :src="payme" alt="Payme image" class=""></li>
              <li class="bg-[#f2f2f7] h-[60px] w-[120px] flex items-center justify-center rounded-lg m-1"><img :src="viza" alt="Payme image" class=""></li>
              <li class="bg-[#f2f2f7] h-[60px] w-[120px] flex items-center justify-center rounded-lg m-1"><img :src="mastercard" alt="Payme image" class=""></li>
              <li class="bg-[#f2f2f7] h-[60px] w-[120px] flex items-center justify-center rounded-lg m-1"><img :src="humo" alt="Payme image" class=""></li>
              <li class="bg-[#f2f2f7] h-[60px] w-[120px] flex items-center justify-center rounded-lg m-1"><img :src="uzcard" alt="Payme image" class=""></li>
            </li>
          </ul>
        </div>

        <!-- <div class="SearchForm hidden xs:block"></div> -->
        <!--responsive qismi-->
        <!-- <div class="SearchForm block xs:hidden"></div> -->
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import icon1 from "../../assets/img/footer/icon1.png";
import icon2 from "../../assets/img/footer/icon2.png";
import icon3 from "../../assets/img/footer/icon3.png";
import icon4 from "../../assets/img/footer/icon4.png";
import payme from "../../assets/img/footer/payme.svg";
import viza from "../../assets/img/footer/viza_svg.svg";
import humo from "../../assets/img/footer/humo.svg";
import uzcard from "../../assets/img/footer/uzcard.svg";
import mastercard from "../../assets/img/footer/mastercard.svg";
import { useRoute } from "vue-router";
const route = useRoute();
const hrefPath = route.path
const { t } = useI18n();
</script>
