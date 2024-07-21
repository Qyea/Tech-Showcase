<template>
  <div class="info-block">
    <div v-if="!props.left">
      <slot name="right"></slot>
    </div>
    <div class="block-text"><slot name="text"> </slot></div>
    <div v-if="props.left">
      <slot name="left"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  left?: boolean;
}>();
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
</style>
