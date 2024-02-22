<template>
    <div class="container mx-auto my-24 bg-black rounded-[70px] py-[80px] flex flex-col items-center justify-center ">
      <h1 class="text-yellow-400 text-xl md:text-5xl font-extrabold mb-4">
        Let's Work Together
      </h1>
      <p class="text-white md:text-xl font-medium max-w-sm mb-4">
        Any type of Query and Discussion.
      </p>
      <p class="text-white md:text-xl font-medium mb-4">
        jamiilahzj15@gmail.com
      </p>
      <Button @click="composeNewEmail" class="bg-yellow-400 text-md font-bold text-black hover:text-white">
        <Mail class="w-4 h-4 mr-2" /> | Let's Connect
      </Button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-vue-next'

const recipientEmail = ref<string>('jamiilahzj15@gmail.com')
const gmailURL = <string>(`https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=${recipientEmail.value}`)
const composeNewEmail = (): void => {
  window.open(gmailURL, '_blank');
};


</script>

<style scoped>

</style>