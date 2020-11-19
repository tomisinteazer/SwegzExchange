<template>
  <div>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>
          Add Rates and Assets
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-form v-model="valid">
            <v-container>
              <v-row>
                <v-col cols="12" md="3">
                  <v-select
                    v-model="type"
                    :items="types"
                    :rules="[(v) => !!v || 'type is required']"
                    label="Types"
                    required
                  ></v-select>
                </v-col>
                <v-col cols="12" md="3">
                  <v-select
                    v-model="name"
                    :items="assets"
                    :rules="[(v) => !!v || 'name is required']"
                    label="name"
                    required
                  ></v-select>
                </v-col>

                <v-col cols="12" md="3">
                  <v-text-field
                    v-model="min"
                    :rules="nameRules"
                    label="Starting quantity"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="3">
                  <v-text-field
                    v-model="max"
                    :rules="nameRules"
                    label="Final quantity"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="3">
                  <v-text-field
                    v-model="rate"
                    label="rate"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-btn color="success" @click="addRate"> send </v-btn>
            </v-container>
          </v-form>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>
          Delete Rates and Assets
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Type</th>
                  <th class="text-left">value</th>
                  <th class="text-left">Rate</th>
                  <th class="text-left">delete</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in rates" :key="item.id">
                  <td>{{ item.name }}</td>
                  <td>{{ item.minQuantity }} -{{ item.maxQuantity }}</td>
                  <td>{{ item.value }}/$</td>
                  <td>
                    <v-btn color="error" @click="deleteRate(item)">
                      delete
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template><script>
import firebase from "firebase/app";
import "firebase/auth";
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
    rates: [],
    valid: false,
    nameRules: [(v) => !!v || "This feild is required"],
    assets: [
      "BTC",
      "ETH",
      "BCH",
      "ITUNES",
      "SEPHORA",
      "GOOGLE",
      "AMAZON",
      "OTHERS",
    ],
    rate: "",
    name: "",
    min: "",
    max: "",
    rates: [],
    types: ["cryptocurrency", "giftcards", "Efunds"],
    type: "",
  }),
  methods: {
    getrates() {
      this.$fireStore.collection("rates").onSnapshot((data) => {
        data.forEach((e) => {
          this.rates.push({ ...e.data(), id: e.id });
        });
      });
    },
    addRate() {
      if (this.name && this.max && this.min && this.rate && this.type) {
        let newRate = {
          name: this.name,
          value: this.rate,
          minQuantity: this.min,
          maxQuantity: this.max,
          type: this.type,
        };

        this.$fireStore
          .collection("rates")
          .add(newRate)
          .then((e) => {
            alert(" rate sent" + e.id);
            this.refresh();
          })
          .catch((e) => console.log(e));
      } else {
        alert("ensure all fields ar filled");
      }
    },
    deleteRate(doc) {
      this.$fireStore
        .collection("rates")
        .doc(doc.id)
        .delete()
        .then(() => {
          this.refresh();
        })
        .catch((e) => console.log(e));
    },
    refresh() {
      this.rates = [];
      this.getrates();
    },
  },
  mounted() {
    this.getrates();
  },
};
</script>