<template>
  <div data-aos="flip-up" data-aos-duration="1000" :class="'relative bg-white flex flex-col justify-between border rounded shadow md:shadow-xl hover:shadow-orange-600 hover:shadow-red-400'">
    <a :href="glink" target="_blank" class="relative">
      <div class="relative w-full aspect-video">
        <img :src="ilink" alt="Writey A.I" loading="lazy" class="rounded w-full h-full object-cover" />
        <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-[#320002] to-[#cb1b28] text-white">
          <h2 class="text-xl font-semibold">{{ pname }}</h2>
          <p class="font-medium text-sm">{{ subtitle }}</p>
        </div>
      </div>
    </a>

    <div class="flex flex-col bg-[#fbfcf8] dark:bg-[#1e1e1e] justify-between gap-3 px-4 py-2">
      <p class="text-gray-900 dark:text-white two-lines">{{ desc }}</p>

      <ul class="flex flex-wrap items-center justify-start text-sm gap-2">
        <li
          title=""
          class="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full"
        >
        <svg width="20px" height="20px" viewBox="0 0 0.6 0.6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m0.175 0.2 -0.1 0.1 0.1 0.1" stroke="#000000" stroke-width="0.05" stroke-linecap="round" stroke-linejoin="round"/><path d="m0.425 0.2 0.1 0.1 -0.1 0.1" stroke="#000000" stroke-width="0.05" stroke-linecap="round" stroke-linejoin="round"/><path d="M0.35 0.1 0.25 0.49" stroke="#000000" stroke-width="0.05" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span>TechUsed</span>
        </li>
      </ul>

      <ul class="flex flex-wrap text-sm gap-2 my-1">
        <li v-for="tech in techUsed" :key="tech" class="flex items-center text-black dark:text-white gap-2"><span>{{ tech }}</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    glink: {
      type: String,
      required: true,
    },
    ilink: {
      type: String,
      required: true,
    },
    pname: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    techUsed: {
      type: Array,
      default: () => [],
    },
  },
};
</script>