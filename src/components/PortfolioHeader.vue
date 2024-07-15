<template>
  <div class="wrapper_header">
    <header class="header">
      <div class="header-items">
        <router-link to="/" class="logo">Programmer</router-link>
        <Navigation />
      </div>
    </header>
    <section class="hero">
      <div class="hero-wrapper">
        <div class="name">{{ componentData.name }}</div>
        <h1 class="about">{{ componentData.greetings }}</h1>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import Navigation from "./Navigation.vue";

const componentData = {
  name: "Anastasia Krech",
  greetings: "Allow me to introduce myself",
};
</script>

<style lang="scss" scoped>
.wrapper_header {
  position: relative;
  padding: 0.75rem 2.5rem;
  border-bottom: var(--cv-white) solid 1px;

  background: url(./../assets/images/beautiful.gif);
  background-size: cover;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.header-items {
  display: flex;
  padding: 0.5rem 1rem;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--cv-white);
}

.logo {
  color: var(--cv-white);
  text-decoration: none;
  font-size: var(--cv-font-size-ms);
  @media screen and (max-width: 600px) {
    font-size: var(--cv-mobile-font-size-ms);
  }
}

.about {
  font-size: var(--cv-font-size-large);
  font-family: Gruppo;
  text-align: center;

  @media screen and (max-width: 600px) {
    font-size: var(--cv-mobile-font-size-large);
  }
}
</style>
