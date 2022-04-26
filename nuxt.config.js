export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Galih Sukristyan Saputra",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, user-scalable=no",
      },
      {
        hid: "description",
        name: "description",
        content:
          "Galih Sukristyan Saputra is a professional backend web developer who has 5+ years of experience and currently studying Software Engineering at SMK Telkom Banjarbaru.",
      },
      {
        hid: "author",
        name: "author",
        content: "Galih Sukristyan Saputra",
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "Galih Sukristyan Saputra, galih sukristyan s, galih kalsel, galih smktelkom, galih telkom, galih skatel, pacarnya dania, galih saputra, galih lks, galih banjarbaru, galih juara lks kalsel web tech 2021",
      },
      {
        name: "twitter:creator",
        content: "@galihsptr320"
      },
      {
        name: "twitter:description",
        content: "Galih Sukristyan Saputra is a professional backend web developer who has 5+ years of experience and currently studying Software Engineering at SMK Telkom Banjarbaru."
      },
      {
        name: "twitter:site",
        content: "@galihsptr320"
      },
      {
        name: "twitter:title",
        content: "Galih Sukristyan Saputra"
      },
      {
        name: "og:description",
        content: "Galih Sukristyan Saputra is a professional backend web developer who has 5+ years of experience and currently studying Software Engineering at SMK Telkom Banjarbaru."
      },
      {
        name: "og:site_name",
        content: "Galih Sukristyan Saputra"
      },
      {
        name: "og:title",
        content: "Galih Sukristyan Saputra"
      },
      {
        name: "og:type",
        content: "website"
      },
      {
        name: "og:url",
        content: "https://galihsptr.id"
      },
      { name: "format-detection", content: "telephone=no" },
      { name: "theme-color", content: "#273c75" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" },
      { rel: "stylesheet", href: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/css/style.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  loading: "~/components/Loading.vue",

  generate: {
    fallback: true
  }

};
