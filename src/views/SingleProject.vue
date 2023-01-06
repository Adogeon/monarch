<script setup>
//import important component
// probably fetch data
import layout from '../layout/Layout.vue';

import { ref } from 'vue';

const color = ref('aqua')

function changeBackground(inputColor) {
  color.value = inputColor
}

const imgLinkPnt = ref(0);

function goToImgIndex(indexNum) {
  imgLinkPnt.value = indexNum
}

const imgLinks = [
  "https://via.placeholder.com/1024x512.png?text=image+1",
  "https://via.placeholder.com/1024x512/0000FF/FFFFFF.png?text=image+2",
  "https://via.placeholder.com/1024x512/FF0000/FFFFFF.png?text=image+3",
  "https://via.placeholder.com/1024x512/FFFF00/000000.png?text=image+4",
  "https://via.placeholder.com/1024x512/000000/FFFFFF.png?text=image+5",
  "https://via.placeholder.com/1024x512/008000/FFFFFF.png?text=image+6",
  "https://via.placeholder.com/1024x512/F49A29/808080.png?text=image+7",
  "https://via.placeholder.com/1024x512/BA73BE/FFFFFF.png?text=image+8",
]

const imgLinks2 = [
  "https://drive.google.com/uc?id=1Khn7EqxTQpJiMs_in0pqsyb1e4G0t3a0",
  "https://drive.google.com/uc?id=1ZHzGrDA7-H60-lvuYKj3xGQ5UyZ1Z20X",
  "https://drive.google.com/uc?id=1MqS8PVxo0BssbPJTsFDOVsd-OyKyGfk5",
  "https://drive.google.com/uc?id=1i7toiMAMs1jmwEc7MkpMdIlj7eOqlK0w",
  "https://drive.google.com/uc?id=1PqeAy-_oyMGFkVAlJjKRh2dDVUpdGTfX",
  "https://drive.google.com/uc?id=1CSWsJUBuTeJC5kavBN3DabQpuX6jymEx"
]

</script>

<template>
  <layout>
    <section class="flex flex-col md:h-fit mx-8 py-4 md:mx-32  " id="image-galery">
      <section class="basis-2/3 mb-4" id="image-window">
        <!--image go here-->
        <div class="flex flex-row">
          <div class="basis-2/3 mr-8" style="height: '32rem';" id="img-wrapper">
            <img class="object-cover h-full w-m-full" :src="imgLinks2[imgLinkPnt]" />
          </div>
          <div class="basis-1/3 ml-8" id="desc">
            <section class="flex flex-col">
              <h2>Project name</h2>
              <p>Project Location</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
          </div>
        </div>
      </section>
      <section id="basis-1/3 image-picker">
        <div class="overflow-hidden" id="pickers-window">
            <!--image list go here-->
            <div class="overflow-x-auto">
              <ul class="flex gap-1" id="pickers-content">
                <li v-for="(item, index) in imgLinks2">
                  <button type="button" @click="goToImgIndex(index)">
                    <div class="h-24 w-48" style="background-color: aqua;">
                      <img class="object-cover h-full w-full" :src="item" />
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </div>
      </section>
    </section>
  </layout>
  
</template>

<style scoped>
  image{
    width:100%;
  }
</style>

