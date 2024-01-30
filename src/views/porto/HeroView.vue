<template>
    <div class=" bg-white flex justify-center items-center w-full md:h-screen md:relative">
        <div class="md:bg-yellow-400 md:w-[32%] h-screen md:absolute left-0" />
        <div class=" md:w-[1128px] block md:flex md:items-center md:justify-center absolute mt-[3rem] md:mt-0 ">
            <div class="md:w-1/2 md:h-screen flex items-center justify-center pt-[5rem] md:pt-0">
                <img src="/crop.webp" class="w-72 md:w-96 border-8 border-black">
            </div>
            <div class="md:w-1/2 flex flex-col text-wrap md:pl-5 p-4">
                <h1 class=" text-2xl md:text-6xl font-extrabold text-start text-yellow-400 pb-2 ">JAMIILAH.</h1>
                <div class="w-24 md:w-52 border-b-8 border-b-black" />
                <h1 class="text-lg md:text-2xl font-bold text-start pt-4 ">Copywriter</h1>
                <p class="text-justify font-semibold text-md md:text-xl pt-5 italic leading-8 ">
                    “Introducing products of a brand
                    isn't easy, but no worries! A brand
                    can overcome anything with the
                    magical copy from a Copywriter.”
                </p>
                <div class="flex justify-end mb-16 md:mb-0">
                    <Button variant="link" class="text-sm font-bold hover:text-yellow-400">
                        <a href="#about">
                            More About Me
                        </a>

                    </Button>
                </div>
            </div>

        </div>
    </div>
</template>
  
<script setup lang="ts">
import { Button } from '@/components/ui/button'

</script>
  
<style lang="scss" scoped></style>