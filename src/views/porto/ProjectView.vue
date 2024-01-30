<script setup lang="ts">
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import {Button} from '@/components/ui/button'
import { useRouter } from 'vue-router';

const router = useRouter()

const moreProject = () => {
    router.push('/moreProject')
}

</script>

<template>
  <div class="flex justify-center items-center h-screen w-full px-4">
    <div class="flex flex-col md:flex-row  justify-center items-center w-full md:w-[1128px]">
      <div class="md:w-1/2">
        <h1 class="text-3xl md:text-6xl font-extrabold mb-8 md:mr-24 text-center md:text-left drop-shadow-md">
            Recent <br> <span class="text-yellow-400">Project</span>
        </h1>
        <p class="text-justify text-lg md:text-xl mr-10">
        Discover how I've leveraged creativity, strategic thinking, and a keen understanding of diverse audiences to craft compelling narratives and drive meaningful engagement.
        </p>
        <div class=" my-4 md:mt-4 mr-10 text-end">
            <Button @click="moreProject"> More Project </Button>
        </div>
      </div>
      
      <div class="flex justify-center items-center w-full md:w-1/2">
        <Carousel class="relative w-full max-w-xs md:max-w-[500px]">
          <CarouselContent>
            <CarouselItem v-for="(_, index) in 3" :key="index">
              <div class="p-1">
                <Card>
                  <CardContent class="flex aspect-square items-center justify-center p-6">
                    <img :src="`/image${index + 1}.jpg`" alt="Image {{ index + 1 }}" class="object-cover" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  </div>
</template>
