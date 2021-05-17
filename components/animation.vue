<template>
  <div id="header">
    <div class="header-animation">
      <lottie
        :options="defaultOptions"
        :height="500"
        v-on:animCreated="handleAnimation"
      />
    </div>
  </div>
</template>

<script>
import Lottie from "vue-lottie";
import * as animationData from "../assets/anime.json";
// Had to store my animation Json and images inside of the "public" folder
// Images weren't loading for me, so I'm using the below method to update their location or 'u' value correctly
var publicPath = process.env.BASE_URL;
animationData.assets.forEach((item) => {
  item.u = publicPath + "animations/HomepageHeader/images/";
});
export default {
  name: "HomepageHeader",
  components: {
    lottie: Lottie,
  },
  data() {
    return {
      defaultOptions: { animationData: animationData.default },
      animationSpeed: 1,
      anim: null,
    };
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim;
    },
  },
};
</script>

<style scoped>
#header {
  min-height: 450px;
  display: block;
}
.header-animation {
  /* make it closer to the search button */
  margin-top: -50px;
}
</style>