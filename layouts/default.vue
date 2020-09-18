<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      flat
    >
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="150" color="white">
            <img class="text-lg-center" src="aces.png" />
          </v-avatar>
          <p class="font-weight-black text-lg-center mt-3 text-center">Acesworld</p>
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon color="primary">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app flat height="80">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="primary" />
      <img src="/acw.png" height="40" alt />
      <nuxt-link to="/" flat transparent>
        <v-toolbar-title v-text="title" />
      </nuxt-link>
      <v-spacer />
      <v-btn icon @click.stop="colors">
        <v-icon color="warning">mdi-invert-colors</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
      <v-footer color="transparent" class="pt-5 pb-5">
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <img src="/acw.png" height="40" alt />
              <div class="overline">
                <span>&copy; {{ new Date().getFullYear() }}</span>Acesworld
              </div>
              <div style="margin-left: -8px">
                <v-btn small href="javascript:void(0)" icon>
                  <v-icon small>mdi-facebook</v-icon>
                </v-btn>
                <v-btn small href="javascript:void(0)" icon>
                  <v-icon small>mdi-twitter</v-icon>
                </v-btn>
                <v-btn small href="javascript:void(0)" icon>
                  <v-icon small>mdi-github</v-icon>
                </v-btn>
                <v-btn small href="javascript:void(0)" icon>
                  <v-icon small>mdi-instagram</v-icon>
                </v-btn>
                <v-btn small href="javascript:void(0)" icon>
                  <v-icon small>mdi-pinterest</v-icon>
                </v-btn>
              </div>
            </v-col>
            <v-col cols="12" md="3">
              <div class="font-weight-black mb-2">General resources</div>
              <div class="d-flex flex-column subtitle-2">
                <nuxt-link to="/about">About us</nuxt-link>
                <nuxt-link to="/contact">Contact us</nuxt-link>
                <nuxt-link to="/faq">Frequently asked Question</nuxt-link>
              </div>
            </v-col>
            <v-col cols="12" md="3">
              <div class="font-weight-black mb-2">Terms</div>
              <div class="d-flex flex-column subtitle-2">
                <nuxt-link to="/terms">Terms of service</nuxt-link>
                <nuxt-link to="/policy">Privacy policy</nuxt-link>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-footer>
    </v-main>

    <v-footer :absolute="!fixed" app></v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Home",
          to: "/",
        },
        {
          icon: "mdi-comment-account",
          title: "About",
          to: "/about",
        },
        {
          icon: "mdi-phone",
          title: "Contact",
          to: "/contact",
        },
        {
          icon: "mdi-walk",
          title: "Terms",
          to: "/terms",
        },
        {
          icon: "mdi-information-variant",
          title: "Policy",
          to: "/policy",
        },
        {
          icon: "mdi-comment-check-outline",
          title: "FAQ",
          to: "/faq",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Acesworld",
    };
  },
  methods: {
    colors() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>
<style>
a {
  text-decoration: none;
}
</style>