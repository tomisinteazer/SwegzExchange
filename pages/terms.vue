<template>
  <v-container>
    <h2>Terms</h2>
    <div v-for="(item,i) in terms" :key="i">
      <p>{{item}}</p>
    </div>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      terms: [
        "• All clients must be of legal age (18 and above). This means all clients of the firm must be eligible to enter contracts.",
        "• All clients must be of sound mind and health.",
        "• Clients must be able to provide all information as required by the Company.",
        "• Clients must have valid means of identification and should be able to provide it at the request of the company.",
        "• In case of unlikely unfavorable market conditions that result in damaging losses, the company will pay back the capital of the investors without the accrued interest within a space of 1-4 months.",
      ],
    };
  },
};
</script>
