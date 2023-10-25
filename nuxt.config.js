export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - Samh",
    title: 'Samh',
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  router: {
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { x: 0, y: 0 };
      }
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/scss/main.scss",
    "@fortawesome/fontawesome-svg-core/styles.css",
    "@fortawesome/fontawesome-free/css/all.css",
  ],
  styleResources: {
    scss: [
      "~/assets/variables.scss",
    ],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/fontawesome.js",
    "~plugins/sweetAlert",
    // "~/plugins/axiosConfig.js",
    { src: "~/plugins/aos", ssr: false },
    // { src: "~/plugins/modal.js", ssr: false },
    { src: "~/plugins/aos", ssr: false },
    // { src: "~/plugins/modal.js", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/style-resources", "@nuxtjs/fontawesome"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    '@nuxtjs/i18n',
    'nuxt-simple-sitemap',
    '@nuxtjs/device'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
      name: "Samh",
      short_name: "Samh",
      display: "standalone",
      theme_color: "#00BB7E",
    },
    icon: {
      source: "static/images/logo.png",
      fileName: "logo.png",
    },
  },

  i18n: {
    locales: [
      {
        code: "ar",
        iso: "ar-AR",
        name: "Ar",
        file: "ar.json",
      },
      {
        code: "en",
        iso: "en-US",
        name: "En",
        file: "en.json",
      },
    ],
    defaultLocale: "ar",
    langDir: "lang/",
    noPrefixDefaultLocale: true,
    vueI18n: {
      fallbackLocale: ["ar", "en"],
      // messages: {
      //   ar: require("./lang/ar.json"),
      //   en: require("./lang/en.json"),
      // },
    },
  },

  loading: {
    color: "#00BB7E",
    failedColor: "#FF4949",
    height: "6px",
  },

  fontawesome: {
    icons: {
      solid: true,
      regular: true,
      brands: true,
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  server: {
    port: 8000, // default: 3000
  },
};
