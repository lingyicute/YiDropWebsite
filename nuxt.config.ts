// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/icon",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@nuxtjs/sitemap",
  ],

  devtools: { enabled: true },

  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
    head: {
      link: [
        {
          rel: "icon",
          href: "/favicon.ico",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
      ],
    },
  },

  site: {
    url: "https://drop.92li.us.kg",
  },

  i18n: {
    baseUrl: "https://drop.92li.us.kg",
    strategy: "prefix_except_default",
    defaultLocale: "en",
    pages: {
      privacy: false,
      terms: false,
      imprint: false,
      contact: false,
      news: false,
    },
    locales: [
      {
        code: "en",
        language: "en-US",
        file: "en.json",
        name: "English",
        isCatchallLocale: true,
      },
      {
        code: "zh-CN",
        language: "zh-CN",
        file: "zh-CN.json",
        name: "简体中文",
      },
    ],
  },

  nitro: {
    prerender: {
      autoSubfolderIndex: false,
    },
  },

  compatibilityDate: "2024-10-20",
});
