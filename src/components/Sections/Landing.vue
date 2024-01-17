<template>
    <div id="start-me" class="w-full px-6 py-8 md:px-16 lg:px-24 xl:px-36">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <!-- Text Content -->
        <div>
          <span class="font-semibold tracking-wide px-10 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 border border-white bg-opacity-50 text-white text-lg mb-4 inline-block">
            Welcome to my Portfolio
          </span>
          <h3 class="text-white font-bold">Hello I'm Jayesh</h3>
          <h1 class="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold">
            Full Stack Developer
          </h1>
          <h3 class="text-gray-900 dark:text-white font-bold mt-4 text-lg text-sm md:text-base lg:text-lg xl:text-xl  leading-6 md:leading-7 lg:leading-8 xl:leading-9 w-96 md:w-full">
            I am Jayesh Kirtane, a passionate and skilled full-stack developer. With a strong background in web development technologies, I strive to create efficient and user-friendly solutions. My journey in the world of coding has been driven by a curiosity to explore and solve real-world problems.  
          </h3>
          <SocialContainer/>
          <button class="text-white font-bold text-lg md:text-xl mt-6 leading-6 items-center flex">
            Let's Connect
            <svg class="text-lg md:text-2xl ml-2 transition-all duration-300 ease-in-out leading-tight" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="25" height="25" fill="currentColor">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"></path>
            </svg>
          </button>
        </div>
  
        <!-- Image -->
        <div class="md:ml-auto">
          <img v-if="isDark" class="animated-element" src="../../assets/img/header-img.svg">
          <img v-else class="animated-element" src="../../assets/img/lightasto.png">
        </div>
      </div>
    </div>
  </template>
<script setup>
import { useDark, useToggle } from '@vueuse/core'
import SocialContainer from '../Container/SocialContainer.vue';

const isDark = useDark();
const toggleDark = useToggle(isDark);

</script>
  
  <style scoped>
    @keyframes updown {
      0% {
        transform: translateY(-20px);
      }
      50% {
        transform: translateY(20px);
      }
      100% {
        transform: translateY(-20px);
      }
    }
  
    .animated-element {
      animation: updown 3s linear infinite;
    }
  </style>

  