<script setup lang="ts">
import Card from '@/components/Card.vue'
</script>

<template>
  <main>
    <h1 class="levitate" v-motion :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0 }">
      Abdul-Rahime
    </h1>
    <h1 class="levitate" v-motion :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0 }">
      Kadri
    </h1>
  </main>
  <Card
    title="Summary"
    description="Lorem ipsum dolor, sit amet consectetur adipisicing elit..."
    link="/about"
    linkText="Read More"
  />

  <Card
    title="Recent Projects"
    description="Description of recent projects..."
    link="/projects"
    linkText="See All"
  />

  <Card
    title="Connect With Me"
    description="Description of connect with me section..."
    link="/contact"
    linkText="Connect"
  />
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

  line-height: 1.2;
  font-size: 1.5rem;
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
  text-shadow: -1px 0 #00ccff, 0 1px #00ccff, 1px 0 #00ccff, 0 -1px #00ccff;
  animation: levitate 1s ease-in-out infinite alternate;
}

@keyframes levitate {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-5px);
  }
}
</style>
