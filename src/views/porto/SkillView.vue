<template>
    <div class="w-full h-screen relative">
        <div class="bg-yellow-400 w-full h-1/2">
            <div class="flex flex-col flex-wrap items-center mx-auto pt-8 md:pt-20">
                <h1 class="text-gray-800 font-extrabold text-3xl md:text-6xl mb-4 drop-shadow-lg">Skill & <span
                        class="text-white">Services</span></h1>
                <div class="w-32 md:w-72 border-b-8 border-b-white flex justify-start" />

                <p class=" p-4 md:py-6 md:text-xl font-semibold text-justify">As a seasoned copywriter, I specialize in
                    transforming thoughts into compelling narratives that resonate with your audience.</p>
            </div>
        </div>

        <div class="flex items-center justify-center h-screen absolute inset-0 mt-10 md:mt-8 ">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-1">
                <div v-for="(item, index) in services" :key="index"
                    :class="[index % 2 === 0 ? 'bg-white' : 'bg-gray-800', 'hover:bg-yellow-400', 'text-' + (index % 2 === 0 ? 'black' : 'white'), 'm-3', 'p-8', 'rounded', 'shadow-lg', 'flex', 'flex-col', 'items-center', 'justify-center']">
                    <Icon :icon="item.icon" :color="index % 2 === 0 ? 'black' : 'white'" class="w-4 h-4 md:w-10 md:h-10" />
                    <h1 class="text-center font-bold text-xl md:text-3xl md:py-6">{{ item.title }}</h1>
                </div>
            </div>
        </div>

        <div class="bg-white w-full h-1/2"></div>
    </div>
</template>



<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

interface Service {
  icon: string;
  title: string;
}

const services = ref<Service[]>([
  { icon: 'oi:copywriting', title: 'Copywriting' },
  { icon: 'jam:write-f', title: 'Content Writing' },
  { icon: 'pajamas:planning', title: 'Content Planning' },
  { icon: 'fluent:slide-content-24-regular', title: 'Content Creation' },
]);
</script>

<style lang="scss" scoped></style>