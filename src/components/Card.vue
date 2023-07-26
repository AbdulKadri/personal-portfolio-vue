<template>
  <section class="section-card">
    <h2 class="section-title">{{ title }}</h2>
    <p class="section-description">{{ description }}</p>
    <StyledLink :link="link" :linkText="linkText" />
  </section>
</template>

<script setup lang="ts">
import StyledLink from './StyledLink.vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  linkText: {
    type: String,
    default: 'Learn More'
  }
})
</script>

<style scoped>
.section-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  border-radius: 10px;
  background: #e0e0e0;
  box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff;
  margin: 1rem 2rem;
  padding: 1rem;
}

.section-description {
  text-align: left;
}
</style>
