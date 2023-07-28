<script setup lang="ts">
import StyledLink from './StyledLink.vue'
</script>

<template>
  <header>
    <RouterLink to="/">
      <img src="/personal-logo.svg" alt="Personal logo" class="logo" width="50" height="50" />
    </RouterLink>

    <div class="wrapper">
      <nav>
        <StyledLink link="/" linkText="Home" :icon="['fas', 'house']" />
        <StyledLink link="/about" linkText="About" :icon="['fas', 'user']" />
        <StyledLink link="/projects" linkText="Projects" :icon="['fas', 'diagram-project']" />
        <StyledLink link="/contact" linkText="Contact" :icon="['fas', 'address-book']" />
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 0 2rem;
  font-size: 1rem;
}

header img {
  height: 2rem;
}

.wrapper {
  height: 100%;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 100%;
}
</style>
