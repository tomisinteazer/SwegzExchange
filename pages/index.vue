
<template>
  <div class="force">
    <!-- landing section -->
    <section class="my-12">
      <v-row no-gutters>
        <v-col cols="12" md="6" class="mt-md-8 text-center">
          <h2 class="display-1 mb-6 my-5">Welcome to</h2>
          <h1 class="display-2 primary--text font-weight-bold mb-6 my-5">
            SwegzTradeLink
          </h1>
          <p class="body-1">
            The fastest and safest exchange platform
to trade and convert all your 
Bitcoins, Digital assets, Giftcards, Smart devices and E-commerce

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
                >Trade</v-btn
              >
            </template>

            <v-card>
              <v-card-title class>trade with SwegzTradeLink</v-card-title>

              <v-card-text
                >Fill in your trade details below and submit. Transaction will
                proceed immediately.</v-card-text
              >
              <v-form v-model="valid">
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-select
                        v-model="detailsOfTrade"
                        :items="tradeDetails"
                        label="Cryptocurrency /Giftcards /other"
                      ></v-select>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <v-select
                        v-model="typeOfTrade"
                        :items="tradeType"
                        label="Buy / Sell"
                      ></v-select>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="tradeNow()">Submit</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-btn class="ml-2 text-uppercase" x-large nuxt to="/about">
            <v-icon left>mdi-magnify</v-icon>About
          </v-btn>
        </v-col>

        <v-col cols="12" md="6" class="landing-image pt-12">
          <v-img contain max-height="300" src="/feature1.svg"></v-img>
        </v-col>
      </v-row>
    </section>

    <!-- features -->

    <section class="text-center primary pb-16">
      <v-container>
        <div class="display-1 white--text font-weight-bold my-14">
          <p>Get the best trading experience</p>
        </div>
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
    <svg viewBox="0 0 1920 135">
      <defs>
        <filter
          id="Path_1006"
          x="-152.573"
          y="-460.806"
          width="2324.175"
          height="631.369"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha"></feOffset>
          <feGaussianBlur stdDeviation="25" result="blur"></feGaussianBlur>
          <feFlood flood-opacity="0.161"></feFlood>
          <feComposite operator="in" in2="blur"></feComposite>
          <feComposite in="SourceGraphic"></feComposite>
        </filter>
        <clipPath id="clip-Home">
          <rect width="1920" height="135"></rect>
        </clipPath>
      </defs>
      <g id="Home" clip-path="url(#clip-Home)">
        <rect width="1920" height="135" fill="#ffffff00"></rect>
        <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Path_1006)">
          <path
            id="Path_1006-2"
            data-name="Path 1006"
            d="M-9948.83,7778.837s223.576,20.394,386.754,27.238,264.528,2.657,433.32-7.967,394.238-56.657,849.857-44.854,433.191,56.657,433.191,56.657l-37.3-459.818H-8937.946s-717.868,3.541-721.409,0S-9970.4,7333.23-9970.4,7333.23l-47.161,238.25,15.345,197.12Z"
            transform="translate(9941 -7718)"
            fill="#691616"
            stroke="#691616"
            stroke-width="2"
          ></path>
        </g>
      </g>
    </svg>

    <section class="universal pa-5">
      <v-container class="text-center">
        <v-row>
          <v-col cols="6" md="3">
            <div class="text-uppercase caption">Days</div>
            <div class="display-1">1790+</div>
          </v-col>
          <v-col cols="6" md="3">
            <div class="text-uppercase caption">Transactions</div>
            <div class="display-1">10k+ </div>
          </v-col>
          <v-col cols="6" md="3">
            <div class="text-uppercase caption">Up time</div>
            <div class="display-1">24/7</div>
          </v-col>
          <v-col cols="6" md="3">
            <div class="text-uppercase caption">Active Members</div>
            <div class="display-1">235+</div>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <!-- ambassadors-->
    <section class="my-12">
      <v-container>
        <v-row no-gutters>
          <v-col cols="12" md="6" class="landing-image">
            <v-img contain max-height="300" src="/feature1.svg"></v-img>
          </v-col>
          <v-col cols="12" md="6" class="mt-md-8 text-center">
            <p class="display-1 font-weight-thin">
              SwegzTradeLink is a simple, safe and secure platform that provides
              alternative solutions to payments through the use of Bitcoin,
              Perfect Money and Giftcard Technology.
            </p>
           
           
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="pa-5 primary">
      <v-container class="text-center">
        <h2 class="display-1 ma-4 white--text">Our users are Happy!</h2>

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
                    <v-avatar size="88">
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
    <svg viewBox="0 0 1920 135">
      <defs>
        <filter
          id="Path_1006"
          x="-152.573"
          y="-460.806"
          width="2324.175"
          height="631.369"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha"></feOffset>
          <feGaussianBlur stdDeviation="25" result="blur"></feGaussianBlur>
          <feFlood flood-opacity="0.161"></feFlood>
          <feComposite operator="in" in2="blur"></feComposite>
          <feComposite in="SourceGraphic"></feComposite>
        </filter>
        <clipPath id="clip-Home">
          <rect width="1920" height="135"></rect>
        </clipPath>
      </defs>
      <g id="Home" clip-path="url(#clip-Home)">
        <rect width="1920" height="135" fill="#ffffff00"></rect>
        <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Path_1006)">
          <path
            id="Path_1006-2"
            data-name="Path 1006"
            d="M-9948.83,7778.837s223.576,20.394,386.754,27.238,264.528,2.657,433.32-7.967,394.238-56.657,849.857-44.854,433.191,56.657,433.191,56.657l-37.3-459.818H-8937.946s-717.868,3.541-721.409,0S-9970.4,7333.23-9970.4,7333.23l-47.161,238.25,15.345,197.12Z"
            transform="translate(9941 -7718)"
            fill="#691616"
            stroke="#691616"
            stroke-width="2"
          ></path>
        </g>
      </g>
    </svg>

    <section class="text-center pt-2">
      <v-container>
        <div class="text-h5 primary--text">SwegzTradeLink newsletter</div>
        <p class="mt-2">Subscribe to SwegzTradeLink newsletter</p>
        <NewsletterForm />
      </v-container>
      <v-divider class="mt-2"></v-divider>
    </section>
  </div>
</template>
<script>
//contact@swegztradelink.com
//Forexway007
import NewsletterForm from "../components/NewsletterForm";
export default {
  components: {
    NewsletterForm,
  },
  data() {
    return {
      valid: true,

      tradeType: ["Buying", "Selling"],
      tradeDetails: ["Cryptocurrency", "Giftcards", "others"],
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length >= 3) || "Name greater than 5 characters",
      ],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      dialog: false,
      features: [
        {
          image: "/feature4.svg",
          title: "At an incredible speed",
          text:"Time is of the essence, we buy and sell your cryptocurrency and gift cards at the shortest time possible."        },
        {
          image: "/feature2.svg",
          title: "Secure Platform",
          text:"The safety of your funds is our utmost priority, our platform is secured for any transaction you perform. Trade with us with both eyes closed."        },
        {
          image: "/features.svg",
          title: "At the best market rate",
          text:"Being shortchanged isn't an option, get the actual worth of your bitcoins and gift cards on SwegzTradeLink."        },
      ],
      testimonies: [
        {
          image: "/users.svg",
          name: "Papa ",
          company: "Lagos State, Nigeria",
          text: ` Started trading with SwegzTradeLink Trade 7months ago,so far, it has 
been a great experience. I've been able to meet up with some of my 
financial goals for the year. The management-investor relationship have 
been professional. I get alerted of my money being available a day before 
and I get option on how to reinvest. It's been a joy ride.`,
        },
        {
          image: "/users.svg",
          name: "Kehinde Aguda",
          company: "Lagos State, Nigeria",
          text: ` I started cryptoTrade with SwegzTradeLink in February 2020 and I've been 
trading up until now because my personal expectations were met and 
Swegzdelivered the services absolutely! I've been meeting my financial 
expectations since I started in February and the Interest always come on 
due date. My personal experience has an investor has been smooth, no 
complaints whatsoever. `,
        },
        {
          image: "/users.svg",
          name: "Blessing Justin",
          company: "Kaduna state, Nigeria",
          text: `This is the first time I am trading my money and for once I feel at peace... 
I don't even remember or panic about the cash sef cos I just know its super 
safe and growing. Thanks for not giving up on all my enquiry times.`,
        },
      ],
      ambassadors: [{ image: "src", information: "txt", name: "name" }],
      typeOfTrade: "",
      detailsOfTrade: "",
    };
  },
  methods: {
    tradeNow() {
      if ((this.detailsOfTrade && this.typeOfTrade != "") || null) {
        this.contactUrl = `https://api.whatsapp.com/send?phone=2348102192374&text=Hello+I+want+to+trade+with+SwegzTradeLink+I+will+be+${this.typeOfTrade}%0Aand+the+Type+is+${this.detailsOfTrade}`;
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


