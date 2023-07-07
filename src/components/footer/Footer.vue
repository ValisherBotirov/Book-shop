<template>
  <footer id="footer" class="mt-5">
    <div class="w-[100%] mx-auto bg-[#000]  pb-[80px] md:pb-0">
      <div
        class="px-4 container mx-auto drop-shadow-lg rounded-t-2xl pt-5 flex flex-wrap flex-col md:flex-row justify-between shadow-lg text-white"
      >
        <div>
          <ul>
            <li class="text-[25px] font-bold mb-2 hover:text-[#F4CE47] cursor-pointer">Информация</li>
            <li class="text-[17px] hover:text-[#F4CE47] cursor-pointer">Часто задаваемые вопросы</li>
            <li class="text-[17px] hover:text-[#F4CE47] cursor-pointer">Пункты выдачи</li>
            <li class="text-[17px] hover:text-[#F4CE47] cursor-pointer">Блог</li>
            <li class="text-[17px] hover:text-[#F4CE47] cursor-pointer">Наши бренды</li>
            <li class="text-[17px] hover:text-[#F4CE47] cursor-pointer">
              Публичная оферта (Пользовательское соглашение)
            </li>
            <li class="text-[17px] hover:text-[#F4CE47] cursor-pointer">Оферта для покупок в рассрочку</li>
            <li class="text-[17px] hover:text-[#F4CE47] cursor-pointer">О нас</li>
          </ul>
        </div>
        <div>
          <ul>
            <li class="text-[25px] font-bold mb-2 hover:text-[#F4CE47] cursor-pointer">Для связи</li>
            <li class="text-[17px] hover:text-[#F4CE47] cursor-pointer"><a href="#"><i class="fa-solid fa-phone"></i>  +998 71 200 01 05</a></li>
            <li class="text-[17px] hover:text-[#F4CE47] cursor-pointer"><a href="#"><i class="fa-regular fa-envelope hover:text-[#F4CE47] cursor-pointer"></i>  info@asaxiy.uz</a></li>
            <li class="text-[17px] hover:text-[#F4CE47] cursor-pointer">
              <a href="#"> <i class="fa-solid fa-location-dot"></i> улица Ислама Каримова, 49, Ташкент</a>
            </li>
          </ul>
          <ul>
            <li class="text-[25px] font-bold mb-2 hover:text-[#F4CE47] cursor-pointer">Книжные магазины</li>
            <li class="text-[17px] hover:text-[#F4CE47] cursor-pointer"><a href="#"><i class="fa-solid fa-location-dot"></i> Asaxiy Novza</a></li>
            <li class="text-[17px] hover:text-[#F4CE47] cursor-pointer"><a href="#"><i class="fa-solid fa-location-dot"></i> Asaxiy Farhod bozori</a></li>
            <li class="text-[17px] hover:text-[#F4CE47] cursor-pointer">
              <a href="#"><i class="fa-solid fa-location-dot"></i> Asaxiy Panorama, Kitob olami</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li class="text-[25px] font-bold mb-2 hover:text-[#F4CE47] cursor-pointer">Наши достижения</li>
            <li class="text-[17px] hover:text-[#F4CE47] cursor-pointer">Премия "Tahsin"</li>
            <li class="text-[17px] hover:text-[#F4CE47] cursor-pointer">Медаль "Shuhrat"</li>
            <li class="text-[17px] hover:text-[#F4CE47] cursor-pointer">Медаль "Kelajak bunyodkori"</li>
          </ul>
          <ul>
            <li class="text-[25px] font-bold mb-2 hover:text-[#F4CE47] cursor-pointer">Мы в соц. сетях</li>
            <li class="text-[17px] hover:text-[#F4CE47] cursor-pointer">
              <!-- <span>{{ t("footer.social") }}:</span> -->
              <div class="flex gap-2 flex-wrap">
                <a
                  target="_blank"
                  class="inline-block"
                  href="https://t.me/Qwerty_2526"
                >
                  <img
                    :src="icon1"
                    alt="icon"
                    class="duration-200 hover:-translate-y-1 w-6 h-6"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=100088042748728&mibextid=ZbWKwL"
                >
                  <img
                    :src="icon2"
                    alt="icon"
                    class="duration-200 hover:-translate-y-1 w-6 h-6"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://www.youtube.com/@Star_New_Tech"
                >
                  <img
                    :src="icon3"
                    alt="icon"
                    class="duration-200 hover:-translate-y-1 w-6 h-6"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://instagram.com/starnewtech?igshid=ZDdkNTZiNTM"
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
            <li class="text-[25px] font-bold mb-2 hover:text-[#F4CE47] cursor-pointer">Виды оплаты</li>
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
