<script setup>
  import NavBarVue from './NavBar.vue';
  import Footer from './Footer.vue';
</script>

<template>
  <NavBarVue />
  <main class="content flex flex-col justify-center z-0">
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