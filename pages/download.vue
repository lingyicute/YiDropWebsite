<template>
  <!-- 模板部分保持不变 -->
  <SecondaryLayoutX :sub-title="t('download.title')">
    <template v-slot:tabs>
      <div class="mt-8 flex flex-wrap justify-center dark:text-gray-300">
        <AppButton
          v-for="os in OS"
          :key="os"
          class="mx-2 mb-4"
          @click="handleDownload(os)"
          :dark="false"
        >
          {{ os }}
        </AppButton>
      </div>
    </template>
  </SecondaryLayoutX>
</template>

<script setup lang="ts">
import SecondaryLayoutX from "~/components/layout/SecondaryLayoutX.vue";

definePageMeta({
  title: "download.seo.title",
  description: "download.seo.description",
});

const { t } = useI18n();

enum OS {
  windows = "Windows",
  linux = "Linux",
  android = "Android",
}

const WINDOWS_URL = "https://github.com/lingyicute/yidrop/releases/latest/download/YiDrop.exe";
const ANDROID_URL = "https://github.com/lingyicute/yidrop/releases/latest/download/YiDrop_arm64.apk";
const FALLBACK_URL = "https://github.com/lingyicute/yidrop/releases/latest";

function handleDownload(os: OS) {
  switch (os) {
    case OS.windows:
      window.location.href = WINDOWS_URL;
      break;
    case OS.android:
      window.location.href = ANDROID_URL;
      break;
    case OS.linux:
    default:
      window.location.href = FALLBACK_URL;
  }
}

</script>