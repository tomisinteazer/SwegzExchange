<template>
  <div>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>client manager</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header>Add client</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field
                    v-model="clientName"
                    prepend-icon="mdi-chart-bubble"
                    :rules="nameRules"
                    label="client Name"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="clientPlan"
                    :rules="nameRules"
                    prepend-icon="mdi-information-outline"
                    label="client plan"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    prepend-icon="mdi-information-outline"
                    label="client email"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="phoneNumber"
                    type="number"
                    :rules="nameRules"
                    prepend-icon="mdi-information-outline"
                    label="client phone number"
                    required
                  ></v-text-field>

                  <v-text-field
                    prepend-icon="mdi-wallet"
                    label="Current Investment Date"
                    v-model="currentInvestDate"
                    :rules="[v => !!v || 'date  is required']"
                    required
                  ></v-text-field>
                  <v-text-field
                    prepend-icon="mdi-wallet"
                    label="initial registration Date"
                    v-model="initialDate"
                    :rules="[v => !!v || 'date  is required']"
                    required
                  ></v-text-field>
                  <v-text-field
                    prepend-icon="mdi-wallet"
                    label="Due Date"
                    v-model="dueDate"
                    :rules="[v => !!v || 'date  is required']"
                    required
                  ></v-text-field>

                  <v-select
                    v-model="investmentState"
                    :items="investmentStateType"
                    :rules="[v => !!v || 'category  is required']"
                    label="investment state"
                    required
                    prepend-icon="mdi-format-list-bulleted-type"
                  ></v-select>
                  <h3>Next of kin</h3>
                  <v-text-field
                    v-model="nextOfKinName"
                    prepend-icon="mdi-chart-bubble"
                    :rules="nameRules"
                    label="Next of kin Name"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="nextOfKinEmail"
                    :rules="emailRules"
                    prepend-icon="mdi-information-outline"
                    label="Next of kin email"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="nextOfKinPhoneNum"
                    type="number"
                    :rules="nameRules"
                    prepend-icon="mdi-information-outline"
                    label="Next of kin phone number"
                    required
                  ></v-text-field>
                  <v-checkbox
                    v-model="checkbox"
                    :rules="[v => !!v || 'You must agree to continue!']"
                    label="are you done?"
                    required
                  ></v-checkbox>

                  <v-btn
                    color="success"
                    class="mr-4"
                    @click="validateClient"
                    :disabled="!valid"
                  >Add Client</v-btn>

                  <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>

                  <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn>
                </v-form>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">client Name</th>
                  <th class="text-left">client Plan</th>

                  <th class="text-left">Investment State</th>
                  <th class="text-left">Email</th>
                  <th class="text-left">Phone Number</th>
                  <th class="text-left">Due Date</th>
                  <th class="text-left">Registration Date</th>
                  <th class="text-left">Current Investment Date</th>
                  <th class="text-left">Next of Kin Name</th>
                  <th class="text-left">Next of Kin Email</th>
                  <th class="text-left">Next of Kin Phone Number</th>
                  <th class="text-left">delete</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="client in clients" :key="client.id">
                  <td>{{ client.clientName }}</td>
                  <td>{{ client.clientPlan}}</td>
                  <td>{{ client.investmentState}}</td>
                  <td>{{ client.email}}</td>
                  <td>{{ client.phoneNumber}}</td>
                  <td>{{ client.dueDate}}</td>
                  <td>{{ client.initialDate}}</td>
                  <td>{{ client.currentInvestDate}}</td>
                  <td>{{ client.nextOfKinName}}</td>
                  <td>{{ client.nextOfKinEmail}}</td>
                  <td>{{ client.nextOfKinPhoneNum}}</td>
                  <td>
                    <v-btn color="error" @click="deleteClient(client)">remove</v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-btn color="error" @click="signOut" v-if="loggedIn" block>logout</v-btn>
  </div>
</template>
<script>
import firebase from "firebase/app";
import "firebase/auth"
import Cookies from "js-cookie";
import { getUserFromCookie, getUserFromSession } from "@/helpers";
export default {
  asyncData({ req, redirect }) {
    if (process.server) {
      //console.log("server", req.header);
      const user = getUserFromCookie(req);
      //   console.log('b', getUserFromCookie(req))
      if (!user) {
        console.log("redirecting server");
        redirect("/login");
      }
    } else {
      var user = firebase.auth().currentUser;
      if (!user) {
        redirect("/login");
      }
      //   console.log($nuxt.$router)
    }
  },
  data: () => ({
    valid: false,
    checkbox: true,
    loggedIn: true,
    clientName: "",
    clientPlan: "",
    currentInvestDate: "",
    dueDate: "",
    email: "",
    initialDate: "",
    investmentState: "",
    nextOfKinEmail: "",
    nextOfKinName: "",
    nextOfKinPhoneNum: "",
    phoneNumber: "",
    investmentStateType: ["ongoing", "dormant", "pending"],
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length >= 5) || "Name greater than 5 characters",
    ],
    clients: [],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
  }),

  methods: {
    getClients() {
      this.$fireStore.collection("clients").onSnapshot((data) => {
        data.forEach((e) => {
          this.clients.push({ ...e.data(), id: e.id });
        });
      });
    },
    addClient() {
      let client = {
        clientName: this.clientName,
        clientPlan: this.clientPlan,
        currentInvestDate: this.currentInvestDate,
        dueDate: this.dueDate,
        email: this.email,
        initialDate: this.initialDate,
        investmentState: this.investmentState,
        nextOfKinEmail: this.nextOfKinEmail,
        nextOfKinName: this.nextOfKinName,
        nextOfKinPhoneNum: this.nextOfKinPhoneNum,
        phoneNumber: this.phoneNumber,
      };
      console.log(client);

      this.$fireStore
        .collection("clients")
        .add(client)
        .then((e) => alert(" document sent" + e.id))
        .catch((e) => console.log(e));
    },

    validateClient() {
      this.$refs.form.validate();
      this.addClient();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },

    deleteClient(doc) {
      this.$fireStore
        .collection("clients")
        .doc(doc.id)
        .delete()
        .then(() => {
          console.log("deleted succesfully");
        })
        .catch((e) => console.log(e));
    },
    signOut() {
      this.$fireAuth
        .signOut()
        .then((e) => {
          this.$router.push("/login");
          // Sign-out successful.
          console.log(e);
        })
        .catch(function (error) {
          // An error happened.
          console.log(error);
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
  async beforeMount() {
    this.getClients();
  },
};
</script>