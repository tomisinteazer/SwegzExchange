<template>
  <v-layout column justify-center align-center>
    <v-col>
      <v-card>
        <v-parallax dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
          <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
              <h1 class="display-1 font-weight-thin mb-4">Farmbase</h1>
              <h4 class="subheading">Order your fresh foodstuff today!</h4>
            </v-col>
          </v-row>
        </v-parallax>

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
  

};
</script>
