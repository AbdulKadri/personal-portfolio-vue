<template>
  <div class="about-container">
    <div class="about">
      <h1>About Me</h1>
      <p>
        Hello! I'm Abdul-Rahime Kadri, a web developer with a deep passion for creating beautiful
        and functional websites. My journey into the world of coding began unexpectedly. I was
        studying biological sciences at Macewan University and then at the University of Calgary,
        where I discovered my love for coding during a computer science elective course. From that
        moment, I've been on a self-taught journey, honing my skills and working on a diverse range
        of projects, from simple landing pages to complex e-commerce sites. I've always been a big
        fan of sports, and I love finding ways to incorporate sports-related content into my
        projects. It adds a unique touch and allows me to combine two of my passions. Over the
        years, I've gained experience working with a variety of languages and frameworks. I've
        worked with WordPress, Vue, React, PHP/Laravel, Python, CSS, SASS, and TailwindCSS, to name
        a few.
        <br />
        <br />
        My professional experience includes working with the Muslim Association of Canada (MAC),
        doing freelance work for various clients, collaborating with Hands for Charity, and working
        with GoviralProductions. Each of these experiences has helped me grow as a developer and has
        given me the opportunity to apply my skills in different contexts. The analytical thinking
        and problem-solving skills I developed during my science studies have been particularly
        useful in my development career. I'm always looking for new projects and collaborations. If
        you're interested in working together or just want to chat, don't hesitate to get in touch.
        Thanks for checking out my portfolio!
      </p>
    </div>
    <div class="skills-container">
      <h1>Skills</h1>
      <div class="skills">
        <div v-for="tool in tools" :key="tool.name" class="skill">
          <img :src="tool.logo" :alt="tool.name" />
          <p>{{ tool.name }}</p>
        </div>
      </div>
    </div>

    <h1>Work Experience</h1>
    <h1>Work Experience</h1>
    <h1>Schooling</h1>
    <h1>Certificates</h1>
  </div>
</template>

<script setup lang="ts">
import tools from '../data/skills'
</script>

<style scoped>
.about-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0 2rem;
}

.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

p {
  font-size: 0.8rem;
  text-align: left;
}

.skills-container {
  width: 100%;
}

.skills {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  width: 100%;
  padding: 1rem;
  gap: 1rem;
}

.skill {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  border-radius: 10px;
  background: #e0e0e0;
  box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff;
  padding: 0.5rem 0;
}

.skill img {
  width: 50%;
  height: 50%;
}
</style>
