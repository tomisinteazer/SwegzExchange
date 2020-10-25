<template>
  <v-container>
    <h1 class="text-center primary--text">FAQ</h1>
    <v-expansion-panels class="mt-5">
      <v-expansion-panel v-for="que in Questions" :key="que.Q">
        <v-expansion-panel-header class="font-weight-black primary--text">{{
          que.Q
        }}</v-expansion-panel-header>
        <v-expansion-panel-content
          >Answer : {{ que.A }}</v-expansion-panel-content
        >
      </v-expansion-panel>
    </v-expansion-panels>
    <div class="caption mt-2 text-center">
      call
      <nuxt-link to="/contact">contact</nuxt-link>
    </div>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      Questions: [],
    };
  },
};
</script>