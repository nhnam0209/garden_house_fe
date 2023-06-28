<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :height="props.height"
    :width="props.width"
    :color="props.color"
  >
    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
  </svg>
</template>

<script setup lang="ts">
export interface Props {
  width?: string;
  height?: string;
  color?: string;
}
const props = withDefaults(defineProps<Props>(), {
  width: "20px",
  height: "20px",
  color: "black",
});
</script>
