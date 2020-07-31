<template>
  <v-container class="my-5">
    <v-layout row wrap>
      <v-flex xs6 sm6 md4 lg3 v-for="product in products" :key="product.title">
        <v-hover>
          <template v-slot="{ hover }">
            <v-card
              class="text-xs-center ma-3 rounded-lg transition-swing text-center"
              :elevation="hover ? 24 : 1"
            >
              <v-img class="white--text align-end text-center" height="150px" :src="product.src">
                <v-card-title v-text="product.title"></v-card-title>
              </v-img>

              <v-card-text class="text-center">
                <div>{{ product.description }}</div>
              </v-card-text>
              <div class="text-center">
                <span class="primary--text">{{ product.price }}ngn</span>
              </div>
              <div class="text-center">
                <v-card-actions>
                  <v-btn
                    outlined
                    color="primary"
                    @click="buy(product)"
                    block
                    small
                    class="text-none"
                  >
                    <v-icon>mdi-cart-plus</v-icon>Add to Cart
                  </v-btn>
                </v-card-actions>
              </div>
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
  methods: {
    buy(product) {
      this.$store.commit("addToCart", product);
    }
  },
  mounted() {
    this.products = this.$store.getters.getProduct;
  }
};
</script>
