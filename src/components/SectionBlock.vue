<template>
  <section
    :aria-label="blockData[0].title"
    :id="blockData[0].title.toLocaleLowerCase()"
  >
    <div class="wrap">
      <div class="items-wrap">
        <div class="items marquee">
          <div
            v-for="_ in blockData[0].title.split('').length > 10 ? 5 : 9"
            class="running-title"
          >
            {{ blockData[0].title }}
          </div>
        </div>
        <div aria-hidden="true" class="items marquee">
          <div
            v-for="_ in blockData[0].title.split('').length > 10 ? 5 : 9"
            class="running-title"
          >
            {{ blockData[0].title }}
          </div>
        </div>
      </div>
    </div>
    <div class="block-wrapper">
      <h2 class="title">{{ blockData[0].title }}</h2>
      <div v-for="info in blockData" :key="info.title">
        <TextBlock v-if="info.type === 'image'" :left="info.side === 'left'">
          <template #text>{{ info.text }}</template>
          <template v-if="info.side !== 'left'" #right>
            <CircleImage :image="info.url ? info.url : ''" />
          </template>
          <template v-else #left>
            <CircleImage :image="info.url ? info.url : ''" />
          </template>
        </TextBlock>
        <TextBlock v-else :left="info.side === 'left'">
          <template v-if="info.side !== 'left'" #right>
            <div class="languages">
              <div class="centered-text">
                {{ info.tableTitle }}
              </div>
              <ul class="list">
                <li v-for="item in info.tableData" :key="item">{{ item }}</li>
              </ul>
            </div>
          </template>
          <template v-else #left>
            <div class="languages">
              <div class="centered-text">
                {{ info.tableTitle }}
              </div>
              <ul class="list">
                <li v-for="item in info.tableData" :key="item">{{ item }}</li>
              </ul>
            </div>
          </template>
          <template #text>
            {{ info.text }}
          </template>
        </TextBlock>
      </div>
    </div>
  </section>
  <slot name="text"></slot>
</template>

<script setup lang="ts">
import TextBlock from "./TextBlock.vue";
import CircleImage from "./CircleImage.vue";

export interface Block {
  title: string;
  text: string;
  type: string;
  side?: string;
  url?: string;
  tableTitle?: string;
  tableData?: string[];
}

defineProps<{ blockData: Block[] }>();
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

  font-size: var(--cv-font-size-large);
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

.languages {
  width: 80%;
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
