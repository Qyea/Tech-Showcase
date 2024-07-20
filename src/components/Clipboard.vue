<template>
  <Toast />
  <button class="link" @click="handleCopy(props.copyText)">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { useClipboard } from "@vueuse/core";

import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";

const props = defineProps<{
  copyText: string;
}>();

const { copy, copied } = useClipboard();

const toast = useToast();

const handleCopy = (input: string) => {
  copy(input);
  const message = copied ? "Copied" : "Copy";
  toast.add({
    severity: "success",
    summary: message,
    detail: props.copyText,
    life: 3000,
  });
};
</script>

<style lang="scss" scoped>
button {
  padding: 0;
  font-size: var(--cv-font-size-small);
  background-color: transparent;
  border: none;
}
</style>
