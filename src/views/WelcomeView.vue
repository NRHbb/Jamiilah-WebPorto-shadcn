<template>
    <div>
        <h1 class="text-2xl md:text-5xl text-black font-bold">JAMIILAH | <span class="bg-black p-2 text-white ">COPYWRITER</span></h1>
        <h1 class="text-5xl md:text-8xl text-white font-bold py-5 tracking-wide">PORTOFOLIO</h1>
        <RouterLink :to="{ name: 'Home'}">
            <Button>
                Get Started 
                <Icon icon="material-symbols:keyboard-double-arrow-right" height="24"/>
            </Button>
        </RouterLink>
        
    </div> 
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { Button } from '@/components/ui/button'
import { RouterLink } from 'vue-router';
</script>

<style scoped>

</style>