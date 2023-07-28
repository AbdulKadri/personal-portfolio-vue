<script setup lang="ts">
import Card from '@/components/Card.vue'
</script>

<template>
  <div class="main">
    <h1 class="levitate" v-motion :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0 }">
      Abdul-Rahime
    </h1>
    <h1 class="levitate" v-motion :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0 }">
      Kadri
    </h1>
  </div>
  <Card
    title="Summary"
    description="Hello! I'm Abdul-Rahime Kadri, a web developer with a passion for creating beautiful and functional websites. My journey into coding began during my studies at Macewan University and the University of Calgary. I've worked on a variety of projects, from simple landing pages to complex e-commerce sites, and have experience with many languages and frameworks. I've currently working at Muslim Association of Canada (MAC), and worked with GoViralProductions. Some of my other work includes freelance with Hands for Charity and individual clients. I'm always open to new collaborations and projects..."
    link="/about"
    linkText="Read More"
  />

  <Card
    title="Recent Projects"
    link="/projects"
    linkText="See All"
    :projects="[
      {
        title: 'Campus Crafters',
        image: '/projects/CampusCrafters.png'
      },
      {
        title: 'Luxury Cuts',
        image: '/projects/LuxuryCuts.png'
      },
      {
        title: 'Work Bridge',
        image: '/projects/WorkBridge.png'
      },
      {
        title: 'Electronics Store',
        image: '/projects/ElectronicsStore.png'
      }
    ]"
  />

  <Card
    title="Connect With Me"
    link="/contact"
    linkText="Connect"
    :socials="[
      { icon: ['fab', 'github'], link: 'https://github.com/AbdulKadri' },
      {
        icon: ['fab', 'linkedin'],
        link: 'https://www.linkedin.com/in/abdul-rahime-kadri-bb8935178/'
      }
    ]"
  />
</template>

<style>
body {
  margin: 0;
  padding: 0;
}

.main {
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

  background-image: url('/assets/workplace.jpg');
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
