<script setup >
import { useDark, useToggle } from '@vueuse/core'
import cpb from '../../assets/services/cp-black.svg';
import cpw from '../../assets/services/cp-white.svg'
import cpr from '../../assets/services/cp-red.svg'

import dhb from '../../assets/services/dh-black.svg';
import dhw from '../../assets/services/dh-white.svg'
import dhr from '../../assets/services/dh-red.svg'

import mdb from '../../assets/services/md-black.svg';
import mdw from '../../assets/services/md-white.svg'
import mdr from '../../assets/services/md-red.svg'

import mlb from '../../assets/services/ml-black.svg';
import mlw from '../../assets/services/ml-white.svg'
import mlr from '../../assets/services/ml-red.svg'

import wdb from '../../assets/services/wd-black.svg';
import wdw from '../../assets/services/wd-white.svg'
import wdr from '../../assets/services/wd-red.svg'

import { ref } from 'vue';
const isDark = useDark();
const featuresItems = ref([
  {
    wimage: wdw,
    bimage: wdb,
    rimage: wdr,
    title: 'WEB DEVELOPMENT',
    details: 'Proficient in web development languages such as HTML, CSS, and JavaScript. Experienced in building dynamic and responsive web applications using frameworks like React.js and Next.js. Skilled in utilizing design tools like Tailwind, and proficient in website builders like WIX and Webflow.'
  },
  // ... (other items)
  {
    wimage: mdw,
    bimage: mdb,
    rimage: mdr,
    title: 'Mobile Applications Development',
    details: '  Skilled in mobile app development using languages like Flutter. Proficient in creating cross-platform mobile applications with a focus on user-friendly interfaces and seamless user experiences. Experienced with Android Studio for native Android app development.',
  },
  {
    wimage: dhw,
    bimage: dhb,
    rimage: dhr,
    title: 'DataBase Handling',
    details: 'Skilled in working with databases, including SQL, MongoDB, Firebase. Experienced in database design, optimization, and handling data for web and mobile applications. Proficient in managing data with a focus on security and efficiency.'
  },
  {
    wimage: mlw,
    bimage: mlb,
    rimage: mlr,
    title: 'Machine learning',
    details: 'Knowledgeable in machine learning technologies and tools such as PyTorch. Experienced in implementing machine learning algorithms for tasks such as data analysis, pattern recognition, and predictive modeling. Proficient in utilizing libraries like TensorFlow, scikit-learn, and Pandas for machine learning projects.'
  },
  {
    wimage: cpw,
    bimage: cpb,
    rimage: cpr,
    title: 'Cross-Platform',
    details: 'Familiar with cross-platform development, utilizing technologies like React-Native,Flutter for building applications that run on both iOS and Android platforms. Proficient in creating consistent and efficient user experiences across different devices.',
  },

]);
</script>

<template>
  <!-- ====== Services Section Start -->
  <section id="service-me" class="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-[#fbfcf8] dark:bg-[#121212]">
    <div class="container mx-auto">
      <div class="mx-4 flex flex-wrap">
        <div class="w-full px-4">
          <div class="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
            <h2
              class="text-center dark:text-white font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
              data-aos="fade-up" data-aos-delay="20" data-aos-duration="1000">
              Here's what I'm good at
            </h2>
            <h3
              class="pt-6 text-center font-header text-xl font-medium text-black dark:text-gray-200 sm:text-2xl lg:text-3xl"
              data-aos="fade-up" data-aos-delay="40" data-aos-duration="1200">
              The Services I can Provide
            </h3>
          </div>
        </div>
      </div>
      <div class="mx-4 flex flex-wrap">
        <template v-for="(item, index) in featuresItems" :key="index">
          <div data-aos="fade-up-right" data-aos-duration="1000" class="w-full px-4 md:w-1/2 lg:w-1/3">
            <div
              class="group mb-9 hover:bg-[#5844ac] dark:hover:bg-[#cb1b28] rounded-[20px] bg-white dark:bg-[#1e1e1e] p-10 shadow-xl dark:shadow-[#cb1b28] hover:shadow-lg md:px-7 xl:px-10">
              <div class="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                <div class="hidden group-hover:block">
                  <img v-if="isDark" :src="item.wimage" alt="dark icon" class="object-contain h-full w-full" />
                  <img v-else :src="item.wimage" alt="light icon" class="object-contain h-full w-full" />
                </div>
                <div class="block group-hover:hidden">
                  <img v-if="isDark" :src="item.rimage" alt="dark icon" class="object-contain h-full w-full" />
                  <img v-else :src="item.bimage" alt="light icon" class="object-contain h-full w-full" />
                </div>
              </div>

              <h4 class="text-dark group-hover:text-[#ffcb1d] dark:text-white mb-[14px] text-2xl font-semibold">
                {{ item.title }}
              </h4>
              <p class="text-black dark:text-white">
                {{ item.details }}
              </p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
  <!-- ====== Services Section End -->
</template>