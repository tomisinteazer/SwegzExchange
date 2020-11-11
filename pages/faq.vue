<template>
  <v-container>
    <h1 class="text-center primary--text">FAQ</h1>
    <v-expansion-panels class="mt-5">
      <v-expansion-panel v-for="que in Questions" :key="que.Q">
        <v-expansion-panel-header class="font-weight-black primary--text">{{
          que.Q
        }}</v-expansion-panel-header>
        <v-expansion-panel-content
          >Answer : {{ que.Answer }}</v-expansion-panel-content
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
      Questions: [
        {
          Q:` Can I buy bitcoins on 2348102192374?`,
        Answer:" Yes, you can."
        },
        {
        Q: ` Can I buy gift cards on 2348102192374?`,
Answer: `Yes, gift cards and others are available. You can check the site for more.`

        },
        {
          Q:`I know nothing about cryptocurrency, can I still buy or sell cryptocurrency?`,
Answer: `Yes, our trading system is very easy and less technical. All you need is your money.`
        },
        {
         Q:` Is it possible to sell my bitcoins or gift cards on 2348102192374?`,
Answer: `Yes, that's part of our major business at 2348102192374.`
        },
        {
          
Q:`Is bitcoins the only cryptocurrency I can buy or sell?`,
Answer:` No we deal in all cryptocurrency buying and selling.`

        },
        {
          
Q:`How do I buy or sell?`,
Answer:` Go to the homepage and kindly click on the trade icon.
Fill in what you will like to trade and the kind of trade(buying or selling).
You will be automatically redirected to one of our members, where you chat to begin your transactions.or contact us directly on whatsapp or call us on our lines `

        },
        {Q:`Is your platform safe?`,
Answer: `2348102192374 is completely safe.`

        },
        {
          Q:`How do I contact 2348102192374?`,
Answer: `You can reach us via any of this; Email: info2348102192374@gmail.com 
Call: +2348136908208 (9:00am – 5:00pm. Monday – Friday).`

        },
        {
          
Q:`How fast is 2348102192374?`,
Answer: `We reply in a couple of seconds and attend to your demands as fast as possible.`


        },
        {
          Q:`How good are the rates?`,
Answer: `we offer the best rate you can ever imagine.`
          
        }


      ],
    };
  },
};
</script>










