<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { useRouter } from 'vue-router';
import RecentLandingVue from '@/components/project/RecentLanding.vue';

const router = useRouter()

const moreProject = () => {
  router.push('/detail/projects')
}

</script>

<template>
  <div class="flex justify-center items-center w-full px-4 ">
    <div class="flex flex-col md:flex-row  justify-center items-center w-full md:w-[1128px]">
      <div class="md:w-1/2">
        <h1 class="text-3xl md:text-6xl font-extrabold mb-8 md:mr-24 text-center md:text-left drop-shadow-md">
          Recent <br> <span class="text-yellow-400">Project</span>
        </h1>
        <p class="text-justify text-lg md:text-xl mr-10">
          I've had the privilege of contributing my skills as a Copywriter in a renowned agency for the past year. This
          journey has been a fascinating exploration of transforming ideas into compelling narratives, breathing life into
          brands, and leaving an indelible mark on the digital landscape.
        </p>
        <div class=" my-4 md:mt-4 mr-10 text-end">
          <Button @click="moreProject"> More Project </Button>
        </div>
      </div>

      <div class="flex justify-center items-center w-full md:w-1/2">
        <RecentLandingVue />
      </div>
    </div>
  </div>
</template>
