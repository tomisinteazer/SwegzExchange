
<template>
  <div class="force">
    <!-- landing section -->
    <section class="pb-6 mt-5">
      <v-container>
        <v-row no-gutters>
          <v-col cols="12" md="6" class="mt-md-8 text-center my-5">
            <h2 class="display-1 mb-6 my-5">Welcome to</h2>
            <h1 class="display-2 primary--text font-weight-bold mb-6 my-5">
              Acesworld NG
            </h1>
            <p class="body-1">
              One of Nigeria’s leading investment firms. With our digital
              platform, investing is now simplified and you can invest safely
              without having to navigate the complex financial markets.
            </p>

            <v-dialog v-model="dialog" width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="text-uppercase"
                  color="primary"
                  x-large
                  dark
                  v-bind="attrs"
                  v-on="on"
                  >Invest</v-btn
                >
              </template>

              <v-card>
                <v-card-title class
                  >Open an Investment<br />
                  Portfolio.</v-card-title
                >

                <v-card-text
                  >Fill in your details below and submit. You will be contacted
                  shortly.</v-card-text
                >
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
                          type="number"
                          label="Phone number"
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-form>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click="investNow()">Submit</v-btn>
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
                  <img
                    class="mb-5"
                    height="200px"
                    contain
                    :src="feature.image"
                  />

                  <v-card-title class="justify-center primary--text">{{
                    feature.title
                  }}</v-card-title>

                  <v-card-text
                    class="subtitle-1"
                    v-text="feature.text"
                  ></v-card-text>
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
            <div class="display-1">365+</div>
          </v-col>
          <v-col cols="6" md="3">
            <div class="text-uppercase caption">Investors</div>
            <div class="display-1">100+</div>
          </v-col>
          <v-col cols="6" md="3">
            <div class="text-uppercase caption">Up time</div>
            <div class="display-1">365+</div>
          </v-col>
          <v-col cols="6" md="3">
            <div class="text-uppercase caption">Active Members</div>
            <div class="display-1">235+</div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="pa-5">
      <v-container class="text-center">
        <h2 class="display-1 ma-4 primary--text">
          Testimonials from Investors
        </h2>

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
                    <div class="subtitle-1 font-weight-bold mt-5 primary--text">
                      {{ name }}
                    </div>
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
        <div class="text-h5 primary--text">Acesworld NG newsletter</div>
        <p class="mt-2">Subscribe to Acesworld NG newsletter</p>
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
          title: "Innovative & Simple",
          text:
            "Open an investment portfolio in Naira on our easy-to-use digital platform. You can now easily access short and medium-term investment opportunities.",
        },
        {
          image: "/feature2.svg",
          title: "Secure & Consistent",
          text:
            "Get 20% return on investment in 25 working days. Invest your funds in a secure platform with guaranteed consistent returns paid promptly into your bank account.",
        },
        {
          image: "/features.svg",
          title: "Social media platforms",
          text:
            " Connect with us on all major social media pages. You can also subscribe to our newsletter to receive major updates and finance tips and news. ",
        },
      ],
      testimonies: [
        {
          image: "/aces.png",
          name: "Papa ",
          company: "Lagos State, Nigeria",
          text: ` Started investing with Acesworld investment 7months ago,so far, it has 
been a great experience. I've been able to meet up with some of my 
financial goals for the year. The management-investor relationship have 
been professional. I get alerted of my money being available a day before 
and I get option on how to reinvest. It's been a joy ride.`,
        },
        {
          image: "/aces.png",
          name: "Kehinde Aguda",
          company: "Lagos State, Nigeria",
          text: ` I started forex investment with Acesworld in February 2020 and I've been 
investing up until now because my personal expectations were met and 
Aces delivered the services absolutely! I've been meeting my financial 
expectations since I started in February and the Interest always come on 
due date. My personal experience has an investor has been smooth, no 
complaints whatsoever. `,
        },
        {
          image: "/aces.png",
          name: "Blessing Justin",
          company: "Kaduna state, Nigeria",
          text: `This is the first time I am investing my money and for once I feel at peace... 
I don't even remember or panic about the cash sef cos I just know its super 
safe and growing. Thanks for not giving up on all my enquiry times.`,
        },
      ],
    };
  },
  methods: {
    investNow() {
      if (
        (this.userNumber && this.userEmail && this.userFullName != "") ||
        null
      ) {
        this.contactUrl = `https://api.whatsapp.com/send?phone=2349019881034&text=Hello+I+want+to+invest+with+Acesworld+my+name+is+${this.userFullName}%0Amy+email+addresss+is+${this.userEmail}%0Aand+my+phone+number+is${this.userNumber}`;
        window.location.replace(this.contactUrl);
        this.dialog = false;
      } else {
        alert(
          "please ensure all fields are filled correctly with valid details"
        );
      }
    },
  },
};
</script>


