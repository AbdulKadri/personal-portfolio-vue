<script setup lang="ts"></script>

<template>
  <header>
    <img alt="Personal logo" class="logo" src="@\assets\personal-logo.svg" width="50" height="50" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/"><span>Home</span></RouterLink>
        <RouterLink to="/about"><span>About</span></RouterLink>
        <RouterLink to="/projects"><span>Projects</span></RouterLink>
        <RouterLink to="/contact"><span>Contact</span></RouterLink>
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
}

nav {
  display: flex;
  gap: 1rem;
}

nav a {
  position: relative;
  padding: 0 1rem;
  border-radius: 50px;
  background: #e0e0e0;
  box-shadow: 13px 13px 26px #bebebe, -13px -13px 26px #ffffff;
  overflow: hidden;
}

nav a span {
  position: relative;
  color: #00ccff;
  transition: color 0.3s ease-in-out;
  z-index: 2;
}

nav a:before {
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

nav a:hover span {
  color: white;
}

nav a:hover:before {
  left: 0;
}
</style>
