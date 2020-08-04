<template>
  <v-container class="my-5">
    <v-layout row wrap>
      <v-flex xs6 sm6 md4 lg3 v-for="product in products" :key="product.tittle">
        <v-hover>
          <template v-slot="{ hover }">
            <v-card
              class="text-xs-center ma-3 rounded-lg transition-swing text-center"
              :elevation="hover ? 24 : 1"
            >
              <v-img class="white--text align-end text-center" height="150px" :src="product.src">
                <v-card-title v-text="product.tittle"></v-card-title>
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
    products: [],
  }),
  methods: {
    buy(product) {
      this.$store.commit("addToCart", product);
    },
    // gtp() {
    //   let docs = [];

    //   let ref = this.$fireStore
    //     .collection("products")
    //     .get()
    //     .then((querySnapshot) => {
    //       querySnapshot.forEach((doc) => {
    //         docs.push(doc.data());
    //         console.log(`${doc.id} => ${doc.data()}`);
    //       });
    //       // do something with documents
    //     })
    //     .catch((e) => console.log(e));

    //   return docs;
    // },
  },
  async created() {
    try {
      await this.$store.dispatch("bindProducts");
    } catch (e) {
      console.log(e);
    }
    this.products = this.$store.getters.getProduct;
    this.products.forEach((e) => console.log(e));
  },
};
</script>
