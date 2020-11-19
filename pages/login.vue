<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="password"
            :rules="nameRules"
            type="password"
            label="Password"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn color="info" @click="signInWithEmailAndPassword">login</v-btn>
    </v-container>
  </v-form>
</template>
 
<script>
import Cookies from "js-cookie";
export default {
  data: () => ({
    valid: false,
    password: "",
    nameRules: [(v) => !!v || "this field is required"],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
  }),
  methods: {
    signInWithEmailAndPassword() {
      this.$fireAuth
        .signInWithEmailAndPassword(this.email, this.password)
        .then((result) => {
          console.log(result);
          // store the user ore wathever
          this.$router.push("/swegzadmin");
        })
        .catch(function (error) {
          // Handle Errors here.
          let errorCode = error.code;
          let errorMessage = error.message;
          alert(`${errorCode} ${errorMessage}`);
          // ...
        });
      this.$fireAuth.onAuthStateChanged((user) => {
        if (user) {
          // User is signed in.
          console.log("signed in");
          this.$fireAuth.currentUser
            .getIdToken(true)
            .then((token) => Cookies.set("access_token", token));
          this.loggedIn = true;
        } else {
          Cookies.remove("access_token");
          // if (Cookies.set('access_token', 'blah')) {
          // }
          // No user is signed in.
          this.loggedIn = false;
          console.log("signed out", this.loggedIn);
        }
      });
    },
  },
};
</script>