<template>
  <v-container class="my-5">
    <v-layout row wrap>
      <v-flex v-for="product in cart" :key="product.title">
        <v-hover>
          <template v-slot="{ hover }">
            <v-banner :elevation="hover ? 24 : 1">
              <v-avatar slot="icon" color="deep-purple accent-4" size="40">
                <v-img :src="product.src"></v-img>
              </v-avatar>
              {{product.title}}
              <span>{{product.description}}</span>
              <template v-slot:actions>
                <span text>{{product.price}} ngn</span>
                <v-btn text color="error" @click="removeItem(product)">
                  remove
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
              </template>
            </v-banner>
          </template>
        </v-hover>
      </v-flex>
    </v-layout>

    <div class="text-center">
      <v-bottom-sheet v-model="sheet" persistent>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="green"
            outlined
            large
            v-bind="attrs"
            v-on="on"
            class="mx-3 my-3"
            @click="setTotal()"
          >
            <v-icon>mdi-cash-multiple</v-icon>checkout
          </v-btn>
          <v-btn color="error" outlined large @click="emptyCart()" class="mx-3 my-3">
            <v-icon>mdi-close</v-icon>Remove all
          </v-btn>
          <v-btn color="primary" outlined large nuxt to="/products" class="mx-3 my-3">
            <v-icon>mdi-chart-bubble</v-icon>continue shopping
          </v-btn>
        </template>
        <v-sheet class="text-center" height="200px">
          <v-btn class="mt-6" outlined fab color="warning" @click="sheet = !sheet">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <div class="py-3">
            <v-banner>
              {{total.info}}
              <template v-slot:actions>
                <v-btn text color="primary">{{total.price}}</v-btn>
                <v-btn text color="green">Pay</v-btn>
              </template>
            </v-banner>
          </div>
        </v-sheet>
      </v-bottom-sheet>
    </div>
  </v-container>
</template>
          
<script>
export default {
  data() {
    return {
      cart: [],
      sheet: false,
      total: {
        price: 0,
        info: "",
      },
    };
  },
  methods: {
    getCart() {
      this.cart = this.$store.getters.getCartItems;
    },
    removeItem(payload) {
      this.$store.commit("removeFromCart", payload);
    },
    emptyCart() {
      this.$store.commit("clearCart", []);

      this.getCart();
    },
    getTotal() {
      let formatter = {
        zero: 0,
        comma: ", ",
        empty: "",
        plus: "+",
      };

      this.$store.commit("calcTotal", formatter);
      this.total = this.$store.getters.getTotal;
      return this.total;

      // let reducer = (accumulator, currentValue) => accumulator + currentValue;
      // let reduceItems = (accumulator, currentValue) =>
      //   accumulator + currentValue + ", ";
      // let totalAmount = this.cart.map(el => el.price).reduce(reducer, 0);
      // let productList = this.cart.map(el => el.title).reduce(reduceItems, "");
      // return {
      //   price: totalAmount,
      //   info: productList
      // };
    },
    setTotal() {
      if (this.cart.length == 0) {
        this.total = {
          price: 0,
          info: "The Cart is empty go to products to add item",
          productMessage: null,
        };
      } else {
        this.total = this.getTotal();
      }
    },
  },
  mounted() {
    this.getCart();
    this.setTotal();
  },
};
</script>