<template>
  <div class="pb-6 pt-4 text-center">
    <v-container>
      <h1 class="display-2 mb-6 text-uppercase primary--text">Contact us</h1>
      <div class="mx-auto mb-6" style="max-width: 700px">
        <p class="body-1">
          Send us a message and we will respond as soon as possible.
        </p>
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
      <p class="primary--text">Email: infoacesworld@gmail.com</p>
      <p class="primary--text">
        Call: +2348136908208, +2349019881034 (9:00am – 5:00pm. Monday – Friday).
      </p>
    </v-container>
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
          "mailto:infoacesworld@gmail.com?subject=" +
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

