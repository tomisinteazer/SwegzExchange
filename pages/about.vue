<template>
  <v-layout column justify-center align-center>
    <v-col>
      <h1 class="text-center display-2 font-weight-bold mb-6 my-5">About Quiccly-io</h1>
      <p>
        Quiccly moves in to solve the problem of everyday students as it hopes to replace your struggle for certain things in life, as a student there are a set of things that you need at all time and wouldnt
        it be amazing if you can get a vendor that delivers to you without any delivery charge.
        Your everyday needs from feeding to clothing to stationary all on
        preoder through whatsapp so long as you are within the drop location the delivery is all free.
        we deliver within 24 hrs
      </p>
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

        <v-card-text>
          <p>Quiccly-io is being developed and maintained by Tomisinteazer and is currently under continous Integration</p>

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
      <h1 class="text-center display-2 font-weight-bold mb-6 my-5">Information From Tomisinteazer-io</h1>
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
      <h1 class="text-center display-2 font-weight-bold mb-6 my-5">Contact Us</h1>
      <v-card class="mx-5 px-4 py-5 my-5">
        <!-- <dialogue /> -->
        <v-form ref="form" v-model="valid" lazy-validation class="container">
          <v-text-field
            v-model="name"
            :counter="45"
            :rules="nameRules"
            label="Full Name"
            prepend-icon="mdi-account"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            prepend-icon="mdi-email"
            required
          ></v-text-field>

          <v-select
            v-model="messageType"
            :items="items"
            :rules="[v => !!v || 'Type is required']"
            label="Message Type"
            prepend-icon="mdi-comment"
            required
          ></v-select>
          <v-textarea
            v-model="message"
            label="Message"
            prepend-icon="mdi-forum"
            :rules="inputRules"
          ></v-textarea>

          <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="are you human?"
            required
          ></v-checkbox>

          <v-btn :disabled="!valid" color="primary" :loading="loading">Send</v-btn>

          <v-btn color="error" @click="reset">Reset</v-btn>

          <v-btn color="secondary" @click="resetValidation">Reset Validation</v-btn>
        </v-form>
        <v-snackbar v-model="snackbar" :timeout="4000" top color="grey darken-3 ">
          <span class="orange--text">Awesome! your message has been sent.</span>
          <v-btn color="orange" text @click="snackbar = false">
            <v-icon class="orange--text">close</v-icon>close
          </v-btn>
        </v-snackbar>
      </v-card>
    </v-container>
  </v-layout>
</template>
<script>
//import db from "@/fb";
//import dialogue from "../components/dialogue.vue";
export default {
  components: {},
  data: () => ({
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

    valid: true,
    name: "",
    message: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 45) || "Name must be less than 45 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    messageType: "",
    inputRules: [
      (v) => !!v || "This field is required",
      (v) => v.length >= 5 || "Minimum length is 5 characters",
    ],
    items: ["Personal", "Official", "Other"],
    checkbox: false,
    loading: false,
    snackbar: false,
  }),

  methods: {
    // validate() {
    //   if (this.$refs.form.validate()) {
    //     this.loading = true;
    //     const message = {
    //       name: this.name,
    //       messageType: this.messageType,
    //       email: this.email,
    //       message: this.message
    //     };
    //     db.collection("messages")
    //       .add(message)
    //       .then(() => {
    //         this.loading = false;
    //         this.snackbar = true;
    //         this.reset();
    //       });
    //   }
    // },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style>
.v-application .display-2 {
  font-family: "Quicksand", sans-serif !important;
}
.v-application .subtitle-1 {
  font-family: "Quicksand", sans-serif !important;
}
.v-application .body-1 {
  font-family: "Quicksand", sans-serif !important;
}
.v-application .caption {
  font-family: "Quicksand", sans-serif !important;
}
.v-application body {
  font-family: "Quicksand", sans-serif !important;
}
.landing-image {
  text-align: center;
}
.landing-image img {
  width: 100%;
  max-width: 600px;
}

.partners img {
  max-width: 160px;
  margin: 0 10px;
}
</style>
