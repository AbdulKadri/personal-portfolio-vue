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
        <div v-if="selected === 'All'" class="All">All projects</div>
        <div v-else-if="selected === 'React'" class="React">React projects</div>
        <div v-else-if="selected === 'Vue'" class="Vue">Vue projects</div>
        <div v-else-if="selected === 'FullStack'" class="FullStack">FullStack projects</div>
        <div v-else-if="selected === 'WordPress'" class="WordPress">WordPress projects</div>
        <div v-else-if="selected === 'PHP/Laravel'" class="PHP-Laravel">PHP/Laravel projects</div>
        <div v-else-if="selected === 'Python/Django'" class="Python-Django">
          Python/Django projects
        </div>
        <div v-else-if="selected === 'C#/.NET'" class="C#-.NET">C#/.NET projects</div>
        <div v-else-if="selected === 'React Native'" class="React-Native">
          React Native projects
        </div>
        <!-- Add more conditions for other sections -->
        <div class="projects-container">
          <div class="projects">
            <div v-for="(project, index) in projects" :key="index" class="project">
              <div class="project-text">
                <h3>{{ project.title }}</h3>
                <br />
                <p class="project-description">{{ project.description }}</p>
                <br />
                <p class="created-with"><u>Frontend:</u> {{ project.frontend }}</p>
                <div v-if="project.backend">
                  <p class="created-with"><u>Backend:</u> {{ project.backend }}</p>
                </div>
                <div v-if="project.cms">
                  <p class="created-with"><u>CMS:</u> {{ project.cms }}</p>
                </div>
                <p class="created-with"><u>Hosting:</u> {{ project.hosting }}</p>
                <div v-if="project.testing">
                  <p class="created-with"><u>Testing:</u> {{ project.testing }}</p>
                </div>
                <br />
                <div class="links">
                  <StyledLink
                    v-if="project.liveLink"
                    link="project.liveLink"
                    linkText="Live site"
                    :icon="['fas', 'display']"
                    target="_blank"
                    rel="noreferrer"
                  />
                  <StyledLink v-else link="project.liveLink" link-text="live Site" disabled />
                  <StyledLink
                    v-if="project.repositoryLink"
                    link="project.repositoryLink"
                    link-text="Repository"
                    :icon="['fab', 'github']"
                    target="_blank"
                    rel="noreferrer"
                  />
                </div>
              </div>
              <div class="project-preview">
                <p class="hover-instructions">Hover to see more</p>
                <div class="project-front">
                  <img v-if="project.imageURL" :src="project.imageURL" :alt="project.title" />
                  <div v-else class="placeholder-image">No Image Available</div>
                </div>
                <div class="project-back">
                  <img v-if="project.gifURL" :src="project.gifURL" :alt="project.title" />
                  <div v-else class="placeholder-image">No Image Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import projects from '../data/projects'
import StyledLink from '@/components/StyledLink.vue'

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

.Python-Django {
  display: none;
}

.projects {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

.project {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin: 1rem;
  padding: 1rem;
  border-radius: 10px;
  background: #e0e0e0;
  box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff;
}

.project .project-text {
  justify-self: center;
  align-self: center;
}

.project .project-text p {
  font-size: 1rem;
}

.project .project-text .project-description,
.project .project-text .created-with {
  text-align: left;
}

.project .project-text u {
  color: #00ccff;
}

.links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 1rem;
}

.project-preview {
  width: 100%;
  height: 100%;
  aspect-ratio: 16/9;
  position: relative;
  border-radius: 10px;
}

.project-preview *,
.project-preview *::before,
.project-preview *::after {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  transition: all 0.5s linear;
  backface-visibility: hidden;
  position: absolute;
  border-radius: 10px;
}

.project-preview .project-front {
  z-index: 1;
  background-size: cover;
}

.project-preview .project-back {
  transform: rotateX(120deg) translateZ(-9.2rem);
  border-top: 2px solid rgb(171, 171, 171);
  background-size: cover;
}

.project-preview:hover .project-front {
  transform: rotateX(120deg) translateZ(9.2rem);
  border-bottom: 2px solid rgb(171, 171, 171);
}

.project-preview:hover .project-back {
  transform: rotateX(0) translateZ(0);
  border-top: 0;
}

.project-preview .placeholder-image {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  color: #bbb;
  font-size: 1em;
}

.hover-instructions {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  text-align: center;
  transition: all 0.2s linear;
  opacity: 1;
  z-index: 2;
  width: fit-content;
  height: fit-content;
}

.project-preview:hover .hover-instructions {
  opacity: 0;
}

@media (max-width: 600px) {
  .project {
    position: relative;
    margin-top: 11rem;
    box-shadow: none;
    padding: 0;
  }

  .project .project-text {
    z-index: 1;
    width: 100%;
    background-color: #e0e0e0;
    border: 10px solid #d1d1d1;
    border-radius: 23px;
    box-shadow: 21px 21px 30px #545454, inset 5px 5px 20px #545454, inset -10px -10px 30px #ffffff;
  }

  .project .project-text h3 {
    margin-top: 1rem;
  }

  .project .project-text a {
    display: block;
    width: 30%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
  }

  .project .project-text .project-description {
    font-size: 1rem;
  }

  .project .project-text .created-with {
    font-size: 1rem;
  }

  .project .project-text u {
    font-size: 1rem;
  }

  .project-preview {
    position: absolute;
    top: -10rem;
    left: 0;
    width: 100%;
    height: auto;
  }

  .project-preview .project-front {
    z-index: 0;
  }
}
</style>
