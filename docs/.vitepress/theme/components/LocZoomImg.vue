<script setup>
import { withBase } from 'vitepress';
import { onMounted, ref } from 'vue';
import mediumZoom from 'medium-zoom';

defineProps({
  src: String,
  alt: {
    type: String,
    default: '',
  },
});

const imgRef = ref(null);

onMounted(() => {
  mediumZoom(imgRef.value, { background: 'var(--vp-c-bg)' });
});
</script>

<template>
  <img ref="imgRef" :src="withBase(src)" :alt="alt" />
</template>

<style>
.medium-zoom-overlay {
  z-index: 70;
  cursor: pointer !important;
}

.medium-zoom-image {
  z-index: 71;
  cursor: pointer !important;
}
</style>
