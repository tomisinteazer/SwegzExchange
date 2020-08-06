<template>
  <v-layout column justify-center align-center>
    <v-col>
      <v-card>
        <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet :color="colors[i]" height="100%">
              <v-row class="fill-height" align="center" justify="center">
                <div class="display-3">{{ slide }} Slide</div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>

        <v-card-title class="headline">Welcome to Farmbase</v-card-title>
        <v-card-text>
          <p>Farmbase is being developed and maintained by Tomisinteazer and is currently under construction</p>

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
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
};
</script>
