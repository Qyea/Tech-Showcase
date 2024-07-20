<template>
  <div class="wrapper">
    <div class="side-block">
      <CircleImage
        :image="'./src/assets/images/profile-photo.jpg'"
        size="medium"
      />
      <div class="block">
        <h3 class="block-title">Profile</h3>
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
            During my EPIC studies, I was interviewed and got the opportunity to
            do an internship. As part of this internship, I participated in the
            development of a learning platform using the Vue framework with
            TypeScript. In six months of working on this real project, I have
            gained not only valuable development experience, but also learned
            how to work in a team
          </p>
        </div>
        <div class="card">
          <h3 class="block-title">Contacts</h3>
          <Navigation :data="CardLinks" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navigation from "./Navigation.vue";
import CircleImage from "./CircleImage.vue";

const CardLinks = [
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
  padding-right: 4rem;
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

.education-list {
  padding: 1rem 0;
}

.list-item {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.text {
  padding: 1rem 0;
}
</style>
