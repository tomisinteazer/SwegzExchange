<template>
  <v-layout column justify-center align-center>
    <v-col>
      <v-card color="universal">
        <v-carousel
          cycle
          height="400"
          hide-delimiter-background
          show-arrows-on-hover
          :show-arrows="false"
          delimiter-icon="mdi-cube-outline"
        >
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet :color="colors[i]" height="100%">
              <v-row class="fill-height" align="center" justify="center">
                <div class="display-3 text-center">{{ slide }} Available</div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>

        <v-card-title class="headline">Welcome to Quiccly-io</v-card-title>
        <v-card-text>
          <p>Quiccly-io is being developed and maintained by Tomisinteazer and is currently under construction</p>

          <div class="text-xs-right">
            <em>
              <small>&mdash; Tomisinteazer.</small>
            </em>
          </div>
          <hr class="my-3" />
          <a
            href="https://tomisinteazer-io.web.app/"
            target="_blank"
            rel="noopener noreferrer"
          >Tomisinteazer.io</a>
          <br />
          <a
            href="https://github.com/tomisinteazer"
            target="_blank"
            rel="noopener noreferrer"
          >Tomisinteazer GitHub</a>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/products">Products</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg4 v-for="idea in ideas" :key="idea.name">
          <v-hover>
            <template v-slot="{ hover }">
              <v-card class="text-center ma-3 universal" :elevation="hover ? 24 : 1">
                <v-card-text>
                  <v-icon x-large>{{idea.icon}}</v-icon>

                  <div class="headline primary--text">{{ idea.name }}</div>
                  <v-responsive class="pt-4"></v-responsive>
                  <p>{{ idea.role }}</p>
                </v-card-text>
              </v-card>
            </template>
          </v-hover>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: [
        "Foodstuff",
        "vegetables",
        "Provisions",
        "Drinks",
        "And many more",
      ],
      ideas: [
        {
          name: "Speed",
          role:
            "We build out projects with the speed and efficiency of a machine",
          icon: "mdi-flash",
        },
        {
          name: "Creativity",
          role:
            "Dwelling on the borders of the extra ordinary is how we like to live",
          icon: "mdi-palette",
        },

        {
          name: "Expertise",
          role:
            "Nothin like solid experience to guide your choices to make the ultimate product",
          icon: "mdi-leaf",
        },
        {
          name: "Security",
          role: "Your information and Privacy is secure with us ",
          icon: "mdi-lock",
        },
        {
          name: "Mission",
          role: "To offer top quality web development services",
          icon: "mdi-transfer",
        },

        {
          name: "Customer Relationship",
          role: "Top notch satisfaction from our customers unbeatable Quality",
          icon: "mdi-emoticon",
        },
      ],
    };
  },
};
</script>
