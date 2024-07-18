<script setup lang="ts"></script>

<template>
  <div class="wrapper">
    <div class="side-block">
      <CircleImage
        :image="'./src/assets/images/profile-photo.jpg'"
        size="medium"
      />
      <div class="block">
        <h3>Profile</h3>
        <p>
          I am a student of the Belarusian State University, Faculty of Applied
          Mathematics and Computer Science. In two years of study, I gained
          basic knowledge of both low-level languages, such as assembler, and
          high-level programming languages: C++, Java.
        </p>
      </div>
    </div>
    <div class="main-block">
      <div class="card-header">
        <h1>Anastasia Krech</h1>
      </div>
      <div class="card-info">
        <div class="education">
          <h3 class="block-title">Education</h3>
          <div class="education-list">
            <div><p>Secondary education:</p></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import CircleImage from "./CircleImage.vue";
</script>

<style lang="scss" scoped>
.side-block {
  max-width: 25%;
  padding: 2rem 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #5f8e66;
}

.card-info {
  padding: 1.25rem 0.85rem;
  background-color: #495e63;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #192222;
}

.main-block {
  flex-grow: 1;
}
</style>
