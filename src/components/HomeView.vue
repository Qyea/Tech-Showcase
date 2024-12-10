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
        skill="Russian"
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
    <ProjectCard :project-data="projectData" class="front" />
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
    url: "./assets/images/profile-photo.jpg",
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
    text: "In addition to standard hobbies such as drawing, sports, reading, and computer games, one of my greatest passions is learning. I am constantly striving to acquire new knowledge and enhance my skills. Since frontend development was not covered in my university curriculum, I took the initiative to explore it independently, making my first steps in this field on my own.",
    type: "image",
    side: "left",
    url: "./assets/images/drawings.png",
  },
  {
    title: "Hobbies1",
    text: "React has been an excellent platform for deepening my understanding of frontend development. It introduced me to the component-based approach and taught me how to effectively manage application data and state. I am passionate about building interactive and visually appealing user interfaces and continuously explore how various tools and technologies can be leveraged to create modern web applications.",
    type: "image",
    side: "right",
    url: "./assets/images/react.png",
  },
];

const educationData = [
  {
    step: "Secondary education:",
    place: "Gymnasium No. 13",
    years: "2010-2021",
    description:
      "I highlight this institution because it sparked my initial interest in programming. As part of a game development interest group, I took on the role of lead designer, creating concepts for characters, maps, and scripting cutscenes.",
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
      "At the EPIC Institute, I gained hands-on experience working on real-world projects under the guidance of experienced instructors. The coursework emphasized practical applications, helping me enhance my skills and deepen my understanding of how to apply technology solutions effectively.",
  },
];

const projectData = [
  {
    title: "Educational Platform",
    description:
      "An online platform designed for students to take tests and participate in contests with automated grading. Teachers are provided with tools for efficient and streamlined evaluation.",
    image: "toolbox",
    url: "https://epic-edu.institute",
  },
  {
    title: "Ozi: Social Media",
    description:
      "This was my first full-stack project, developed over a span of 4 months. It allows users to add friends, send messages, post content, and update their status.",
    image: "social",
    url: "https://github.com/Qyea/Ozi",
  },
  {
    title: "Computer Vision",
    description:
      "A collection of tasks and solutions related to computer vision, showcasing my work in the field.",
    image: "eye",
    url: "https://github.com/Qyea/Computer-vision",
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
