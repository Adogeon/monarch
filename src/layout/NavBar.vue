<script setup>

</script>

<template>
  <nav class="
  relative
  w-full
  flex flex-wrap
  items-center
  justify-between
  py-4
  bg-gray-100
  text-gray-500
  hover:text-gray-700
  focus:text-gray-700
  shadow-lg
  navbar navbar-expand-lg navbar-light
  sticky
  top-0
  z-30
  ">
      
    <div class="container-fluid w-full flex flex-wrap items-center justify-between h-11 px-6">
      <div class="container-fluid">
        <router-link class="flex items-center text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt-0 mr-1" to="/">
          <img class="mr-2 object-scale-down" src="../assets/full-logo-3.png" style="height: 3rem" alt="Logo" loading="lazy" />
          <!--<span class="text-3xl font-bold">Monarch Builder Corp</span>-->
        </router-link>
      </div>
      <button class="
      navbar-toggler
      text-gray-500
      border-0
      hover:shadow-none hover:no-underline
      py-2
      px-2.5
      bg-transparent
      focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
    " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="w-6" role="img"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="currentColor"
            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
          </path>
        </svg>
      </button>
      <div class="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
      
        <!-- Left links -->
        <ul class="navbar-nav flex flex-col items-center pl-0 list-style-none ml-auto z-10">
          <li class="nav-item pr-2 bg-light">
            <router-link class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to="/about">About
            </router-link>
          </li>
          <li class="nav-item pr-2">
            <router-link class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to="/service">Service</router-link>
          </li>
          <li class="nav-item pr-2">
            <router-link class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to="/project">Project</router-link>
          </li>
          <li class="nav-item pr-2">
            <router-link class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to="/contact">Contact</router-link>
          </li>
        </ul>
        <!-- Left links -->
      </div>
      <!-- Collapsible wrapper -->
    </div>
  </nav>
</template>

<style>
@tailwind components;
@tailwind utilities;

@layer components {
  .mt-18px {
    margin-top:18px;
  }

  .show>.navbar-nav,
  .collapsing>.navbar-nav {
    @apply bg-gray-50 shadow-md mx-auto mt-18px py-4 w-2/3 divide-y
  }

  .collapsing .nav-item,
  .show .nav-item {
    @apply font-bold py-2 w-full text-center 
  }
}

</style>