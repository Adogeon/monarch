<script setup>
import Layout from '../components/layout/Layout.vue';

</script>

<template>
  <Layout>
      <section class="sec-height" id="welcomeArea">
      <div class="relative overflow-hidden bg-no-repeat bg-cover" style="
              height: calc(100vh - 124px);
            ">
            <video id="background-video" autoplay loop muted poster="src\assets\OpeningPoster.png" class="h-full w-full object-cover">
              <source src="src\assets\pexels-richard-he-5567711.mp4" type="video/mp4">
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
                data-mdb-ripple="true" data-mdb-ripple-color="light">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
      </section>
      <section class="mt-64 mb-32 text-gray-800 text-center" id="impressionArea">
        <div class="flex justify-center">
          <div class="max-w-[800px] flex flex-col">
            <h2 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight">
              Monarch Construction <br />
            </h2>
            <p class="text-blue-600 text-3xl mb-12">Company Tag line here</p>
            <p class="text-gray-500 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officia consequatur
              adipisci tenetur repudiandae rerum quos.
            </p>
            <router-link class="inline-block px-7 py-3 text-white font-medium text-sm leading-snug bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
              data-mdb-ripple="true" data-mdb-ripple-color="light" to="/about" role="button">Learn more</router-link>
            <img src="../assets/company-photo.jpg"/>
          </div>
          
        </div>
      </section>
    <section class="mx-16 mb-32 text-gray-800 text-center md:text-left">
    
      <div class="grid md:grid-cols-2 gap-x-6 xl:gap-x-12 items-center mb-12">
        <div class="mb-6 md:mb-0">
          <div
            class="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
            data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdm0qx8t0i9gc9.cloudfront.net%2Fthumbnails%2Fvideo%2FEJsJFv-%2Fvideoblocks-abstract-architecture-background-blueprint-house-plan_b1-60gauh_thumbnail-1080_01.png&f=1&nofb=1&ipt=d28bd6f26d333aea3aa44b781326ab144d787d62b3a600b8607469f3525863d1&ipo=images" class="w-full" alt="Louvre" />
            <a href="#!">
              <div
                class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                style="background-color: rgba(251, 251, 251, 0.2)"></div>
            </a>
          </div>
        </div>
    
        <div class="mb-6 md:mb-0">
          <h3 class="text-2xl font-bold mb-3">Before we start building</h3>
          <p class="text-gray-500">
            Ut pretium ultricies dignissim. Sed sit amet mi eget urna
            placerat vulputate. Ut vulputate est non quam dignissim
            elementum. Donec a ullamcorper diam.
          </p>
          <router-link
            class="inline-block px-7 py-3 text-white font-medium text-sm leading-snug bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
            data-mdb-ripple="true" data-mdb-ripple-color="light" to="/service" role="button">View more</router-link>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-x-6 xl:gap-x-12 items-center mb-12">
        <div class="mb-6 md:mb-0 md:order-2">
          <div
            class="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
            data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.epfOre8Z_xbJ9uP8Vz6vtQHaE8%26pid%3DApi&f=1&ipt=c2a519b67ef9fbe6fcbad10d74bf9ad8a48317ffe6a382e0b16c9e365a782c7d&ipo=images" class="w-full" alt="Louvre" />
            <a href="#!">
              <div
                class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                style="background-color: rgba(251, 251, 251, 0.2)"></div>
            </a>
          </div>
        </div>
      
        <div class="mb-6 md:mb-0">
          <h3 class="text-2xl font-bold mb-3">During Construction</h3>
          <p class="text-gray-500">
            Ut pretium ultricies dignissim. Sed sit amet mi eget urna
            placerat vulputate. Ut vulputate est non quam dignissim
            elementum. Donec a ullamcorper diam.
          </p>
          <router-link
            class="inline-block px-7 py-3 text-white font-medium text-sm leading-snug bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
            data-mdb-ripple="true" data-mdb-ripple-color="light" to="/service" role="button">View more</router-link>
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