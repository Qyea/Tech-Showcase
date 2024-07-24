<template>
  <PortfolioHeader />
  <SectionBlock id="profile" title="Profile">
    <BlockLayout :block-data="profileData" />
  </SectionBlock>
  <SectionBlock id="education" title="Education">
    <div class="education-list">
      <div v-for="item in educationData" class="item">
        <div class="list-item section">
          <div>
            <h3>{{ item.step }}</h3>
            <h4>{{ item.place }}</h4>
          </div>
          <h3>{{ item.years }}</h3>
        </div>
        <p class="story">
          {{ item.description }}
        </p>
      </div>
    </div>
  </SectionBlock>
  <SectionBlock id="languages" title="Languages">
    <div class="skills-wrapper">
      <div class="bg">
        <div class="brown line small"></div>
        <div class="green line"></div>
        <div class="green line large"></div>
        <div class="brown line"></div>
        <div class="green line"></div>
      </div>
      <SkillCard
        class="front"
        skill="Russia"
        level="Native"
        size="large"
        color="#5f8e66"
      />
      <SkillCard
        class="front"
        skill="English"
        level="B2"
        size="large"
        color="#5f8e66"
      />
    </div>
  </SectionBlock>
  <SectionBlock id="projects" title="Projects">
    <ProjectCard class="front" />
  </SectionBlock>
  <SectionBlock id="hobbies" title="Hobbies">
    <BlockLayout :block-data="hobbiesData" />
  </SectionBlock>
  <FullCard id="contacts" />
</template>

<script lang="ts" setup>
import PortfolioHeader from "./PortfolioHeader.vue";
import SectionBlock from "./SectionBlock.vue";
import SkillCard from "./SkillCard.vue";
import ProjectCard from "./ProjectCard.vue";
import FullCard from "./FullCard.vue";
import BlockLayout from "./BlockLayout.vue";

const profileData = [
  {
    title: "Profile",
    text: "I am a student of the Belarusian State University, Faculty of Applied Mathematics and Computer Science. In three years of study, I gained basic knowledge of both low-level languages, such as assembler, and high-level programming languages: C++, Java.",
    type: "image",
    side: "left",
    url: "./src/assets/images/profile-photo.jpg",
  },
  {
    title: "ProfileTable",
    text: "My experience includes writing client-server applications, desktop applications, which included working with databases and creating user interfaces. I also have experience in solving basic algorithmic problems.",
    type: "table",
    tableTitle: "I worked with the following languages",
    tableData: ["JavaScript", "C++", "Java", "Python", "SQL"],
  },
];

const hobbiesData = [
  {
    title: "Hobbies",
    text: "Apart from standard hobbies such as drawing, sports, reading and computer games, one of my most favorite hobbies is learning. I always strive to learn something new and expand my knowledge and skills.At the university, we were not given the opportunity to try the frontend. Therefore, the first steps in this area were taken independently.",
    type: "image",
    side: "left",
    url: "./src/assets/images/drawings.png",
  },
  {
    title: "Hobbies1",
    text: "React has become a great platform for me to explore the frontend. He gave me the opportunity to immerse myself in the world of the component approach and learn how to effectively interact with the data and the state of the application. I am passionate about creating interactive and beautiful user interfaces. I wonder how various tools and technologies can be used to create modern web applications.",
    type: "image",
    side: "right",
    url: "./src/assets/images/react.png",
  },
];

const educationData = [
  {
    step: "Secondary education:",
    place: "Gymnasium No. 13",
    years: "2010-2021",
    description:
      "I decided to mark this place of study because it was where I first had thoughts about programming. I was part of a game development interest group and served as the lead designer (creating concepts for characters, maps, and scripting cutscenes)",
  },
  {
    step: "Higher education:",
    place: "Belarusian State University",
    years: "2021-2025",
    description:
      "Studying at the university provided me with a solid foundation in programming and expanded my horizons in various fields of this discipline. The teachers gave us the opportunity to immerse ourselves in various areas of programming, from the development of algorithms for numerical methods to working with neural networks and computer vision. This provided me with valuable experience and allowed me to learn several programming languages during my studies.",
  },
  {
    step: "Educational course:",
    place: "EPIC institute of technology",
    years: "2023-2024",
    description:
      "Studying at the EPIC Institute of Technology provides a unique and valuable opportunity for students to develop their skills and receive a quality education in the field of technology. We have worked with experienced and qualified teachers who have extensive experience in their fields. Thus, I actively interacted with real projects and problems, which helped me develop my skills and better understand how to apply the knowledge I gained in practice.",
  },
];
</script>

<style lang="scss" scoped>
.skills-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 10rem;
}

.story {
  font-size: 1.75rem;
}

.front {
  z-index: 1;
}

.bg {
  position: absolute;
  top: 0;
  left: 3.5rem;
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  gap: 5rem;
}

.line {
  width: 708px;
  height: 82px;
  transform: rotate(38deg);
}

.green {
  background-color: #192222;
}

.brown {
  background-color: #2f2525;
}

.small {
  width: 572px;
  height: 28px;
}

.large {
  width: 908px;
  height: 208px;
}

.section {
  border-bottom: 1px solid var(--cv-white);
}

.item {
  margin-bottom: 2rem;
}
</style>
