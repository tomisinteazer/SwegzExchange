export default {
  state: () => ({
    products: [{
        title: "Spagetti",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        description: "Golden penny pasta available",
        price: 200
      },
      {
        title: "Rice - long grained",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        description: "Parboiled rice per kg",
        price: 1000
      },
      {
        title: "Beans - Drum flavor",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        description: "Beans drum style beans per kg",
        price: 350
      },
      {
        title: "Vegetable Oil",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        description: "pure vegetable oil per litre",
        price: 400
      }
    ],
    cart: []
  }),
  mutations: {
    addToCart(state, payload) {
      state.cart.push(payload);
    },
    removeFromCart(state, payload) {
      let index = state.cart.indexOf(payload);
      state.cart.splice(index, 1);
    },
    clearCart(state, payload) {
      state.cart = payload
    }
  },
  actions: {},
  modules: {},
  getters: {
    getProduct: state => state.products,
    getCartItems: state => state.cart
  }
};
