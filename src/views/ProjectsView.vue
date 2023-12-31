<template>
  <div class="projects">
    <h1>Projects</h1>

    <div class="main-section">
      <nav>
        <h4
          v-for="section in sections"
          :key="section"
          @click="handleClick(section)"
          :class="{
            active: selected === section,
            disabled: section !== 'All' && projectCounts[section] === 0
          }"
        >
          {{ section }}
        </h4>
      </nav>
      <main>
        <h2 v-if="selected === 'All'" class="All">All projects</h2>
        <h2 v-else-if="selected === 'React'" class="React">React projects</h2>
        <h2 v-else-if="selected === 'Vue'" class="Vue">Vue projects</h2>
        <h2 v-else-if="selected === 'FullStack'" class="FullStack">FullStack projects</h2>
        <h2 v-else-if="selected === 'WordPress'" class="WordPress">WordPress projects</h2>
        <h2 v-else-if="selected === 'PHP/Laravel'" class="PHP-Laravel">PHP/Laravel projects</h2>
        <h2 v-else-if="selected === 'Python/Django'" class="Python-Django">
          Python/Django projects
        </h2>
        <h2 v-else-if="selected === 'C#/.NET'" class="C#-.NET">C#/.NET projects</h2>
        <h2 v-else-if="selected === 'React Native'" class="React-Native">React Native projects</h2>
        <h2 v-else-if="selected === 'AWS'" class="AWS">AWS projects</h2>
        <h2 v-else-if="selected === 'Figma'" class="Figma">Figma projects</h2>

        <div class="projects-container">
          <div class="projects">
            <div v-for="(project, index) in filteredProjects" :key="index" class="project">
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
                <div v-if="project.hosting">
                  <p class="created-with"><u>Hosting:</u> {{ project.hosting }}</p>
                </div>
                <div v-if="project.testing">
                  <p class="created-with"><u>Testing:</u> {{ project.testing }}</p>
                </div>
                <br />
                <div class="links">
                  <StyledLink
                    v-if="project.liveLink"
                    :link="project.liveLink"
                    linkText="Live site"
                    :icon="['fas', 'display']"
                    target="_blank"
                    rel="noreferrer"
                  />
                  <StyledLink
                    v-if="project.repositoryLink"
                    :link="project.repositoryLink"
                    link-text="Repository"
                    :icon="['fab', 'github']"
                    target="_blank"
                    rel="noreferrer"
                  />
                </div>
              </div>
              <div class="project-preview">
                <p v-if="project.gifURL" class="hover-instructions">Hover to see more</p>
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
import { ref, watch } from 'vue'
import projects from '../data/projects'
import StyledLink from '@/components/StyledLink.vue'

const sections = ['All', 'React', 'Vue', 'WordPress', 'PHP/Laravel', 'AWS', 'C#/.NET', 'Figma']
const selected = ref(sections[0]) // Default to the first section
const filteredProjects = ref(projects)
const projectCounts = ref<Record<string, number | undefined>>({})

// A function that counts the number of projects in each section
const countProjects = () => {
  sections.forEach((section) => {
    projectCounts.value[section] = projects.filter(
      (project) => project.sectionType === section
    ).length
  })
  filteredProjects.value = projects // Initially, display all projects
}

watch(selected, () => {
  if (selected.value === 'All') {
    filteredProjects.value = projects
  } else {
    filteredProjects.value = projects.filter((project) => project.sectionType === selected.value)
  }
})

const handleClick = (section: string) => {
  const count = projectCounts.value[section]
  if (section === 'All' || (count !== undefined && count !== 0)) {
    selected.value = section
  }
}

// Calculate project counts when component is created
countProjects()
</script>

<style scoped>
.main-section {
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 1rem;
  margin: 2rem 4rem;
}

h1,
h2 {
  font-size: 2.5rem;
}

nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  font-size: 1.5rem;

  border-radius: 10px;
  background: #e0e0e0;
  box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff;
  padding: 1rem;
  height: fit-content;
}

nav > * {
  width: 100%;
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

nav .disabled {
  color: grey;
  cursor: not-allowed;
}

main {
  border-radius: 10px;
  background: #e0e0e0;
  box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff;
  padding: 1rem;
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
  justify-self: self-start;
  align-self: center;
  width: 100%;
  font-size: 2rem;
}
.project .project-text p {
  font-size: 1.5rem;
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

@media (max-width: 768px) {
  .main-section {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    margin: 2rem;
  }

  .project {
    position: relative;
    margin-top: 11rem;
    box-shadow: none;
    padding: 0;
    grid-template-columns: 1fr;
  }

  .project .project-text {
    z-index: 1;
    width: 100%;
    background-color: #e0e0e0;
    border-radius: 10px;
    background: #e0e0e0;
    box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff;
    padding: 1rem;
  }

  .project .project-text h3 {
    margin-top: 1rem;
  }

  .project .project-text a {
    display: block;
    width: 50%;
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

  .links {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0;
  }
}
</style>
