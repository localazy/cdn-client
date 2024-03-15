<script setup lang="ts">
import { sandboxProps } from 'vitepress-plugin-sandpack';
import { version } from '../../../../package.json';
import LocSandpack from './LocSandpack.vue';

const props = defineProps(sandboxProps);
</script>

<template>
  <div class="loc-sandbox">
    <LocSandpack
      :template="template"
      :options="{
        ...props,
        showLineNumbers: true,
        showConsoleButton: false,
        showNavigator: true,
      }"
      :custom-setup="{
        ...props,
        deps: {
          '@localazy/cdn-client': version,
          'i18next': 'latest',
        }
      }"
      :code-options="codeOptions"
    >
      <slot />
    </LocSandpack>
  </div>
</template>

<style scoped>
.loc-sandbox {
  margin: 16px 0;
}
</style>
