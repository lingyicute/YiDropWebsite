<template>
  <SecondaryLayout :sub-title="t('download.title')">
    <template v-slot:tabs>
      <!-- OS Buttons -->
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

    <template v-slot:content>
      <div style="height: 300px"></div>
    </template>
  </SecondaryLayout>
</template>

<script setup lang="ts">
import SecondaryLayout from "~/components/layout/SecondaryLayout.vue";

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

const assetsMap: Ref<{ [key: string]: string }> = ref({});
const fallbackUrl = "https://github.com/lingyicute/yidrop/releases/latest";

function handleDownload(os: OS) {
  if (os === OS.linux) {
    window.location.href = fallbackUrl;
    return;
  }

  const fileExtension = os === OS.windows ? 'exe' : 'apk';
  const downloadUrl = assetsMap.value[fileExtension] ?? fallbackUrl;
  window.location.href = downloadUrl;
}

onMounted(async () => {
  const assetsMetadata = await requestGithubAssets();
  assetsMap.value = assetsMetadata.reduce<{ [key: string]: string }>(
    (acc, asset) => {
      const key = asset.name.split(".").pop();
      if (!key) {
        return acc;
      }

      if (key === "apk" && !asset.name.includes("arm64v8")) {
        return acc;
      }

      acc[key] = asset.browser_download_url;
      return acc;
    },
    {}
  );
});
</script>
