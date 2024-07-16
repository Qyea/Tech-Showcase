<template>
  <div class="info-block">
    <div v-if="props.table" class="languages">
      <slot name="table"></slot>
    </div>
    <div class="block-text"><slot name="text"> </slot></div>
    <div v-if="props.image">
      <img class="image-circle" v-bind:src="props.image" alt="profile-photo" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  image?: string;
  table?: boolean;
}>();

console.log(props.image);
</script>

<style lang="scss" scoped>
.info-block {
  display: flex;
  justify-content: center;
  gap: 3.5rem;
  align-items: center;

  margin-bottom: 2rem;
}

.block-text {
  width: 55%;
  word-wrap: break-word;
  text-align: justify;
  line-height: 120%;
}

.image-circle {
  position: relative;
  object-fit: cover;

  width: var(--cv-component-size);
  height: var(--cv-component-size);
  //   border: 0.5rem solid var(--cv-translucent-white);
  outline-offset: -0.5rem;
  outline: 0.5rem solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;

  @media screen and (max-width: 600px) {
    display: none;
  }
}

.languages {
  width: 20%;
  padding: 1.5rem 1.25rem 0;

  display: flex;
  flex-direction: column;

  font-size: var(--cv-font-size-ms);
  font-style: italic;
  text-align: center;

  border: 0.2rem solid var(--cv-translucent-white);

  @media screen and (max-width: 600px) {
    padding: 0;
    font-size: var(--cv-mobile-font-size-ms);
  }
}
</style>
