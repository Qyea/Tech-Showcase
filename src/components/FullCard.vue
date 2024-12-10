<template>
  <div class="wrapper">
    <div class="side-block">
      <CircleImage :image="'./assets/images/profile-photo.jpg'" size="medium" />
      <div class="block">
        <h3 class="block-title">Profile</h3>
        <p>
          Student at Belarusian State University, Faculty of Applied Mathematics
          and Computer Science, with foundational knowledge in low-level
          languages (Assembly) and high-level languages (C++, Java).
        </p>
      </div>
      <div class="block">
        <h3 class="block-title">Languages</h3>
        <SkillCard skill="Russian" level="Native" size="small" />
        <SkillCard skill="English" level="B2" size="small" />
      </div>
      <div class="block">
        <h3 class="block-title">Projects</h3>
        <a href="https://epic-edu.institute" class="link"
          ><p>Educational platform</p></a
        >
        <a href="https://github.com/Qyea/Tech-Showcase" class="link"
          ><p>Portfolio</p></a
        >
      </div>
    </div>
    <div class="main-block">
      <div class="card-header">
        <h1 class="info-title">Anastasia Krech</h1>
      </div>
      <div class="card-info">
        <div class="card">
          <h3 class="block-title">Education</h3>
          <div class="education-list">
            <div class="list-item">
              <div>
                <h6>Secondary education:</h6>
                <p>Gymnasium No. 13</p>
              </div>
              <h6>2010 - 2021</h6>
            </div>
            <div class="list-item">
              <div>
                <h6>Higher education:</h6>
                <p>Belarusian State University</p>
              </div>
              <h6>2021 - 2025</h6>
            </div>
            <div class="list-item">
              <div>
                <h6>Educational course:</h6>
                <p>EPIC institute of technology</p>
              </div>
              <h6>2023 - 2024</h6>
            </div>
          </div>
        </div>
        <div class="card">
          <h3 class="block-title">Experience</h3>
          <p class="text">
            During my studies at EPIC, I was selected for an internship
            opportunity through an interview process. As part of this
            internship, I contributed to the development of an educational
            platform using the Vue framework and TypeScript. Over one year of
            working on this real-world project, I not only gained valuable
            development experience but also honed my teamwork and collaboration
            skills.
          </p>
        </div>
        <div class="card">
          <h3 class="block-title">Skill Set</h3>
          <Navigation :data="skillsSet" />
        </div>

        <div class="card">
          <h3 class="block-title">Contacts</h3>
          <Navigation :data="cardLinks" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navigation from "./Navigation.vue";
import CircleImage from "./CircleImage.vue";
import SkillCard from "./SkillCard.vue";

const cardLinks = [
  {
    type: "clipboard",
    title: "kreshess@mail.ru",
    icon: "envelope",
  },
  { src: "https://github.com/Qyea", title: "Qyea", icon: "github" },
  {
    src: "https://discordapp.com/users/365873551083044865/",
    title: "qyea",
    icon: "discord",
  },
  { src: "https://t.me/qyeeaa", title: "qyeeaa", icon: "telegram" },
  {
    src: "https://www.instagram.com/kreches/",
    title: "kreches",
    icon: "instagram",
  },
];

const skillsSet = [
  {
    src: "https://reactjs.org/",
    image:
      "https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg",
    title: "React",
  },
  {
    src: "https://vuejs.org/",
    image:
      "https://profilinator.rishav.dev/skills-assets/vuejs-original-wordmark.svg",
    title: "Vue",
  },
  {
    src: "https://www.javascript.com/",
    image:
      "https://profilinator.rishav.dev/skills-assets/javascript-original.svg",
    title: "JavaScript",
  },
  {
    src: "https://www.typescriptlang.org/",
    image:
      "https://profilinator.rishav.dev/skills-assets/typescript-original.svg",
    title: "TypeScript",
  },
  {
    src: "https://en.wikipedia.org/wiki/HTML5",
    image:
      "https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg",
    title: "HTML5",
  },
  {
    src: "https://www.w3schools.com/css/",
    image:
      "https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg",
    title: "CSS3",
  },
  {
    src: "https://sass-lang.com/",
    image: "https://profilinator.rishav.dev/skills-assets/sass-original.svg",
    title: "Sass",
  },
  {
    src: "https://webpack.js.org/",
    image: "https://profilinator.rishav.dev/skills-assets/webpack-original.svg",
    title: "Webpack",
  },
  {
    src: "https://www.tailwindcss.com/",
    image: "https://profilinator.rishav.dev/skills-assets/tailwindcss.svg",
    title: "Tailwind CSS",
  },
  {
    src: "https://mui.com/",
    image: "https://profilinator.rishav.dev/skills-assets/mui.png",
    title: "Material UI",
  },

  {
    src: "https://getbootstrap.com/docs/3.4/javascript/",
    image: "https://profilinator.rishav.dev/skills-assets/bootstrap-plain.svg",
    title: "Bootstrap",
  },
  {
    src: "https://www.figma.com/",
    image: "https://profilinator.rishav.dev/skills-assets/figma-icon.svg",
    title: "Figma",
  },
];
</script>

<style lang="scss" scoped>
.side-block {
  max-width: 25%;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--cv-primary);
  flex: 1;
}

.card-info {
  flex-grow: 1;

  padding: 1rem 0.85rem;
  padding-right: 4rem;
  background-color: var(--cv-secondary-bg);
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #192222;
}

.main-block {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.text {
  padding: 1rem 0;
}
</style>
