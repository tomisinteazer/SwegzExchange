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
        <v-flex class="mt-5 px-2">
          <v-avatar size="150">
            <v-img contain src="/swg.png"></v-img>
          </v-avatar>
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon color="accenttext">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-btn
        v-if="$vuetify.theme.dark"
        block
        x-large
        depressed
        @click.stop="colors"
      >
        <v-icon color="accenttext">mdi-weather-night</v-icon>
      </v-btn>
      <v-btn
        v-if="!$vuetify.theme.dark"
        block
        x-large
        depressed
        @click.stop="colors"
      >
        <v-icon color="accenttext">mdi-weather-sunny</v-icon>
      </v-btn>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      flat
      height="90"
      class="px-md-16"
    >
      <img src="/swg.png" height="20" alt />
      <nuxt-link to="/" flat transparent>
        <v-toolbar-title
          v-text="title"
          class="accenttext--text text-uppercase px-4 font-weight-bold"
        />
      </nuxt-link>
      <v-spacer />
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="accenttext" />
    </v-app-bar>
    <v-main>
      <nuxt />

      <v-footer color="transparent" class="py-10">
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <img src="/swg.png" height="40" alt />
              <div class="overline">
                <span>&copy; {{ new Date().getFullYear() }}</span
                >Swegz TradeLink
              </div>
              <div style="margin-left: -8px">
                <v-btn
                  small
                  href="https://www.facebook.com/100130125169727"
                  icon
                >
                  <v-icon small>mdi-facebook</v-icon>
                </v-btn>
                <v-btn
                  small
                  href="https://www.twitter.com/Swegz TradelinkNG"
                  icon
                >
                  <v-icon small>mdi-twitter</v-icon>
                </v-btn>

                <v-btn
                  small
                  href="https://www.instagram.com/Swegz Tradelinkng_"
                  icon
                >
                  <v-icon small>mdi-instagram</v-icon>
                </v-btn>
                <v-btn
                  small
                  href="https://api.whatsapp.com/send?phone=2348102192374&text=Hello+Swegz Tradelink+my+name+is___"
                  icon
                >
                  <v-icon small>mdi-whatsapp</v-icon>
                </v-btn>
                <v-btn small href="mailto:contact@Swegz Tradelink.com" icon>
                  <v-icon small>mdi-gmail</v-icon>
                </v-btn>
              </div>
            </v-col>
            <v-col cols="12" md="2">
              <div class="font-weight-black mb-2">General resources</div>
              <div class="d-flex flex-column subtitle-2">
                <nuxt-link class="accenttext--text" to="/about"
                  >About us</nuxt-link
                >
                <nuxt-link class="accenttext--text" to="/contact"
                  >Contact us</nuxt-link
                >
                <nuxt-link class="accenttext--text" to="/faq"
                  >Frequently asked Question</nuxt-link
                >
              </div>
            </v-col>
            <v-col cols="12" md="2">
              <div class="font-weight-black mb-2">Terms</div>
              <div class="d-flex flex-column subtitle-2">
                <nuxt-link class="accenttext--text" to="/terms"
                  >Terms of service</nuxt-link
                >
                <nuxt-link class="accenttext--text" to="/policy"
                  >Privacy policy</nuxt-link
                >
              </div>
            </v-col>
            <v-col cols="12" md="2">
              <div class="font-weight-black mb-2">Visit us At :</div>
              <div class="d-flex flex-column subtitle-2">
                <Address>
                  4th Floor Presidential Boulevard,<br />
                  1 Golf Resort Drive, <br />
                  Oke Mosan, Abeokuta.
                </Address>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-footer>
    </v-main>
    <biconic />

    <v-footer :absolute="!fixed" app></v-footer>
  </v-app>
</template>

<script>
import bionic from "../components/biconic";
export default {
  components: {
    bionic
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-home-variant",
          title: "Home",
          to: "/"
        },
        {
          icon: "mdi-comment-account",
          title: "About",
          to: "/about"
        },
        {
          icon: "mdi-phone",
          title: "Contact",
          to: "/contact"
        },
        {
          icon: "mdi-pencil",
          title: "Terms",
          to: "/terms"
        },
        {
          icon: "mdi-information-variant",
          title: "Policy",
          to: "/policy"
        },
        {
          icon: "mdi-comment-check-outline",
          title: "FAQ",
          to: "/faq"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Swegz Tradelink"
    };
  },
  methods: {
    colors() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
};
</script>
<style>
a {
  text-decoration: none;
}
</style>
