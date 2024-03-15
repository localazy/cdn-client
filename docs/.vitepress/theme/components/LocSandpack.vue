<script setup lang="ts">
import {
  SandpackProvider,
  SandpackPreview,
  SandpackCodeEditor,
  SandpackLayout,
  type SandpackFiles
} from 'sandpack-vue3';
import { githubLight } from '@codesandbox/sandpack-themes';
import { getCustomSetupFromProps, getSandpackFiles, getSandpackOptions, sandboxProps } from 'vitepress-plugin-sandpack';
import { computed, nextTick, onBeforeMount, onMounted, PropType, ref, toRaw, useSlots, watch } from 'vue';

const props = defineProps(sandboxProps);

const slots = useSlots();

/* files */

const files = ref<SandpackFiles>({});

const resolveFiles = async () => {
  files.value = await getSandpackFiles(props, slots);
};

watch(props, resolveFiles);

onBeforeMount(resolveFiles);

/* theme */

const isDark = ref(true);

const docsTheme = computed(() => isDark.value ? 'dark' : githubLight);

const detectHtmlDarkMode = () => {
  if (typeof document !== 'undefined' && document.documentElement) {
    isDark.value = document.documentElement.classList.contains('dark');
  }
};

onMounted(() => {
  nextTick(() => {
    if (typeof document !== 'undefined' && document.documentElement) {
      const mb = new MutationObserver((mutations) => {
        const dom = mutations[0].target as HTMLElement;
        if (dom) detectHtmlDarkMode();
      });

      mb.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class']
      });
    }

    detectHtmlDarkMode();
  });
});

/* height */

const getOpt = (propName: string) => props[propName] ?? (props?.options || {})?.[propName];
const previewHeight = computed(() => isNaN(Number(getOpt('previewHeight'))) ? undefined : Number(getOpt('previewHeight')));
const previewHeightStyle = computed(() => previewHeight.value ? `${previewHeight.value}px` : 'var(--sp-layout-height)');
const coderHeight = computed(() => isNaN(Number(getOpt('coderHeight'))) ? undefined : Number(getOpt('coderHeight')));
const coderHeightStyle = computed(() => coderHeight.value ? `${coderHeight.value}px` : 'var(--sp-layout-height)');

/* options */

const options = computed(() => {
  return getSandpackOptions(props);
});

const customSetup = computed(() => {
  return getCustomSetupFromProps(props);
});

</script>

<template>
  <SandpackProvider
    :theme="docsTheme"
    :template="template"
    :files="files"
    :options="options"
    :custom-setup="customSetup"
  >
    <SandpackLayout>
      <SandpackCodeEditor showLineNumbers initMode="user-visible" />
    </SandpackLayout>
    <br />
    <SandpackLayout>
      <SandpackPreview showNavigator :showRestartButton="false" />
    </SandpackLayout>
  </SandpackProvider>
</template>

<style>
.sp-layout > .sp-stack.sp-editor {
  height: v-bind(coderHeightStyle);
}

.sp-layout > .sp-stack.sp-preview {
  height: v-bind(previewHeightStyle);
}

.sp-bridge-frame {
  display: none;
}
</style>
