<template>
  <PortfolioHeader />
  <SectionBlock title="Profile">
    <BlockLayout :block-data="profileData" />
  </SectionBlock>
  <SectionBlock title="languages">
    <div class="skills-wrapper">
      <SkillCard skill="Russia" level="Native" size="large" color="#5f8e66" />
      <SkillCard skill="English" level="B2" size="large" color="#5f8e66" />
    </div>
  </SectionBlock>
  <SectionBlock title="Hobbies">
    <BlockLayout :block-data="hobbiesData" />
  </SectionBlock>
  <FullCard />
</template>

<script lang="ts" setup>
import PortfolioHeader from "./PortfolioHeader.vue";
import SectionBlock from "./SectionBlock.vue";
import SkillCard from "./SkillCard.vue";
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
</script>

<style lang="scss" scoped>
.skills-wrapper {
  display: flex;
  flex-direction: column;
}
</style>
