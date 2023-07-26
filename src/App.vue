<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <Header />
  <router-view />
  <Footer />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  min-width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
}

body,
html {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  width: 100%;
  height: 100vh;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #e0e0e0;
}
</style>
