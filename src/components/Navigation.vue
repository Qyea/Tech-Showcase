<template>
  <nav>
    <ul class="navigation">
      <li v-for="item in tempData">
        <router-link class="link" to="/">{{ item }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
// const props = defineProps<{
//   data: string[];
// }>();

const tempData = [
  "Profile",
  "Skills",
  "Education",
  "Languages",
  "Projects",
  "Hobbies",
  "Contacts",
];
</script>

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
