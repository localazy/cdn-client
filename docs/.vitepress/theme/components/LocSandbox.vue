<script setup lang="ts">
import { Sandbox, sandboxProps } from 'vitepress-plugin-sandpack';

const props = defineProps(sandboxProps);
</script>

<template>
  <Sandbox
    :rtl="rtl"
    :template="template"
    :light-theme="lightTheme"
    :dark-theme="darkTheme"
    :options="{
      ...props,
      showLineNumbers: true,
      // showConsoleButton: false,
      showNavigator: true,
    }"
    :custom-setup="{
      ...props,
      deps: {
        '@localazy/cdn-client': 'latest',
        'vue3-toastify': 'latest'
      }
    }"
    :code-options="codeOptions"
  >
    <slot />
  </Sandbox>
</template>
