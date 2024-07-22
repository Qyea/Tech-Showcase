<template>
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
</template>

<script lang="ts" setup>
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

<style lang="scss" scoped>
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
