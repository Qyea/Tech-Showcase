<template>
  <section
    :aria-label="blockData.title"
    :id="blockData.title.toLocaleLowerCase()"
  >
    <div class="wrap">
      <div class="items-wrap">
        <div class="items marquee">
          <div class="running-title">{{ blockData.title }}</div>
          <div class="running-title">{{ blockData.title }}</div>
          <div class="running-title">{{ blockData.title }}</div>
          <div class="running-title">{{ blockData.title }}</div>
          <div class="running-title">{{ blockData.title }}</div>
          <div class="running-title">{{ blockData.title }}</div>
          <div class="running-title">{{ blockData.title }}</div>
          <div class="running-title">{{ blockData.title }}</div>
          <div class="running-title">{{ blockData.title }}</div>
        </div>
        <div aria-hidden="true" class="items marquee">
          <div class="running-title">{{ blockData.title }}</div>
          <div class="running-title">{{ blockData.title }}</div>
          <div class="running-title">{{ blockData.title }}</div>
          <div class="running-title">{{ blockData.title }}</div>
          <div class="running-title">{{ blockData.title }}</div>
          <div class="running-title">{{ blockData.title }}</div>
          <div class="running-title">{{ blockData.title }}</div>
          <div class="running-title">{{ blockData.title }}</div>
          <div class="running-title">{{ blockData.title }}</div>
        </div>
      </div>
    </div>
    <div class="block-wrapper">
      <h2 class="title">{{ blockData.title }}</h2>
      <div class="info-block">
        <div class="block-text">
          I am a student of the Belarusian State University, Faculty of Applied
          Mathematics and Computer Science. In three years of study, I gained
          basic knowledge of both low-level languages, such as assembler, and
          high-level programming languages: C++, Java.
        </div>
        <img
          class="image-circle"
          src="./assets/profile-photo.jpg"
          alt="profile-photo"
        />
      </div>
      <div class="info-block">
        <div class="languages">
          <div class="centered-text">I worked with the following languages</div>
          <ul class="list">
            <li>JavaScript</li>
            <li>C++</li>
            <li>Java</li>
            <li>Python</li>
            <li>SQL</li>
          </ul>
        </div>
        <div class="block-text">
          My experience includes writing client-server applications, desktop
          applications, which included working with databases and creating user
          interfaces. I also have experience in solving basic algorithmic
          problems.
        </div>
      </div>
    </div>
  </section>
  <v-slot></v-slot>
</template>

<script setup lang="ts">
import { ref } from "vue";

//defineProps<{ msg: string }>();

const blockData = {
  title: "Profile",
  text: ` I am a student of the Belarusian State University, Faculty of Applied
          Mathematics and Computer Science. In three years of study, I gained
          basic knowledge of both low-level languages, such as assembler, and
          high-level programming languages: C++, Java.`,
};

const count = ref(0);
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
</style>
