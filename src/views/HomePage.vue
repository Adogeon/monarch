<script setup>
import Layout from '../components/layout/Layout.vue';

import { useRouter } from "vue-router";
const router = useRouter()

</script>

<template>
  <Layout>
      <section class="sec-height" id="welcomeArea">
      <div class="relative overflow-hidden bg-no-repeat bg-cover" style="height: calc(100vh - 124px);">
            <video id="background-video" autoplay loop muted poster="/src/assets/Opening-Poster.png" class="h-full w-full object-cover">
              <source src="/src/assets/pexels-richard-he-5567711.mp4" type="video/mp4">
            </video>
        <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
          style="background-color: rgba(0, 0, 0, 0.75)">
          <div class="flex justify-center items-center h-full">
            <div class="text-center text-white px-6 md:px-12">
              <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                The best San Diego based company <br /><span>for your construction need</span>
              </h1>
              <button type="button"
                class="inline-block px-7 py-3 border-2 border-white text-white font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                data-mdb-ripple="true" data-mdb-ripple-color="light" @click="router.push({path:'/about'})">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
      </section>
      
  </Layout>
</template>

<style>
  .sec-height {
    min-height: calc(100vh - 124px)
  }
</style>