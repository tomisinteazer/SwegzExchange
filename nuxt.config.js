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
    title: "Swegztradelink - The official website.",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "One of Nigeria’s leading Trade firms."
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Global CSS
   */

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
      apiKey: "AIzaSyDoCSVBz2-a3olc95VB-DwIsU5h2FHNJHE",
      authDomain: "swegztradelink.firebaseapp.com",
      databaseURL: "https://swegztradelink.firebaseio.com",
      projectId: "swegztradelink",
      storageBucket: "swegztradelink.appspot.com",
      messagingSenderId: "471286698302",
      appId: "1:471286698302:web:b18cc92acd4f15aa135c6f",
      measurementId: "G-GK9CRE26TL"
    },
    services: {
      auth: true,
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
          primary: "#690018",
          accenttext:colors.amber.base,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: "#690018",
          accenttext:"#690018",
          secondary: colors.amber.darken3
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
    extracrCSS: true,
    transpile:["vue-vanta","vue-lottie","lottie-web"]
  }
};
