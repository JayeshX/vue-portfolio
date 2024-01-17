<template>
    <!-- component -->
    <div class="bg-[#fbfcf8] dark:bg-[#151515] pt-16 pb-32">
<div class="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
            <div class="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                <div class="relative">
                    <div class="absolute">
                        <div class="">
                            <h1 class="my-2 text-gray-800 dark:text-white font-bold text-2xl">
                                Looks like you've found the
                                doorway to the great nothing
                            </h1>
                            <p class="my-2 text-gray-800 dark:text-white">Sorry about that! Please visit our hompage to get where you need to go.</p>
                            <button class="sm:w-full lg:w-auto my-2 border rounded md  py-4 px-8 text-center bg-[#cb1b28] text-white hover:bg-[#cb1b40] focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"><a href="/">Take me there!</a></button>
                        </div>
                    </div>
                    <div>
                        
                        <img v-if='l' src="https://i.ibb.co/G9DC8S0/404-2.png" />
                    </div>
                </div>
            </div>
            <div>
                <!-- <img v-if="isDark" src="../assets/er/grop.png" /> -->
                <img v-if="l" src="https://i.ibb.co/ck1SGFJ/Group.png" />
            </div>
        </div>
    </div>
</template>
<script setup>
import { useDark } from '@vueuse/core'

const isDark = useDark();
const l = !isDark;


</script>