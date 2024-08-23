<template>
  <div class="top-cards">
    <article v-for="project in props.projectData" class="top-card">
      <div class="top-card-pic">
        <img
          class="top__card-thumb"
          :src="`./assets/images/${project.image}.svg`"
          alt="Travel-page"
        />
        <div class="top-card-stats">
          <h3 class="top-card-title">{{ project.title }}</h3>
        </div>
      </div>
      <p class="top-card-desc">{{ project.description }}</p>
      <a class="top-card-more" :href="project.url" target="_blank">
        READ MORE
      </a>
    </article>
  </div>
</template>

<script lang="ts" setup>
export interface Project {
  title: string;
  description: string;
  image: string;
  url: string;
}

const props = defineProps<{
  projectData: Project[];
}>();
</script>

<style lang="scss" scoped>
img {
  min-width: 35vh;
  @media screen and (max-width: 1200px) {
    min-width: 20vh;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
}

.projects-wrapper {
  display: flex;
  gap: 1.25rem;
}

.project-header {
  display: block;
}

.project-title {
  display: flex;
  align-items: center;
}

.project-image {
  display: flex;
  align-items: stretch;
}

.top {
  margin-bottom: 5.25rem;
}

.top-title {
  margin-bottom: 3.25rem;
}

.top-card {
  display: flex;
  flex-direction: column;
  grid-column: span 2;
  padding: 1rem;
  background: var(--cv-primary-bg);
}

.top-cards {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 3.5rem;
  grid-row-gap: 3.5rem;

  @media screen and (max-width: 600px) {
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
}

.top-card-pic {
  position: relative;
  margin-bottom: 45px;
  width: 100%;
  display: flex;
  align-self: center;
  justify-content: center;

  background-color: var(--cv-blue);

  @media screen and (max-width: 600px) {
    display: none;
  }
}

.card-stat-wrapper {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.top-card-stats {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  position: absolute;

  box-sizing: border-box;
  bottom: 0;
  left: 0;
  width: 100%;
  background: var(--cv-translucent-black);
  padding: 1rem;

  @media screen and (max-width: 800px) {
    display: none;
  }
}

.top-card-title {
  margin: 0 auto 0 0;
}

.top-card-desc {
  margin-bottom: 2rem;
  font-size: var(--cv-font-size-small);

  @media screen and (max-width: 600px) {
    font-size: var(--cv-mobile-font-size-regular);
  }
}

.top-card-more {
  padding: 0.75rem 1rem;
  color: var(--cv-white);
  background-color: var(--cv-primary);
  transition: background-color 0.3s ease;

  text-decoration: none;
  text-align: center;
  margin: auto 0 0 0;
}

.top-card-more:hover,
.top-card-more:focus,
.top-card-more:active {
  background-color: var(--cv-secondary);
}
</style>
