<template>
  <div class="herosection">
    <no-ssr
      ><v-vanta effect="waves" :options="options" class="mt-n16"></v-vanta
    ></no-ssr>
    <!-- landing section -->
    <section
      class=" mx-6 mt-md-16 pt-md-16"
      style="height: 75vh; background-color: #690018"
    >
      <div class="mx-md-16 my-lg-16 pt-md-10 ">
        <div class="">
          <div class="mx-md-16">
            <v-row no-gutters>
              <v-col
                cols="12"
                md="6"
                class="text-md-left text-center text-sm-center mt-md-0 mt-14 px-md-16"
                text-md-center
                style="z-index: 99;"
              >
                <v-card
                  elevation="0"
                  class="nostyle white--text"
                  style="height:300px"
                >
                  <h2 class="display-1 mb-6 my-5">Welcome to</h2>
                  <h1 class="display-1 font-weight-bold mb-6 my-5">
                    Swegz Tradelink
                  </h1>
                  <p class="body-1">
                    The fastest and safest exchange platform to Trade and
                    convert all your Bitcoins, Digital assets, Giftcards, Smart
                    devices and E-commerce
                  </p>
                  <div>
                    <v-dialog v-model="dialog" width="500">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          class="text-uppercase black--text "
                          color="#ffeebb"
                          x-large
                          dark
                          block
                          v-bind="attrs"
                          v-on="on"
                          >Trade</v-btn
                        >
                      </template>

                      <v-card>
                        <v-card-title class
                          >Trade with Swegz Tradelink</v-card-title
                        >

                        <v-card-text
                          >Fill in your Trade details below and submit.
                          Transaction will proceed immediately.</v-card-text
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
                          <v-btn color="primary" @click="tradeNow()"
                            >Trade</v-btn
                          >
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </div>

                  <v-dialog v-model="rateview" width="1000">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        v-bind="attrs"
                        v-on="on"
                        class=" text-uppercase mt-4"
                        block
                        x-large
                      >
                        <v-icon left>mdi-magnify</v-icon>Our Rates for Today
                      </v-btn>
                    </template>

                    <v-card>
                      <v-img
                        src="https://therecipearchive.herokuapp.com/newpin.jpg"
                      ></v-img>

                      <v-card-title class
                        >Trade with Swegz Tradelink</v-card-title
                      >

                      <v-card-text
                        >Fill in your Trade details below and submit.
                        Transaction will proceed immediately.</v-card-text
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
                        <v-btn color="primary" @click="tradeNow()">Trade</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-card>
              </v-col>

              <v-col cols="12" md="6" class="py-6 mb-md-0 mb-16">
                <Pcanime />
                <!-- <v-img contain max-height="300" src="/feature1.svg"></v-img> -->
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="mx-md-16 mx-6 mt-md-16 pt-md-16">
      <div class="mx-md-16 my-lg-16">
        <div class="mx-md-16">
          <div class="mx-md-16"></div></div></div></section> -->

    <!-- features -->

    <section class="text-center primary pb-16 pt-10">
      <section class=" pt-md-16">
        <div class=" my-lg-16">
          <div class="">
            <div class="mx-md-16 mx-2">
              <v-div class="mt-16  mt-md-0">
                <v-card
                  elevation="0"
                  class="display-1 white--text font-weight-bold my-10 nostyle mt-16 mt-md-0"
                >
                  <p>Get the best trading experience</p>
                </v-card>
                <v-row class="mx-lg-2 mt-5">
                  <v-col
                    v-for="(feature, i) in features"
                    :key="i"
                    cols="12"
                    md="4"
                    class="px-6"
                  >
                    <v-hover>
                      <template v-slot="{ hover }">
                        <v-card
                          class="py-12 mx-4 rounded-xl"
                          :elevation="hover ? 24 : 2"
                          style="height: 370px"
                        >
                          <img
                            class="mb-5"
                            height="80px"
                            contain
                            :src="feature.image"
                          />

                          <h1 class="justify-center">{{ feature.title }}</h1>

                          <v-card-text
                            class="subtitle-1"
                            v-text="feature.text"
                          ></v-card-text>
                        </v-card>
                      </template>
                    </v-hover>
                  </v-col>
                </v-row>
              </v-div>
            </div>
          </div>
        </div>
      </section>
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
            fill="#690018"
            stroke="#690018"
            stroke-width="2"
          ></path>
        </g>
      </g>
    </svg>
    <section class="mx-md-16 mx-6 mt-md-16 pt-md-16">
      <div class="mx-md-16">
        <div class="mx-md-16">
          <div class="mx-md-16">
            <v-container class="text-center">
              <v-row>
                <v-col cols="6" md="3">
                  <div class="text-uppercase caption">Days</div>
                  <div class="display-1">1790+</div>
                </v-col>
                <v-col cols="6" md="3">
                  <div class="text-uppercase caption">Transactions</div>
                  <div class="display-1">10k+</div>
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

            <!-- ambassadors-->
            <section class="my-12">
              <v-container>
                <v-row no-gutters>
                  <v-col cols="12" md="6" class="landing-image">
                    <Anime />
                  </v-col>
                  <v-col cols="12" md="6" class="text-center my-md-16">
                    <p class="display-1 font-weight-thin">
                      Swegz Tradelink is a simple, safe and secure platform that
                      provides alternative solutions to payments through the use
                      of Bitcoin, Perfect Money and Giftcard Technology.
                    </p>
                  </v-col>
                </v-row>
              </v-container>
            </section>
            <!-- <section>
              <v-row no-gutters>
                <v-col cols="12" md="6">
                  <v-card elevation="2" class="mx-6 my-6"><Rates /> </v-card
                ></v-col>
                <v-col cols="12" md="6"
                  ><v-card elevation="2" class="mx-6 my-6"
                    ><Giftcards /> </v-card></v-col
              ></v-row>
            </section> -->
          </div>
        </div>
      </div>
    </section>

    <section class="my-16">
      <v-container class="text-center">
        <h2 class="display-1 my-10">Our users are Happy!</h2>
        <v-carousel
          cycle
          hide-delimiter-background
          :show-arrows="false"
          hide-delimiters
        >
          <v-carousel-item
            v-for="({ image, text, name, company }, i) in testimonies"
            :key="i"
          >
            <v-hover>
              <template v-slot="{ hover }">
                <v-card
                  class="mx-auto py-auto text-center primary rounded-xl px-md-10 px-sm-4"
                  max-width="1200"
                  style="height: 400px"
                  :elevation="hover ? 24 : 1"
                >
                  <div class="py-md-6 py-4">
                    <v-avatar size="88">
                      <img :src="image" />
                    </v-avatar>
                  </div>

                  <v-card-text class="white--text">
                    <div class="subtitle-1white--text px-4 my-md-6">
                      {{ text }}
                    </div>
                    <div class="subtitle-1 font-weight-bold my-md-5 px-4">
                      {{ name }}
                    </div>
                    <div class="caption">{{ company }}</div>
                  </v-card-text>
                </v-card>
              </template>
            </v-hover>
          </v-carousel-item>
        </v-carousel>

        <!-- <v-row>
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
        </v-row> -->
      </v-container>
    </section>
    <!-- <svg viewBox="0 0 1920 135">
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
            fill="#690018"
            stroke="#690018"
            stroke-width="2"
          ></path>
        </g>
      </g>
    </svg> -->

    <section class="text-center">
      <v-hover>
        <template v-slot="{ hover }">
          <v-card
            class="mx-md-auto mx-4 py-auto text-center rounded-xl px-md-10 px-sm-4"
            max-width="900"
            style="height: 400px"
            :elevation="hover ? 24 : 1"
          >
            <v-container class="py-md-16 px-12">
              <div class="text-h5 accenttext--text font-weight-bold my-4">
                Want updates straight to your inbox?
              </div>
              <p class="my-md-6">
                Enter your email to get the latest news from Swegz Tradelink,
                and knowledge you need to Trade like an expert.
              </p>
              <NewsletterForm />
            </v-container>
          </v-card>
        </template>
      </v-hover>
    </section>
    <v-divider class="mt-2"></v-divider>
  </div>
</template>
<script>
import Giftcards from "../components/giftcards.vue";
//contact@Swegz Tradelink.com
//Forexway007
import Anime from "../components/animation.vue";
import Pcanime from "../components/animationtwo.vue";
import VVanta from "vue-vanta";
import NewsletterForm from "../components/NewsletterForm";
import Rates from "../components/rates.vue";
export default {
  components: {
    NewsletterForm,
    Anime,
    Pcanime,
    VVanta,

    Rates,
    Giftcards
  },
  data() {
    return {
      valid: true,
      options: {
        mouseControls: true,
        rateview: false,
        touchControls: true,
        gyroControls: false,
        minHeight: 800.0,

        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xff690018,
        shininess: 0.0,
        waveHeight: 40.0,
        waveSpeed: 1.3,
        zoom: 0.97
      },

      tradeType: ["Buying", "Selling"],
      tradeDetails: ["Cryptocurrency", "Giftcards", "others"],
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length >= 3) || "Name greater than 5 characters"
      ],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      dialog: false,
      features: [
        {
          image: "/feature4.svg",
          title: "At an incredible speed",
          text:
            "Time is of the essence, we buy and sell your cryptocurrency and gift cards at the shortest time possible."
        },
        {
          image: "/feature2.svg",
          title: "Secure Platform",
          text:
            "The safety of your funds is our utmost priority, our platform is secured for any transaction you perform. Trade with us with both eyes closed."
        },
        {
          image: "/features.svg",
          title: "At the best market rate",
          text:
            "Being shortchanged isn't an option, get the actual worth of your bitcoins and gift cards on Swegz Tradelink."
        }
      ],
      testimonies: [
        {
          image: "/users.svg",
          name: "Papa ",
          company: "Lagos State, Nigeria",
          text: ` Started trading with Swegz Tradelink Trade 7months ago,so far, it has 
been a great experience. I've been able to meet up with some of my 
financial goals for the year. The management-investor relationship have 
been professional. I get alerted of my money being available a day before 
and I get option on how to reinvest. It's been a joy ride.`
        },
        {
          image: "/users.svg",
          name: "Kehinde Aguda",
          company: "Lagos State, Nigeria",
          text: ` I started cryptoTrade with Swegz Tradelink in February 2020 and I've been 
trading up until now because my personal expectations were met and 
Swegzdelivered the services absolutely! I've been meeting my financial 
expectations since I started in February and the Interest always come on 
due date. My personal experience has an investor has been smooth, no 
complaints whatsoever. `
        },
        {
          image: "/users.svg",
          name: "Blessing Justin",
          company: "Kaduna state, Nigeria",
          text: `This is the first time I am trading my money and for once I feel at peace... 
I don't even remember or panic about the cash sef cos I just know its super 
safe and growing. Thanks for not giving up on all my enquiry times.`
        }
      ],
      ambassadors: [{ image: "src", information: "txt", name: "name" }],
      typeOfTrade: "",
      detailsOfTrade: ""
    };
  },
  methods: {
    tradeNow() {
      if ((this.detailsOfTrade && this.typeOfTrade != "") || null) {
        this.contactUrl = `https://api.whatsapp.com/send?phone=2348102192374&text=Hello+I+want+to+Trade+with+Swegz Tradelink+I+will+be+${this.typeOfTrade}%0Aand+the+Type+is+${this.detailsOfTrade}`;
        window.location.replace(this.contactUrl);
        this.dialog = false;
      } else {
        alert(
          "please ensure all fields are filled correctly with valid details"
        );
      }
    }
  }
};
</script>
<style>
.herosection {
  background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23690018' fill-opacity='0.12' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
  /* Full height */

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: repeat;
  background-size: cover;
}
.nostyle {
  background-color: #ffffff00 !important;
}
</style>
