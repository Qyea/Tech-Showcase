<template>
  <nav>
    <ul class="navigation list">
      <li class="align" v-for="item in props.data">
        <Clipboard v-if="item.type === 'clipboard'" :copy-text="item.title">
          <i v-if="item.icon" :class="showIcon(item.icon ? item.icon : '')"></i>
          {{ item.title }}
        </Clipboard>

        <a v-else class="link" :href="item.src" target="_blank">
          <i v-if="item.icon" :class="showIcon(item.icon ? item.icon : '')"></i>
          {{ item.title }}</a
        >
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import Clipboard from "./Clipboard.vue";

export interface linkData {
  title: string;
  src?: string;
  icon?: string;
  type?: string;
}

const props = defineProps<{
  data: linkData[];
}>();

const showIcon = (item: string) => {
  return `pi pi-${item}`;
};
</script>

<style lang="scss" scoped>
.align {
  display: flex;
  align-items: center;
}
</style>
