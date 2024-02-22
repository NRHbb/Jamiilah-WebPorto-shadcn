<template>
    <div class="w-full h-screen relative mb-14 md:mb-0">
        <div class="bg-yellow-400 w-full h-1/2">
            <div class="flex flex-col flex-wrap items-center mx-auto pt-8 md:pt-8">
                <h1 class="text-gray-800 font-extrabold text-3xl md:text-6xl mb-4 drop-shadow-lg">Skill & <span
                        class="text-white">Services</span></h1>
                <div class="w-32 md:w-72 border-b-8 border-b-white flex justify-start" />

                <p class=" p-4 md:py-6 md:text-xl font-semibold text-justify">As a seasoned copywriter, I specialize in
                    transforming thoughts into compelling narratives that resonate with your audience.</p>
            </div>
        </div>

        <div class="flex items-center justify-center absolute inset-0 my-20 md:top-24 ">
            <DialogSkill />
        </div>

        <div class="bg-white w-full h-1/2"></div>
    </div>
</template>



<script setup lang="ts">
import DialogSkill from '@/components/service/DialogSkill.vue';
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