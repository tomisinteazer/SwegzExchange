<template>
  <v-app dark>
    <h1 v-if="error.statusCode === 404">
      <section class="my-12">
        <v-row no-gutters>
          <v-col cols="12" md="6" class="mt-md-8 text-center">
            <h2 class="display-1 mb-6 my-5">404 - Not found</h2>
            <h1 class="display-2 primary--text font-weight-bold mb-6 my-5">
              OOPs - Seems you are lost
            </h1>
            <p class="body-1">
              {{ pageNotFound }}
            </p>
            <NuxtLink to="/"
              ><v-btn
                class="ml-2 text-uppercase primary"
                x-large
                nuxt
                to="/about"
              >
                <v-icon left>mdi-home</v-icon>Home
              </v-btn></NuxtLink
            >
          </v-col>

          <v-col cols="12" md="6" class="landing-image pt-12">
            <v-img contain max-height="300" src="/404.svg"></v-img>
          </v-col>
        </v-row>
      </section>
    </h1>
    <h1 v-else>
      <section class="my-12">
        <v-row no-gutters>
          <v-col cols="12" md="6" class="mt-md-8 text-center">
            <h1 class="display-2 primary--text font-weight-bold mb-6 my-5">
              An error occured
            </h1>

            <NuxtLink to="/"
              ><v-btn
                class="ml-2 text-uppercase primary"
                x-large
                nuxt
                to="/about"
              >
                <v-icon left>mdi-home</v-icon>Home
              </v-btn></NuxtLink
            >
          </v-col>

          <v-col cols="12" md="6" class="landing-image pt-12">
            <v-img contain max-height="300" src="/error.svg"></v-img>
          </v-col>
        </v-row>
      </section>
    </h1>
  </v-app>
</template>

<script>
export default {
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: "The page you requested doesn't exist.",
      otherError: "An error occurred",
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
