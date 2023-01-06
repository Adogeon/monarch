<script setup>
  import NavBarVue from './NavBar.vue';
  import Footer from './Footer.vue';

  const props = defineProps({title: String})
  
</script>

<template>
  <NavBarVue />
  <main class="content flex flex-col z-0">
    <h1 class="mt-16 mb-32 sm:mb-16 text-5xl font-semibold text-blue-600 text-center">{{props.title}}</h1>
    <slot />
  </main>
  <Footer/>
</template>

<style>
.content {
      min-height: calc(100vh - 148px);
      
      /* 104px header + 40px footer = 120px  */
    }
</style>