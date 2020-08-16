
<template>
  <div class="force">
    <!-- landing section -->
    <section class="pb-6 mt-5 px-3 py-3">
      <v-container>
        <v-row no-gutters>
          <v-col cols="12" md="6" class="mt-md-8 text-center my-5">
            <h2 class="display-2 mb-6 my-5">Welcome to</h2>
            <h1 class="display-2 font-weight-bold mb-6 my-5 grow">Quiccly-io</h1>
            <p
              class="body-1"
            >Your one stop shop for all your school needs. We Assure you that you cant go wrong with us order today</p>
            <v-btn class="text-uppercase" color="primary" x-large to="/products" nuxt>Products</v-btn>
            <v-btn class="ml-2 text-uppercase" x-large nuxt to="/about">
              <v-icon left>mdi-magnify</v-icon>About
            </v-btn>
          </v-col>

          <v-col cols="12" md="6" class="landing-image">
            <img src="/feature5.svg" alt height="70%" />
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- partners -->
    <section class="universal partners pa-3">
      <v-container>
        <div class="d-flex justify-center align-center flex-column flex-sm-column flex-md-row">
          <img src="/instagram.png" alt class="rotate" />
          <img src="/dither.png" alt class="rotate" />

          <img src="/longquiccly.png" alt class="rotate" />
        </div>
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
                    class="justify-center font-weight-black text-uppercase"
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
            <div class="display-1">332</div>
          </v-col>
          <v-col cols="6" md="3">
            <div class="text-uppercase caption">Lines of code</div>
            <div class="display-1">12k</div>
          </v-col>
          <v-col cols="6" md="3">
            <div class="text-uppercase caption">Up time</div>
            <div class="display-1">4,344</div>
          </v-col>
          <v-col cols="6" md="3">
            <div class="text-uppercase caption">Active Members</div>
            <div class="display-1">85</div>
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
                    <v-avatar color="primary" size="88">
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
        <div class="display-1 font-weight-bold">The Quiccly-io news letter</div>
        <p class="mt-2">Get the latest product updates and information in your inbox.</p>
        <NewsletterForm />
      </v-container>
      <v-divider class="mt-2"></v-divider>
    </section>
  </div>
</template>
<script>
import NewsletterForm from "../components/NewsletterForm";
export default {
  components: {
    NewsletterForm,
  },
  data() {
    return {
      features: [
        {
          image: "/feature4.svg",
          title: "Tomisinteazer",
          text:
            "connect with us on all platforms through any device , all sales are auto directed to whatsapp messanger for easy access, dont worry all payments are made directy to our bank account, all from your mobile or laptop,ease and comfort for you.",
        },
        {
          image: "/feature2.svg",
          title: "legendary Sage",
          text:
            "trusted delivery service, all our customers are free of hassle and stress just order and pay and expect your goods and products deliverd to your dropzone immediately, no worries no hassle all will be easily be handled by us from that point on.",
        },
        {
          image: "/feature3.svg",
          title: "Quiccly io",
          text:
            "connect with us on all social platforms , Whatsapp, Instagram, twitter and follow us for updates and more as new features are coming soon and will be announced on our various platforms, flex with us online and enjoy our premium sevices to suit your needs.",
        },
      ],
      testimonies: [
        {
          image: "/quiccly-io.jpg",
          name: "Oluwatomisin Babatunde ",
          company: "FUNAAB",
          text: `quiccly you are the N° 1 school retailer. I love ur products.
Henceforth, it's quiccly or no other.`,
        },
        {
          image: "/quiccly-io.jpg",
          name: "Oluwatobi Omotola",
          company: "FUNAAB",
          text: `I had this experience before and I really would
continue to patronize you because your
customer services are good.`,
        },
        {
          image: "/quiccly-io.jpg",
          name: "Ifeoluwa Bankole",
          company: "FUNAAB",
          text: `Woooooow you guys impress me a lot barely 24hrs i made an order 
          and that your delivery service is top notch.`,
        },
      ],
    };
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
.grow {
  animation: slidein 3s ease-out forwards infinite;
  animation-delay: 1s;
}
@keyframes slidein {
  from {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }

  50% {
    -webkit-transform: scale(1.3);
    -ms-transform: scale(1.3);
    transform: scale(1.3);
    color: #673ab7;
  }

  to {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }
}
.rotate:hover {
  -webkit-transform: rotateZ(15deg) scale(1.2);
  -ms-transform: rotateZ(15deg) scale(1.2);
  transform: rotateZ(15deg) scale(1.2);
}
</style>
