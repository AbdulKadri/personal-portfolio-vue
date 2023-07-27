<template>
  <section class="section-card">
    <h2 class="section-title">{{ title }}</h2>
    <p v-if="description && description.length" class="section-description">{{ description }}</p>
    <div v-if="projects && projects.length" class="projects">
      <div v-for="project in projects" :key="project.title" class="project">
        <h3>{{ project.title }}</h3>
        <img :src="project.image" :alt="project.title" />
      </div>
    </div>
    <div v-if="socials && socials.length" class="socials">
      <div v-for="social in socials" :key="social.link">
        <a :href="social.link" target="_blank">
          <font-awesome-icon :icon="social.icon" size="2x" />
        </a>
      </div>
    </div>
    <StyledLink :link="link" :linkText="linkText" />
  </section>
</template>

<script setup lang="ts">
import StyledLink from './StyledLink.vue'

type Project = {
  title: string
  image: string
}

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  link: {
    type: String,
    required: true
  },
  linkText: {
    type: String,
    default: 'Learn More'
  },
  projects: {
    type: Array as () => Project[],
    default: () => []
  },
  socials: {
    type: Array as () => Array<{ icon: Array<string>; link: string }>,
    default: () => []
  }
})
</script>

<style scoped>
.section-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  border-radius: 10px;
  background: #e0e0e0;
  box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff;
  margin: 1rem 2rem;
  padding: 1rem;
}

.section-description {
  text-align: left;
}

.projects {
  display: flex;
  gap: 1rem;
}

.project {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.project img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.socials {
  display: flex;
  gap: 1rem;
}

.socials a:hover {
  color: #00ccff;
}
</style>
