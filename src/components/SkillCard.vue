<template>
  <div class="card" :style="componentStyle">
    <div>{{ props.skill }}</div>
    <div class="level">{{ props.level }}</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

enum Layouts {
  default = "default",
  small = "small",
  medium = "medium",
  large = "large",
}

const props = defineProps<{
  skill: string;
  level: string;
  size?: keyof typeof Layouts;
}>();

const sizeStyles = {
  default: {
    padding: "var(--cv-padding) var(--cv-padding-large)",
    fontSize: "var(--cv-font-size-regular)",
  },
  small: {
    padding: "var(--cv-padding-small) var(--cv-padding-medium)",
    fontSize: "var(--cv-font-size-small)",
  },
  medium: {
    padding: "var(--cv-padding-medium) var(--cv-padding)",
    fontSize: "var(--cv-font-size-medium)",
  },
  large: {
    padding: "var( --cv-padding-large) var(--cv-padding-extra-large)",
    fontSize: "var(--cv-font-size-large)",
  },
};

const componentStyle = ref(sizeStyles[props.size || Layouts.default]);
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  border: 1px solid var(--cv-white);
  border-radius: 0.625rem;

  margin: 0.5rem 0;
  background-color: rgba($color: #d9d9d9, $alpha: 0.35);
}

.level {
  color: var(--cv-secondary-bg);
}
</style>
