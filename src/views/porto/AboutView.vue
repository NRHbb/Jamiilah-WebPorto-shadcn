<template>
    <div class="w-full bg-yellow-400">
        <div class="md:w-[1128px] flex flex-col md:flex-row mx-auto">
            <div
                class="w-full md:w-1/2 md:flex md:flex-col justify-center md:items-end items-center md:h-screen p-8 md:p-0 ">
                <div class="md:mb-14 mb-6">
                    <h1 class="text-2xl md:text-6xl font-extrabold text-black drop-shadow-lg pb-4">About <span
                            class="text-white">Me.</span></h1>
                    <div class="w-24 md:w-52 border-b-8 border-b-white" />
                </div>
                <div>
                    <p class="text-black md:text-xl text-justify font-semibold leading-8 ">
                        Hi, I’m <span class="text-white">Jamiilah Zahrotul Jannah</span>, a content copywriter in a branding
                        agency with experience handling
                        clients for various brands. I'm committed to translating ideas into persuasive and captivating copy
                        that resonates with audiences and drives engagement.
                    </p>
                </div>
                <div class="flex gap-5 pt-10 flex-wrap text-black font-semibold drop-shadow-lg">
                    <Button variant="outline" @click="openLink">

                        Resume

                    </Button>
                    
                    <Button variant="outline" @click="openLink2">  LinkedIn </Button>
                </div>
            </div>
            <div class="w-full md:w-1/2 flex justify-center md:justify-end items-center md:h-screen p-8">
                <div class="md:w-96 md:h-96 md:border-8 md:relative md:border-white">
                </div>
                <img src="/photo.webp" alt="Photo"
                    class="w-72 md:w-96 md:absolute md:-mr-8 md:-mt-16 border-8 border-black">
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { Button } from '@/components/ui/button'

const openLink = () => {
    window.open('https://www.googledrive.com', '_blank');
}

const openLink2 = () => {
    window.open('https://www.linkedin.com', '_blank');
}
</script>
  