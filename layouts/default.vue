<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      color="universal"
      height="100%"
    >
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <!-- <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>-->
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-chip class="ma-2" color="primary" nuxt to="/cart">
        <v-avatar left class="error">{{getCartLenght}}</v-avatar>
        <v-icon>mdi-cart</v-icon>
      </v-chip>
      <v-btn icon @click="lightSwitch()">
        <v-icon>mdi-lightbulb-outline</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <!-- <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>mdi-repeat</v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>-->

    <v-footer :absolute="!fixed" app padless class="universal">
      <v-col class="text-center">
        <v-card class="text-center universal" flat width="100%">
          <v-card-text>
            <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
              <v-icon size="24px">{{ icon }}</v-icon>
            </v-btn>
          </v-card-text>
          <v-card-text>
            Phasellus feugiat arcu sapien,
            et iaculis ipsum elementum sit amet.
            Mauris cursus commodo interdum.
            Praesent ut risus eget metus luctus accumsan id ultrices nunc.
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text>
            &copy;
            {{ new Date().getFullYear() }} —
            <strong>
              <span>Tomisinteazer</span>
            </strong>
          </v-card-text>
        </v-card>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      theme: true,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Farmbase",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Products",
          to: "/products",
        },
        {
          icon: "mdi-cart",
          title: "cart",
          to: "/cart",
        },
        {
          icon: "mdi-information-variant",
          title: "About",
          to: "/about",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Farmbase",
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    };
  },
  methods: {
    lightSwitch() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
  computed: {
    getCartLenght() {
      return this.$store.getters.getCartItems.length;
    },
  },
};
</script>
<style scoped>
</style>