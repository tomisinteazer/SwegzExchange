
<template>
  <div class="force">
    <!-- landing section -->
    <section class="pb-6 mt-5">
      <v-container>
        <v-row no-gutters>
          <v-col cols="12" md="6" class="mt-md-8 text-center my-5">
            <h2 class="display-2 mb-6 my-5">Welcome to</h2>
            <h1 class="display-3 primary--text font-weight-bold mb-6 my-5 text-uppercase">Acesworld</h1>
            <p
              class="body-1"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia officia sunt nostrum cum cumque vero corrupti, magnam labore totam modi. Atque quasi reiciendis quam dolorum quisquam neque cum aliquam modi?</p>

            <v-dialog v-model="dialog" width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="text-uppercase"
                  color="primary"
                  x-large
                  dark
                  v-bind="attrs"
                  v-on="on"
                >Invest</v-btn>
              </template>

              <v-card>
                <v-card-title class>Invest with us</v-card-title>

                <v-card-text>Lorem ipsum dolor sit amet,</v-card-text>
                <v-form v-model="valid">
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          v-model="userFullName"
                          :rules="nameRules"
                          label="Full Name"
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          v-model="userEmail"
                          :rules="emailRules"
                          type="email"
                          label="Email Address"
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          v-model="userNumber"
                          :rules="nameRules"
                          type="number"
                          label="Phonenumber"
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-form>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text @click="investNow()">Invest Now</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-btn class="ml-2 text-uppercase" x-large nuxt to="/about">
              <v-icon left>mdi-magnify</v-icon>About
            </v-btn>
          </v-col>

          <v-col cols="12" md="6" class="landing-image">
            <img src="/feature1.svg" alt height="70%" />
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- features -->
    <section class="text-center">
      <v-container>
        <v-row>
          <v-col v-for="(feature, i) in features" :key="i" cols="12" md="4">
            <v-hover>
              <template v-slot="{ hover }">
                <v-card class="py-12 px-4" :elevation="hover ? 24 : 0">
                  <img class="mb-5" height="200px" contain :src="feature.image" />

                  <v-card-title
                    class="justify-center font-weight-black text-uppercase primary--text"
                  >{{ feature.title }}</v-card-title>

                  <v-card-text class="subtitle-1" v-text="feature.text"></v-card-text>
                </v-card>
              </template>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="universal pa-5">
      <v-container class="text-center">
        <v-row>
          <v-col cols="6" md="3">
            <div class="text-uppercase caption">Days</div>
            <div class="display-1">1732</div>
          </v-col>
          <v-col cols="6" md="3">
            <div class="text-uppercase caption">Investors</div>
            <div class="display-1">12k</div>
          </v-col>
          <v-col cols="6" md="3">
            <div class="text-uppercase caption">Up time</div>
            <div class="display-1">4,344</div>
          </v-col>
          <v-col cols="6" md="3">
            <div class="text-uppercase caption">Active Members</div>
            <div class="display-1">11k</div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="pa-5">
      <v-container class="text-center">
        <h2 class="display-1 ma-4">What are people saying</h2>

        <v-row>
          <v-col
            v-for="({ image, text, name, company }, i) in testimonies"
            :key="i"
            cols="12"
            md="4"
          >
            <v-hover>
              <template v-slot="{ hover }">
                <v-card class="py-12 px-4" :elevation="hover ? 24 : 1">
                  <div>
                    <v-avatar color="white" size="88">
                      <img :src="image" />
                    </v-avatar>
                  </div>

                  <v-card-text>
                    <div class="subtitle-1">{{ text }}</div>
                    <div class="subtitle-1 font-weight-bold mt-5">{{ name }}</div>
                    <div class="caption">{{ company }}</div>
                  </v-card-text>
                </v-card>
              </template>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="text-center pt-2">
      <v-container>
        <div class="display-1 font-weight-bold">Acesworld news letter</div>
        <p class="mt-2">Get the latest updates and information in your inbox.</p>
        <NewsletterForm />
      </v-container>
      <v-divider class="mt-2"></v-divider>
    </section>
  </div>
</template>
<script>
//infoacesworld@gmail.com
//Forexway007
import NewsletterForm from "../components/NewsletterForm";
export default {
  components: {
    NewsletterForm,
  },
  data() {
    return {
      userNumber: "",
      valid: true,
      userEmail: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length >= 3) || "Name greater than 5 characters",
      ],
      userFullName: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      dialog: false,
      features: [
        {
          image: "/feature4.svg",
          title: "Acesworld",
          text:
            "connect with us on all platforms through any device , you are auto directed to whatsapp messanger for easy access, dont worry all payments are made directy to our bank account, all from your mobile or laptop,ease and comfort for you.",
        },
        {
          image: "/feature2.svg",
          title: "Trusted Investment",
          text:
            "A Trusted Investment platform , all our investors are free of hassle and stress just invest and wait for your ROI and expect your payment deliverd to your account , no worries no hassle all will be easily be handled by us from that point on.",
        },
        {
          image: "/features.svg",
          title: "Our Social platforms",
          text:
            "connect with us on all social platforms , Whatsapp, Instagram, twitter and follow us for updates and more as new features are coming soon and will be announced on our various platforms, flex with us online and enjoy our premium sevices to suit your needs.",
        },
      ],
      testimonies: [
        {
          image: "/aces.png",
          name: "Oluwatomisin Babatunde ",
          company: "Doctor",
          text: `quiccly you are the N° 1 Investment Platform. I love your platform.
Henceforth, it's Acesworld or no other.`,
        },
        {
          image: "/aces.png",
          name: "Oluwatobi Omotola",
          company: "Engineer",
          text: `I had this experience before and I really would
continue to investing with you because your
 ROI is premium.`,
        },
        {
          image: "/aces.png",
          name: "Ifeoluwa Bankole",
          company: "FUNAAB",
          text: `Woooooow your platfor impressed me a lot, this nothing but lovely
          service is top notch payments are also instant .`,
        },
      ],
    };
  },
  methods: {
    investNow() {
      console.log(this.userEmail + this.userFullName);
      this.dialog = false;
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
