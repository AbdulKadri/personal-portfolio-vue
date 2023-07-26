<script setup lang="ts">
import Header from '@/components/Header.vue'
</script>

<template>
  <main>
    <p>Abdul-Rahime Kadri</p>
  </main>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  max-width: 100vw;
  min-height: 80vh;
  margin: 0 2rem;
  border-radius: 8px;

  background-image: url('../assets/workplace.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  box-sizing: border-box;
}
</style>
