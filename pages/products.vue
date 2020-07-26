<template>
  <v-container class="my-5">
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 v-for="product in products" :key="product.title">
        <v-hover>
          <template v-slot="{ hover }">
            <v-card class="text-xs-center ma-3 cardds transition-swing" :elevation="hover ? 24 : 1">
              <v-img class="white--text align-end" height="200px" :src="product.src">
                <v-card-title v-text="product.title"></v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0"></v-card-subtitle>

              <v-card-text class="text--primary">
                <div class="carddsTitle">{{product.description}}</div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="green" text>{{product.price}}</v-btn>
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
    products: []
  }),
  mounted() {
    this.products = this.$store.getters.getProduct;
    console.log(this.products);
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