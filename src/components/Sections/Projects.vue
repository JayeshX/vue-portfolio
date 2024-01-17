
<script setup>
import ProjectStackContainer from '../Container/ProjectStackContainer.vue';

import { ref } from 'vue';
const tools = ref([
  {
    glink: 'https://github.com/MechanicalNoob05/lawtrix',
    pname: 'Lawtrix',
    subtitle: 'Revolutionize legal services in India with our E-Marketplace.',
    desc: 'Offering attractive incentives for Legal Service Providers to bring them onto clients\' fingertips. It uses a LLM for legal queries, and cross-platform application.',
    ilink: 'https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    techUsed: ['Flutter', 'Node', 'MongoDB', 'PyTorch'],
  },
  {
    glink: 'https://github.com/Smuff03/Emergon',
    pname: 'Emergon',
    subtitle: 'Engineered a health app using Android Studio, Java, and Firebase.',
    desc: 'Offering real-time health tracking features for users. Your vitals at your fingertips! Integrated Raspberry Pi hardware for cutting-edge life-saving functionalities.',
    ilink: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    techUsed: ['Android Studio', 'Firebase', 'Java', 'Raspberry Pi'],
  },
  {
    glink: 'https://github.com/JayeshX/web_article_text_analysis',
    pname: 'W.I.B.E (Web Article/Info Extractor and Basic Analyzer)',
    subtitle: 'Implemented efficient web scraping for information extraction.',
    desc: 'Seamlessly transforming URLs from an Excel sheet into organized text files, demonstrating adept data handling skills.',
    ilink: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    techUsed: ['Python', 'BeautifulSoup', 'Pandas'],
  },
  {
    glink: 'https://github.com/JayeshX/QR-D-Con',
    pname: 'QR-D-Con',
    subtitle: 'A Flutter Application that automates college event registration.',
    desc: 'Scanning student ID QR and logging it on an Excel sheet.',
    ilink: 'https://images.unsplash.com/photo-1571867424488-4565932edb41?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    techUsed: ['Flutter'],
  },
  {
    glink: 'https://www.stoffspot.com/',
    pname: 'StoffSpot Ecommerce Store',
    subtitle: 'Utilized responsive design to ensure compatibility across all devices.',
    desc: 'Designed and developed a clean and modern website using Tailwind, Express, Node, and Next.js.',
    ilink: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    techUsed: ['Next.js', 'Tailwind', 'Node'],
  },
]);


</script>
<template>
  <div class="bg-[#f8eeec] dark:bg-[#151515]">
  <div class="max-w-7xl mx-auto  px-2 bg-[#f8eeec] dark:bg-[#151515] " id="project-me">
    <hr class=" border-b-2 border-gray-800 dark:border-[#cb1b28]  w-17 mx-auto">
      <br>
    <div class="flex justify-center text-2xl md:text-3xl font-bold mb-4 dark:text-white">
        MY PROJECTS
        
    </div>
    <hr class="my-2 border-b-2 border-gray-600 w-16 mx-auto">

    <ul class="grid gap-8  md:grid-cols-2 lg:grid-cols-3 p-2 xl:p-5">
      <li v-for="(tool, index) in tools" :key="index">
        

        <ProjectStackContainer
          :glink="tool.glink"
          :pname="tool.pname"
          :subtitle="tool.subtitle"
          :desc="tool.desc"
          :ilink="tool.ilink"
          :techUsed="tool.techUsed"
          class=""
        />
      </li>
    </ul>

</div>
</div>
</template>
<style scoped>
.two-lines {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>