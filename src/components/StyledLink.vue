<template>
  <RouterLink :to="link">
    <div class="styled-link">
      <span>{{ linkText }}</span>
      <font-awesome-icon :icon="icon" />
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  link: {
    type: String,
    required: true
  },
  linkText: {
    type: String,
    default: 'Learn More'
  },
  icon: {
    type: Array,
    default: () => ['fas', 'arrow-right']
  }
})

let hover = ref(false)
</script>

<style scoped>
.styled-link {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;

  position: relative;
  padding: 0.2rem 1rem;
  border-radius: 50px;
  background: #e0e0e0;
  box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff;
  overflow: hidden;
  color: #00ccff;
  transition: color 0.3s ease-in-out;
}
.styled-link > * {
  position: relative;
  z-index: 2;
}

.styled-link:before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: #00ccff;
  transition: left 0.3s ease-in-out;
  z-index: 1;
}

.styled-link:hover {
  color: white;
}

.styled-link:hover:before {
  left: 0;
}
</style>
