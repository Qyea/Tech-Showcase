<template>
  <section
    :aria-label="blockData.title"
    :id="blockData.title.toLocaleLowerCase()"
  >
    <div class="wrap">
      <div class="items-wrap">
        <div class="items marquee">
          <div
            v-for="_ in blockData.title.split('').length > 10 ? 5 : 9"
            class="running-title"
          >
            {{ blockData.title }}
          </div>
        </div>
        <div aria-hidden="true" class="items marquee">
          <div
            v-for="_ in blockData.title.split('').length > 10 ? 5 : 9"
            class="running-title"
          >
            {{ blockData.title }}
          </div>
        </div>
      </div>
    </div>
    <div class="block-wrapper">
      <h2 class="title">{{ blockData.title }}</h2>
      <TextBlock :left="true">
        <template #text>
          I am a student of the Belarusian State University, Faculty of Applied
          Mathematics and Computer Science. In three years of study, I gained
          basic knowledge of both low-level languages, such as assembler, and
          high-level programming languages: C++, Java.
        </template>
        <template #left>
          <CircleImage :image="'./src/assets/images/profile-photo.jpg'" />
        </template>
      </TextBlock>
      <TextBlock :table="true">
        <template #table>
          <div class="centered-text">I worked with the following languages</div>
          <ul class="list">
            <li>JavaScript</li>
            <li>C++</li>
            <li>Java</li>
            <li>Python</li>
            <li>SQL</li>
          </ul>
        </template>
        <template #text>
          My experience includes writing client-server applications, desktop
          applications, which included working with databases and creating user
          interfaces. I also have experience in solving basic algorithmic
          problems.
        </template>
      </TextBlock>
    </div>
  </section>
  <slot name="text"></slot>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TextBlock from "./TextBlock.vue";
import CircleImage from "./CircleImage.vue";
//defineProps<{ msg: string }>();

const blockData = {
  title: "Profile",
  text: ` I am a student of the Belarusian State University, Faculty of Applied
          Mathematics and Computer Science. In three years of study, I gained
          basic knowledge of both low-level languages, such as assembler, and
          high-level programming languages: C++, Java.`,
};
</script>

<style scoped>
.wrap {
  margin: auto;
  padding: 20px;
}
.items-wrap {
  position: relative;
  display: flex;
  overflow: hidden;
  user-select: none;
  gap: 20px;
}

.items {
  flex-shrink: 0;
  display: flex;
  gap: 20px;
  justify-content: space-around;
  min-width: 100%;

  font-size: var(--cv-font-size-large);
  font-style: normal;
  font-weight: 700;
  line-height: var(--cv-line-height);
  text-transform: uppercase;

  @media screen and (max-width: 600px) {
    font-size: var(--cv-mobile-font-size-large);
  }
}
.running-title {
  color: transparent;
  -webkit-text-stroke: 1px var(--cv-white);
  transition: all 0.1s ease-in-out;
}

.marquee {
  animation: scroll 30s linear infinite;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - 20px));
  }
}

.block-wrapper {
  margin: 0 40px 40px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
