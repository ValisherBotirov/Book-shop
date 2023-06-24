<template>
  <footer id="footer" class="">
    <div class="w-[100%] mx-auto">
      <div
        class="px-4 bg-[#444444BF] drop-shadow-lg rounded-t-2xl py-3 gap-4 flex flex-wrap flex-col md:flex-row justify-between items-center shadow-lg text-white"
      >
        <div>
          <ul>
            <li class="text-[20px]">Информация</li>
            <li class="text-[20px]">Часто задаваемые вопросы</li>
            <li class="text-[20px]">Пункты выдачи</li>
            <li class="text-[20px]">Блог</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Для связи</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Наши достижения</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Виды оплаты</li>
          </ul>
        </div>
        <div class="flex gap-3 items-center flex-wrap">
          <span>{{ t("footer.social") }}:</span>
          <div class="flex gap-2 flex-wrap">
            <a
              target="_blank"
              class="inline-block"
              href="http://t.me/STAR_NEW_TECH"
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
            <a target="_blank" href="https://www.youtube.com/@Star_New_Tech">
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
        </div>

        <!-- <div class="SearchForm hidden xs:block"></div> -->
        <!--responsive qismi-->

        <!-- <div class="SearchForm block xs:hidden"></div> -->
        <div class="text-[#F4F6F9] text-lg font-light">Shohrux Soatov 506</div>
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
const { t } = useI18n();
</script>
