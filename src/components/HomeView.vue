<template>
  <PortfolioHeader />
  <SectionBlock :block-data="profileData" />
  <SectionBlock :block-data="skillsData" />
  <FullCard />
</template>

<script lang="ts" setup>
import PortfolioHeader from "./PortfolioHeader.vue";
import SectionBlock from "./SectionBlock.vue";
import FullCard from "./FullCard.vue";

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
const skillsData = [
  {
    title: "Skills",
    text: "I am a student of the Belarusian State University, Faculty of Applied Mathematics and Computer Science. In three years of study, I gained basic knowledge of both low-level languages, such as assembler, and high-level programming languages: C++, Java.",
    type: "image",
    side: "left",
    url: "./src/assets/images/Epic.svg",
  },
  {
    title: "Skills",
    text: "I am a student of the Belarusian State University, Faculty of Applied Mathematics and Computer Science. In three years of study, I gained basic knowledge of both low-level languages, such as assembler, and high-level programming languages: C++, Java.",
    type: "image",
    side: "right",
    url: "./src/assets/images/Epic.svg",
  },
];
</script>
