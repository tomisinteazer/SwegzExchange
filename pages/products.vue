<template>
  <v-container class="my-5">
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 v-for="card in cards" :key="card.title" :cols="card.flex">
        <v-hover>
          <template v-slot="{ hover }">
            <v-card class="text-xs-center ma-3 cardds transition-swing" :elevation="hover ? 24 : 1">
              <v-img class="white--text align-end" height="200px" :src="card.src">
                <v-card-title v-text="card.title"></v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0">xyz</v-card-subtitle>

              <v-card-text class="text--primary">
                <div class="carddsTitle">Product Name</div>

                <div>a good description of the enlisted product</div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="green" text>Share</v-btn>

                <v-btn text>Explore</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-hover>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {
  data: () => ({
    cards: []
  }),
  mounted() {
    this.cards = this.$store.getters.getProduct;
  }
};
</script>
<style scoped>
.cardds {
  border-radius: 15px;
  transition: all 0.2s ease-out;
}

.carddsTitle {
  font-size: 24px;
  font-weight: 700;
  line-height: 27px;
}
</style>