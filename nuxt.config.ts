// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  app: {
    rootTag: "main",
    layoutTransition: { name: "page", mode: "out-in" },
    head: {
      title: "Garden House",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "Nuxt3" },
        { name: "format-detection", content: "telephone=no" },
      ],
      noscript: [
        // <noscript>JavaScript is required</noscript>
        { children: "JavaScript is required" },
      ],
      script: [{ src: "https://unpkg.com/vue-screen/dist/vue-screen.min.js" }],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  components: {
    global: true,
    path: "~/components/",
    pathPrefix: false,
  },
  css: ["@/assets/css/main.css"],

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@nuxt/image",
    "@morev/vue-transitions/nuxt",
    "@ant-design-vue/nuxt",
    "nuxt-snackbar",
    "@nuxtjs/device",
    "@storyblok/nuxt",
  ],

  storyblok: {
    accessToken: "mWMIcshnujjBdLgKGdXAmQtt",
  },

  device: {
    refreshOnResize: true,
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  dirs: ["~/components/"],
});
