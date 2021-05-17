<template>
  <v-form>
    <div
      class="d-flex flex-column flex-md-row justify-center align-top mx-auto"
      style="max-width: 600px"
    >
      <v-text-field
        v-model="email"
        outlined
        class="mr-md-2"
        placeholder="A sweet spot is waiting for your email"
        :rules="emailRules"
      ></v-text-field>
      <v-btn x-large color="warning" @click="mailernwletter">Subscribe</v-btn>
    </div>
  </v-form>
</template>

<script>
export default {
  name: "NewsletterForm",
  data() {
    return {
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  methods: {
    mailernwletter() {
      if (this.email != "" || null) {
        let subject = "I want to subscribe to you news letter : " + this.email;
        let mailRef =
          "mailto:contact@swegztradelink.com?subject=" +
          encodeURIComponent(subject) +
          "&body=" +
          encodeURIComponent(this.email);
        window.location.replace(mailRef);
      } else {
        alert(
          "please ensure all fields are filled correctly with valid details"
        );
      }
    },
  },
};
</script>
