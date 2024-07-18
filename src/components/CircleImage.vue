<template>
  <img
    class="image-circle"
    :style="componentStyle"
    v-bind:src="props.image"
    :alt="altText"
  />
</template>

<script lang="ts" setup>
import { ref } from "vue";
enum Layouts {
  Default = "default",
  Small = "small",
  Medium = "medium",
  Large = "large",
}

const props = defineProps<{
  image: string;
  size?: Layouts;
}>();

const pathSections = props.image.split("/");
const altText = pathSections[pathSections.length - 1];

const sizeStyles = {
  default: {
    width: "var(--cv-component-size)",
    height: "var(--cv-component-size)",
  },
  small: {
    width: "var(--cv-component-size-small)",
    height: "var(--cv-component-size-small)",
  },
  medium: {
    width: "var(--cv-component-size-medium)",
    height: "var(--cv-component-size-medium)",
  },
  large: {
    width: "var(--cv-component-size-large)",
    height: "var(--cv-component-size-large)",
  },
};

const componentStyle = ref(sizeStyles[props.size || Layouts.Default]);
</script>

<style lang="scss" scoped>
.image-circle {
  position: relative;
  object-fit: cover;

  width: var(--cv-component-size);
  height: var(--cv-component-size);
  outline-offset: -0.5rem;
  outline: 0.5rem solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;

  @media screen and (max-width: 600px) {
    display: none;
  }
}
</style>
