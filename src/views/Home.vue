<script setup>

import Landing from '../components/Sections/Landing.vue';
import Services from '../components/Sections/Services.vue';
import Projects from '../components/Sections/Projects.vue';
import Skills from '../components/Sections/Skills.vue';
import ExperienceComponent from '../components/Sections/ExperienceComponent.vue';
import Contact from '../components/Sections/ContactMeComponent.vue';


</script>
<template>
  <div>
  <div class="bg-[url('./assets/img/lightback.jpg')] dark:bg-[url('./assets/img/banner.png')] min-h-screen bg-fixed bg-cover bg-right bg-no-repeat">
  <Landing class="mt-12 mb-12"/>
  <Skills />
  <Services/>
  <Projects/>
  <ExperienceComponent/>
  <Contact/>
  </div>
</div>
</template>