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

    <div class="work-container">
      <h1>Work Experience</h1>
      <div class="work">
        <div class="work-item">
          <h3>Muslim Association of Canada</h3>
          <img src="/work/mac-logo.png" alt="Mac logo" />
          <p>Web Developer</p>
        </div>
        <div class="work-item">
          <h3>Hands for Charity</h3>
          <img src="/work/hfc-logo.png" alt="HFC logo" />
          <p>Freelance Web Developer</p>
        </div>
        <div class="work-item">
          <h3>Go Viral Productions</h3>
          <img src="/work/goviral-logo.png" alt="GVP logo" />
          <p>Web Developer</p>
        </div>
        <div class="work-item">
          <h3>Freelance</h3>
          <img src="/personal-logo.svg" alt="Freelance logo" />
          <p>Freelance Web Developer</p>
        </div>
      </div>
    </div>

    <!-- <div class="school-container">
      <h1>Schooling</h1>
    </div>

    <div class="cert-container">
      <h1>Certificates</h1>
    </div> -->
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
  gap: 3rem;
  padding: 0 4rem;
}

.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

h1 {
  font-size: 2.5rem;
  text-align: center;
}

.about p {
  font-size: 1.5rem;
  text-align: left;
}

.skills-container {
  width: 100%;
}

.skills {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  width: 100%;
  padding: 0 1rem;
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

.work-container {
  width: 100%;
  margin: 0 2rem;
}

.work {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: stretch;
  padding: 0.5rem 0;
}

.work-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 15rem;
  flex: 1 0 20%;
  height: 12rem;
  max-width: 300px;
  margin: 1rem;
  padding: 1rem;

  border-radius: 10px;
  background: #e0e0e0;
  box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff;
}

.work-item img {
  width: 80%;
  height: 60%;
  object-fit: contain;
}
</style>
