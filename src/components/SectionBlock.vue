<template>
  <section :aria-label="props.title" :id="props.title.toLocaleLowerCase()">
    <div class="wrap">
      <div class="items-wrap">
        <div class="items marquee">
          <div
            v-for="_ in props.title.split('').length > 10 ? 5 : 9"
            class="running-title"
          >
            {{ props.title }}
          </div>
        </div>
        <div aria-hidden="true" class="items marquee">
          <div
            v-for="_ in props.title.split('').length > 10 ? 5 : 9"
            class="running-title"
          >
            {{ props.title }}
          </div>
        </div>
      </div>
    </div>
    <div class="block-wrapper">
      <h2 class="title">{{ props.title }}</h2>
      <slot></slot>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{ title: string }>();
</script>

<style scoped>
.wrap {
  margin: auto;
  padding: 20px;
}
.items-wrap {
  position: relative;
  display: flex;
  overflow: hidden;
  user-select: none;
  gap: 20px;
}

.items {
  flex-shrink: 0;
  display: flex;
  gap: 20px;
  justify-content: space-around;
  min-width: 100%;

  font-size: var(--cv-font-size-extra-large);
  font-style: normal;
  font-weight: 700;
  line-height: var(--cv-line-height);
  text-transform: uppercase;

  @media screen and (max-width: 600px) {
    font-size: var(--cv-mobile-font-size-large);
  }
}
.running-title {
  color: transparent;
  -webkit-text-stroke: 1px var(--cv-white);
  transition: all 0.1s ease-in-out;
}

.marquee {
  animation: scroll 30s linear infinite;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - 20px));
  }
}

.block-wrapper {
  margin: 0 40px 40px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
