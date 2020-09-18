<template>
  <v-container>
    <h1>FAQ</h1>
    <v-expansion-panels class="mt-5">
      <v-expansion-panel v-for="que in Questions" :key="que.Q">
        <v-expansion-panel-header class="font-weight-black">{{que.Q}}</v-expansion-panel-header>
        <v-expansion-panel-content>Answer : {{que.A}}</v-expansion-panel-content>
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
      Questions: [
        {
          Q: "Is your company registered?",
          A:
            "Yes, we are registered with the Corporate Affairs commission with RC number 3152773.",
        },
        {
          Q: "Where does my money go?",
          A: "Every penny invested with us is invested into the forex market.",
        },
        {
          Q: "What is the minimum amount I can invest?",
          A: "The minimum amount that can be invested with us is N50,000.",
        },
        {
          Q: "Is my money safe?",
          A:
            "The risk management policy is confidential to the company, we have an hedge fund strategy that makes us to maximize profits and minimize losses.",
        },

        {
          Q: "Can you give more than 20%?",
          A:
            "The 20% interest rate allows for proper risk management and profit maximization. That way we don’t run out of funds to pay our investors.",
        },
        {
          Q: "Do you make more than the percentage offered?",
          A:
            "Yes, we certainly do. But there are also times when we make losses so we turn our excess profits into reserves to ensure steady payouts for investors.",
        },
        {
          Q: "How long before I get paid?",
          A:
            "Investments made with us mature after 25 working days but there are also custom investment plans that can range from 2 months to a year.",
        },
        {
          Q: "How do I request payout?",
          A:
            "You only need to provide a signed copy of your MOU and your account details on your due date and you will get paid.",
        },
        {
          Q: "Can I have multiple investments?",
          A:
            "Yes, you can have as many investments as you want. They will all be properly documented with different MOUs.",
        },

        {
          Q: "What binds the investments I make?",
          A:
            "We provide a signed Memorandum of Understanding (in pdf format) that serves as an agreement and an obligation to pay.",
        },

        {
          Q: "In case of an emergency, Can I withdraw before my due date?",
          A:
            "Yes you can. However, the accrued interest will be forfeited and payment will be processed in 2-4 working days.",
        },
      ],
    };
  },
};
</script>