<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card>
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
            href="https://github.com/nuxt/tomisinteazer"
            target="_blank"
            rel="noopener noreferrer"
          >Tomisinteazer GitHub</a>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/inspire">Continue</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  components: {}
};
</script>
