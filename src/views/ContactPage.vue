<script setup>
import Layout from "../components/layout/Layout.vue";
</script>

<template>
  <Layout>
    <section class="mb-32 text-gray-800 text-center">
      <div class="px-6 py-12 md:px-12">
        <div class="container mx-auto xl:px-32">
          <div class="grid lg:grid-cols-2 flex items-center">
            <div class="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
              <div class="block relative rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14 card-container"
                style="background: hsla(0, 0%, 100%, 0.55); backdrop-filter: blur(30px)">
                <h2 class="text-3xl font-bold mb-12">Contact us</h2>
                <p class="text-gray-500 mb-6">
                  Office Hours
                <p class="ml-4">Monday - Friday: 9AM - 4PM</p>
                <p class="ml-4">Saturday: by appoiment only</p>
                <p class="ml-4">Sunday: Closed</p>
                </p>
                <address>
                  <p class="text-gray-500 mb-2">4455 Murphy Canyon Road</p>
                  <p class="text-gray-500 mb-2">San Diego, CA 92023</p>
                  <p class="text-gray-500 mb-2">(858) 414-6932</p>
                  <p class="text-gray-500 mb-2">info@monarchbuilders.net</p>
                </address>
                <div class="flex justify-center mt-2">
                  <a href="https://www.facebook.com/profile.php?id=100086153693026" class="mr-9 text-gray-800 w-6 h-6">
                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-square"
                      class="svg-inline--fa fa-facebook-square" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) -->
                      <path
                        d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/monarch.builders/" class="mr-9 text-gray-800 w-6 h-6">
                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram"
                      class="svg-inline--fa fa-instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path fill="currentColor"
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                      </path>
                    </svg>
                  </a>
                </div>
                <!--form>
                  <div class="form-group mb-6">
                    <input type="text"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleInput7" placeholder="Name" />
                  </div>
                  <div class="form-group mb-6">
                    <input type="email"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleInput8" placeholder="Email address" />
                  </div>
                  <div class="form-group mb-6">
                    <textarea
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
                  </div>
                  <div class="form-group form-check text-center mb-6">
                    <input type="checkbox"
                      class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                      id="exampleCheck87" checked />
                    <label class="form-check-label inline-block text-gray-800" for="exampleCheck87">Send me a copy of this
                      message</label>
                  </div>
                  <button type="submit"
                    class="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                    Send
                  </button>
                </form-->
              </div>
            </div>
            <div class="md:mb-12 lg:mb-0">
              <div class="map-container relative shadow-lg rounded-lg">
                <iframe src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ-aG3wzb-24ARHpRy1BRqXp4&key=AIzaSyCAGCYZF-P6FNJObCeTEZAiZMYH33xCqjw"
                  class="left-0 top-0 h-full w-full absolute rounded-lg" frameborder="0" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<style>
.map-container {
  height: 700px;
  z-index: 10;
}
.card-container {
  z-index: 20;
}
</style>

