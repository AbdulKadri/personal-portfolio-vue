<template>
  <div class="projects">
    <h1>Projects</h1>

    <div class="main-section">
      <nav>
        <h4
          v-for="section in sections"
          :key="section"
          @click="selected = section"
          :class="{ active: selected === section }"
        >
          {{ section }}
        </h4>
      </nav>
      <main>
        <div v-if="selected === 'All'">All projects</div>
        <div v-else-if="selected === 'React'">React projects</div>
        <div v-else-if="selected === 'Vue'">Vue projects</div>
        <div v-else-if="selected === 'FullStack'">FullStack projects</div>
        <div v-else-if="selected === 'WordPress'">WordPress projects</div>
        <div v-else-if="selected === 'PHP/Laravel'">PHP/Laravel projects</div>
        <div v-else-if="selected === 'Python/Django'">Python/Django projects</div>
        <div v-else-if="selected === 'C#/.NET'">C#/.NET projects</div>
        <div v-else-if="selected === 'React Native'">React Native projects</div>
        <div v-else-if="selected === 'Figma'">Figma projects</div>
        <!-- Add more conditions for other sections -->
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const sections = [
  'All',
  'React',
  'Vue',
  'FullStack',
  'WordPress',
  'PHP/Laravel',
  'Python/Django',
  'C#/.NET',
  'React Native',
  'Figma'
]
const selected = ref(sections[0]) // Default to the first section
</script>

<style scoped>
.main-section {
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 1rem;
  margin: 2rem;
}

nav {
  border-radius: 10px;
  background: #e0e0e0;
  box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff;
  padding: 1rem;
}

nav > *:hover {
  cursor: pointer;
  color: #00ccff;
  border-radius: 10px;
  background: #e0e0e0;
  box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff;
}

nav .active {
  color: #00ccff;
  border-radius: 10px;
  background: #e0e0e0;
  box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff;
}

main {
  border-radius: 10px;
  background: #e0e0e0;
  box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff;
  padding: 1rem;
}
</style>
