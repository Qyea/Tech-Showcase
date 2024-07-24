<template>
  <div class="top-cards">
    <article class="top-card">
      <div class="top-card-pic">
        <img
          class="top-card-thumb"
          src="./../assets/images/social.svg"
          alt="Ozi-logo"
          width="400"
        />
        <div class="top-card-stats">
          <h3 class="top-card-title">Ozi: Social media</h3>
        </div>
      </div>
      <p class="top-card-desc">
        This project was my first attempt at a full stack. Its development took
        about 4 months. You can also add friends, write messages, post your
        posts and leave your status in it.
      </p>
      <a class="top-card-more" href="./pages/project_1.html" target="_blank"
        >READ MORE</a
      >
    </article>

    <article class="top-card">
      <div class="top-card-pic">
        <img
          class="top-card-thumb"
          src="./../assets/images/eye.svg"
          alt="Computer-vision"
          width="400"
        />
        <div class="top-card-stats">
          <h3 class="top-card-title">Computer Vision</h3>
        </div>
      </div>
      <p class="top-card-desc">
        So that all the work is not wasted, here I will leave the tasks and
        their solutions for computer vision.
      </p>
      <a class="top-card-more" href="./pages/project_2.html" target="_blank"
        >READ MORE</a
      >
    </article>

    <article class="top-card">
      <div class="top-card-pic">
        <img
          class="top__card-thumb"
          src="./../assets/images/toolbox.svg"
          alt="Travel-page"
          width="400"
        />
        <div class="top-card-stats">
          <h3 class="top-card-title">Travel Page</h3>
        </div>
      </div>
      <p class="top-card-desc">
        My path in the frontend began with this layout based on a YouTube video.
        Although looking at its code, I understand how clumsily it is made, but
        I am grateful for this experience.
      </p>
      <a class="top-card-more" href="./pages/project_3.html" target="_blank"
        >READ MORE</a
      >
    </article>
  </div>
</template>

<style lang="scss" scoped>
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
}

.top-card-title {
  margin: 0 auto 0 0;
}

.top-card-likes {
  font-size: var(--cv-font-size-small);
  padding-left: 24px;
  background: url(./assets/icons/like-icon.svg) no-repeat left;
  background-size: var(--cv-font-size-small);
}

.top-card-comments {
  font-size: var(--cv-font-size-small);
  padding-left: 24px;
  background: url(./assets/icons/comment-icon.svg) no-repeat left;
  background-size: var(--cv-font-size-small);
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
