<script setup lang="ts"></script>

<template>
  <footer>
    <div class="wrapper">
      <p class="footer-text">© 2023 Abdul-Rahime Kadri</p>
      <div class="footer-created-with">
        <p>Created with</p>
        <img src="/languages/vuejs-original.svg" alt="" />
        <p>&</p>
        <img src="/languages/css3-original.svg" alt="" />
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  margin-top: auto;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;
  gap: 1rem;
  font-size: 1rem;
}

.footer-created-with {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
}

.footer-created-with img {
  width: 2rem;
  height: 2rem;
}
</style>
