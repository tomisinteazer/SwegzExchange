<!--<template>
  
</template>-->
<template>
  <div class="text--primary">
    <!-- Using the elevation prop -->
    <v-hover>
      <template v-slot="{ hover }">
        <v-card :elevation="hover ? 24 : 6" class="mx-auto pa-6">
          <v-banner two-line>
            <v-avatar slot="icon" color="deep-purple accent-4" size="40">
              <v-icon icon="mdi-lock" color="white">mdi-lock</v-icon>
            </v-avatar>Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.
            <template
              v-slot:actions
            >
              <v-btn text color="deep-purple accent-4">Action</v-btn>
              <v-btn text color="deep-purple accent-4">Action</v-btn>
            </template>
          </v-banner>
        </v-card>
      </template>
    </v-hover>

    <div class="my-6"></div>

    <!-- Using a dynamic class -->
    <v-hover>
      <template v-slot="{ hover }">
        <div
          :class="`elevation-${hover ? 24 : 6}`"
          class="mx-auto pa-6 transition-swing"
        >Class based elevation</div>
      </template>
    </v-hover>
  </div>
</template>