import colors from "vuetify/es5/util/colors";

export default {
  mode: "universal",

  buildDir: "functions/.nuxt",
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: "%s - " + process.env.npm_package_name,
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&display=swap"
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: ["~/assets/global.css"],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/vuetify"],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/pwa", "@nuxtjs/firebase"],
  firebase: {
    config: {
      apiKey: "AIzaSyBhUrkcxR4QuWKFyWyI0Nlbj9SrMotVDxU",
      authDomain: "quiccly-io.firebaseapp.com",
      databaseURL: "https://quiccly-io.firebaseio.com",
      projectId: "quiccly-io",
      storageBucket: "quiccly-io.appspot.com",
      messagingSenderId: "440953390925",
      appId: "1:440953390925:web:95cb681817bba1f5519904",
      measurementId: "G-CEMCBN2YT9"
    },
    services: {
      auth: true,
      storage: true,
      firestore: true // Just as example. Can be any other service.
    }
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ["~/assets/variables.scss"],

    theme: {
      dark: false,
      themes: {
        dark: {
          primary: "#673ab7",
          secondary: "#00bcd4",
          accent: "#9c27b0",
          error: "#e91e63",
          warning: "#ffc107",
          info: "#4caf50",
          success: "#8bc34a",
          universal: colors.grey.darken4
        },
        light: {
          universal: colors.grey.lighten3,
          primary: "#673ab7",
          secondary: "#00bcd4",
          accent: "#9c27b0",
          error: "#e91e63",
          warning: "#ffc107",
          info: "#4caf50",
          success: "#8bc34a"
        }
      }
    }
  },

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    public: "/",
    extracrCSS: true
  }
};
