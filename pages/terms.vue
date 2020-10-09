<template>
  <v-container>
    <h2 class="primary--text">Terms of Service</h2>
    <h4>
      By opening an Trade portfolio with SwegzExchange, you expressly warrant
      and represent that:
    </h4>

    <div v-for="(item, i) in terms" :key="i">
      <p>{{ item }}</p>
    </div>
    <h4>
      Disclaimer: The company will not take responsibility for any transaction
      not conducted through the official channels.
    </h4>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      terms: [
        "• You are 18 years of age or over and have full capacity to accept the Terms and enter any transaction available through the Platform.",
        "• You must be of sound mind and health.",
        "• You must have a valid bank account that is fully operational.",
        "• You must be able to provide all information as required by the Company.",
        "• You must have valid means of identification and should be able to provide it at the request of the company.",
        "• Should in case the company incure damaging loses as a result of trading, the investor agrees to installment repayment of his/her Trade within 1-4 months.",
      ],
    };
  },
};
</script>
