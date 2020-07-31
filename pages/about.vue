




<template>
  <div>
    <v-banner>
      order your foodstuff and get it delivered to your doorstep
      <template v-slot:actions>
        <v-btn text color="primary">products</v-btn>
        <v-btn text color="warning">contact us</v-btn>
      </template>
    </v-banner>
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
        <v-textarea v-model="message" label="Message" prepend-icon="mdi-forum" :rules="inputRules"></v-textarea>

        <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'You must agree to continue!']"
          label="are you human?"
          required
        ></v-checkbox>

        <v-btn :disabled="!valid" color="primary" @click="validate" :loading="loading">Send</v-btn>

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
  </div>
</template>
<script>
//import db from "@/fb";
//import dialogue from "../components/dialogue.vue";
export default {
  components: {},
  data: () => ({
    valid: true,
    name: "",
    message: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 45) || "Name must be less than 45 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    messageType: "",
    inputRules: [
      v => !!v || "This field is required",
      v => v.length >= 5 || "Minimum length is 5 characters"
    ],
    items: ["Personal", "Official", "Other"],
    checkbox: false,
    loading: false,
    snackbar: false
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
    }
  }
};
</script>
