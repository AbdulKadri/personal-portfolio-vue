<script setup lang="ts"></script>

<template>
  <main>
    <h1 class="levitate" v-motion :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0 }">
      Abdul-Rahime
    </h1>
    <h1 class="levitate" v-motion :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0 }">
      Kadri
    </h1>
  </main>
  <section>Small Summary</section>
  <section>Recent Projects</section>
  <section>Connect With Me</section>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  line-height: 1.5;
  font-size: larger;
  color: white;

  max-width: 100vw;
  min-height: 70vh;
  margin: 0 2rem;
  border-radius: 8px;

  background-image: url('../assets/workplace.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  box-sizing: border-box;
}

.levitate {
  animation: levitate 1s ease-in-out infinite alternate;
}

@keyframes levitate {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-10px);
  }
}
</style>
