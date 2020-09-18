<template>
  <div class="pb-6 pt-4 text-center">
    <v-container>
      <h1 class="display-2 mb-6 text-uppercase">Contact us</h1>
      <div class="mx-auto" style="max-width: 700px">
        <p class="body-1 font-weight-bold">Send Us a Message and we will respond as soon as possible</p>
        <v-form class="mt-5">
          <v-text-field label="name" outlined></v-text-field>
          <v-text-field label="email" outlined></v-text-field>
          <v-textarea label="message" outlined></v-textarea>
          <v-btn color="primary" x-large block>Send</v-btn>
        </v-form>
      </div>
    </v-container>
  </div>
</template>
