<template >
    <div id="skill-me" class="bg-[#fbfcf8] dark:bg-[#151515] p-8 text-center">
      
      <h2 v-motion-slide-visible-left :delay=300
      class=" text-4xl font-bold text-black mb-4 font-serif dark:text-white">My Skills</h2>
      <hr class="my-2 border-b-2 border-gray-600 w-16 mx-auto">
  
      <p class="text-gray-700 mb-6 font-serif dark:text-gray-200">
        I have expertise in various programming languages and technologies. Here are some of my key skills:
      </p>
      <SkillsContainer/>
    </div>
  </template>
  <script setup>
import SkillsContainer from '../Container/SkillsContainer.vue';


</script>