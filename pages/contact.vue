<template>
  <div class="text-center">
    <div class="primary py-16">
      <h1 class="display-2 mb-6 pb-8 text-uppercase white--text">Contact us</h1>
      <div class="mx-auto text-left" style="max-width: 700px">
        <p class="text-h5 mb-0 pb-16 text-center white--text">
          Send us a message and we will respond as soon as possible.
        </p>
      </div>
    </div>
    <svg viewBox="0 0 1440 88" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fill-rule="evenodd">
        <path fill="#ffffff00" d="M0 0h1440v88H0z" />
        <path
          d="M1440 72.353C1154.087 40.784 917.42 25 730 25 542.58 25 299.246 40.784 0 72.353V0h1440v72.353z"
          fill="#691616"
        />
      </g>
    </svg>

    <div class="mx-auto mb-6" style="max-width: 700px">
      <v-form class="mt-5">
        <v-text-field
          label="Full name"
          outlined
          v-model="name"
          :rules="nameRules"
        ></v-text-field>
        <v-text-field
          label="Email"
          outlined
          v-model="email"
          :rules="emailRules"
        ></v-text-field>
        <v-textarea label="Message" outlined v-model="message"></v-textarea>
        <v-btn color="primary" x-large block @click="mailer()">Send</v-btn>
      </v-form>
    </div>
    <p class="primary--text">Email: contact@swegztradelink.com</p>
    <p class="primary--text">
      Call: +2348136908208, +2348102192374 (9:00am – 5:00pm. Monday – Friday).
    </p>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      name: "",
      email: "",
      message: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length >= 3) || "Name greater than 5 characters",
      ],
    };
  },
  methods: {
    mailer() {
      if ((this.name && this.email && this.message != "") || null) {
        let subject = "from " + this.name + ":@ " + this.email;
        let mailRef =
          "mailto:contact@swegztradelink.com?subject=" +
          encodeURIComponent(subject) +
          "&body=" +
          encodeURIComponent(this.message);
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

