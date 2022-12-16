<script setup>
import Layout from "../components/layout/Layout.vue";
</script>

<template>
  <Layout>
    <section class="mb-32 text-gray-800 px-12">
      <div class="block rounded-lg shadow-lg bg-white">
        <div class="flex flex-wrap items-center">
          <div class="hidden lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12">
            <img src="../assets/FullLogo.jpg" alt="Company photo"
              class="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
          </div>
          <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
            <div class="px-6 py-12 md:px-12">
              <h2 class="text-2xl font-bold mb-4">Who are we?</h2>
              <p class="text-gray-500">
              MONARCH BUILDERS CORP is a local construction company that has been in the real estate and construction business for
              over a decade. We give our clients the best of both worlds, a first impression builds to last. If you dream it, we can
              create the culture to bring your vision to life. Our team is driven with instinctive passion and is relentless,
              determined to deliver unmatched services in both industries. We’re excited for the next chapter of our company and the
              journeys ahead!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="mb-32 text-gray-800 px-12">
      <!-- Jumbotron -->
      <div class="container mx-auto xl:px-32 text-center lg:text-left">
        <div class="grid lg:grid-cols-2 flex items-center">
          <div class="mb-12 lg:mb-0">
            <div class="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
              style="background: hsla(0, 0%, 100%, 0.55); backdrop-filter: blur(30px)">
              <h2 class="text-3xl font-bold mb-6">Our commitment to safety</h2>
              <p class="text-gray-500 mb-6 pb-2 lg:pb-0">
                During our years in construction, we have never had a single accident due to our safety focused superintendents. We
                ensure our workers to follow these steps below to achieve safe workplace for our worker and customer:
              </p>
    
              <div class="flex flex-col  md:justify-around lg:justify-between mb-6 mx-auto">
                <p class="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 mr-2">
                    <path fill="currentColor"
                      d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                    </path>
                  </svg>
                  Require personal protective equipment on every site
                </p>
    
                <p class="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 mr-2">
                    <path fill="currentColor"
                      d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                    </path>
                  </svg>
                  Employ AGC as our independent safety auditing company
                </p>
    
                <p class="flex items-center mb-2 lg:mb-0 mx-auto md:mx-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 mr-2">
                    <path fill="currentColor"
                      d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                    </path>
                  </svg>
                  All superintendents have 30 HR OSHA training
                </p>

                <p class="flex items-center mb-2 lg:mb-0 mx-auto md:mx-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 mr-2">
                    <path fill="currentColor"
                      d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                    </path>
                  </svg>
                  First Aid/CPR/AED training from American Red Cross
                </p>

                <p class="flex items-center mb-2 lg:mb-0 mx-auto md:mx-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 mr-2">
                    <path fill="currentColor"
                      d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                    </path>
                  </svg>
                  Created "Safe on Purpose" initiative
                </p>
              </div>
    
            </div>
          </div>
    
          <div>
            <img src="../assets/safety.jpg" class="w-full rounded-lg shadow-lg"
              alt="" />
          </div>
        </div>
      </div>
      <!-- Jumbotron -->
    </section>
  </Layout>
</template>