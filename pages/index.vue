<template>
  <div>
    <div class="flex min-h-screen items-center justify-center pt-12 md:pt-0">
      <div style="max-width: 1800px" class="grid grid-cols-12">
        <!-- Logo and text -->
        <div
          class="col-span-12 grid grid-cols-12 pb-12 sm:col-span-12 md:col-span-8 md:pb-0 lg:col-span-7"
        >
          <div
            class="col-span-12 mt-0 flex items-center justify-center md:col-span-4 md:justify-end lg:mt-2"
          >
            <img
              id="logo"
              src="~/assets/img/logo-512.png"
              alt="YiDrop Logo"
              class="h-52 object-contain md:h-40 lg:h-40 xl:h-48 2xl:h-56"
            />
          </div>

          <div
            class="col-span-12 flex items-center justify-center md:col-span-8 md:justify-start lg:pl-2"
          >
            <div>
              <h1
                class="text-center text-5xl font-black dark:text-white sm:text-5xl md:text-start xl:text-7xl 2xl:text-8xl"
              >
                YiDrop
              </h1>
              <h2
                class="slogan mt-2 px-4 text-center text-xl font-light dark:text-gray-300 md:px-0 md:text-start md:text-xl xl:text-2xl 2xl:text-3xl"
              >
                {{ t("home.slogan1") }}
              </h2>
              <h2
                class="slogan px-4 text-center text-xl font-light dark:text-gray-300 md:px-0 md:text-start md:text-xl xl:text-2xl 2xl:text-3xl"
              >
                {{ t("home.slogan2") }}
              </h2>

              <div
                class="buttons mt-4 flex flex-wrap justify-center gap-4 px-4 md:justify-start md:px-0 xl:mt-6"
              >
                <NuxtLink :to="localePath({ path: '/download' })">
                  <AppButton
                    icon="material-symbols:arrow-downward"
                    :dark="true"
                  >
                    {{ t("home.download") }}
                  </AppButton>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Screenshots -->
        <div
          class="col-span-12 grid grid-cols-3 gap-8 px-8 sm:col-span-12 md:col-span-4 lg:col-span-5"
        >
          <div
            class="col-span-3 flex items-center justify-center md:col-span-1"
          >
            <img
              src="/img/screenshot-iphone.webp"
              alt="iPhone Screenshot"
              class="h-96 object-contain"
            />
          </div>
          <div
            class="col-span-3 flex items-center justify-center md:col-span-2"
          >
            <img
              src="/img/screenshot-pc.webp"
              alt="PC Screenshot"
              class="h-96 object-contain"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- End of hero section -->

    <div
      class="m-auto mt-4 flex max-w-screen-lg flex-col items-center px-4 lg:px-12"
    >
      <h2 class="text-3xl font-bold dark:text-white">
        {{ t("home.features.title") }}
      </h2>
      <div
        class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-12"
      >
        <FeatureCard
          :title="t('home.features.decentralized')"
          :description="t('home.features.decentralizedDescription')"
          icon="material-symbols:share"
        />
        <FeatureCard
          :title="t('home.features.crossPlatform')"
          :description="t('home.features.crossPlatformDescription')"
          icon="material-symbols:devices"
        />
        <FeatureCard
          :title="t('home.features.free')"
          :description="t('home.features.freeDescription')"
          icon="material-symbols:volunteer-activism"
        />
        <FeatureCard
          :title="t('home.features.openSource')"
          :description="t('home.features.openSourceDescription')"
          icon="material-symbols:code"
        />
        <FeatureCard
          :title="t('home.features.secure')"
          :description="t('home.features.secureDescription')"
          icon="material-symbols:lock"
        />
        <FeatureCard
          :title="t('home.features.easy')"
          :description="t('home.features.easyDescription')"
          icon="material-symbols:gesture"
        />
      </div>

      <h2 class="mt-24 text-center text-3xl font-bold dark:text-white">
        {{ t("home.get") }}
      </h2>
      <div class="mb-36 mt-8 flex items-center justify-center gap-4">
        <NuxtLink :to="localePath({ path: '/download' })">
          <AppButton icon="material-symbols:download" :dark="true">
            {{ t("home.download") }}
          </AppButton>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "home.seo.title",
  description: "home.seo.description",
});

const { t, locale } = useI18n();
const localePath = useLocalePath();

onMounted(() => {
  // legacy redirects (remove after next store update)
  if (window.location.hash === "#/privacy") {
    navigateTo("/privacy");
  }

  if (window.location.hash === "#/terms-of-service") {
    navigateTo("/terms");
  }

  if (window.location.hash === "#/contact") {
    navigateTo("/contact");
  }
});


</script>

<style scoped>
#logo {
  animation: rotating 40s linear infinite;
}

.slogan {
  opacity: 0;
  animation: fadeIn 0.2s 0.3s forwards ease-out;
}

.buttons {
  opacity: 0;
  animation: fadeIn 0.2s 0.5s forwards ease-out;
}

@keyframes rotating {
  from {
    rotate: 0deg;
  }

  to {
    rotate: 360deg;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
  }
}
</style>
