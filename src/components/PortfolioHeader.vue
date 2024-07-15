<template>
  <nav>
    <ul class="navigation">
      <li>
        <router-link class="link" to="/profile">About</router-link>
      </li>
      <li>
        <router-link class="link" to="/skills">Skills</router-link>
      </li>
      <li>
        <router-link class="link" to="/projects">Projects</router-link>
      </li>
      <li>
        <router-link class="link" to="/contact">Contacts</router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  list-style-type: none;
  font-size: var(--cv-font-size-small);
  font-family: Inter;

  @media screen and (max-width: 600px) {
    display: none;
  }
}

.link {
  text-decoration: none;
  color: var(--cv-white);

  margin-right: 2rem;
}

.link:focus,
.link:hover {
  cursor: pointer;
  opacity: 0.6;
}
</style>
