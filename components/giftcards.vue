<template>
  <div>
    <p class="display-1 text-center py-4 primary white--text">Giftcards</p>

    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left primary--text">Type</th>
            <th class="text-left primary--text">value</th>
            <th class="text-left primary--text">Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in rates" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.minQuantity }} -{{ item.maxQuantity }}</td>
            <td>{{ item.value }}/$</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      allrates: [],
    };
  },
  methods: {
    getRates() {
      this.$fireStore.collection("rates").onSnapshot((data) => {
        data.forEach((e) => {
          this.allrates.push({ ...e.data(), id: e.id });
        });
        console.log(this.rates);
      });
    },
    compare(a, b) {
      let first = parseInt(a.rank);
      let sec = parseInt(b.rank);
      if (first < sec) {
        return -1;
      }
      if (first > sec) {
        return 1;
      }
      return 0;
    },
  },
  computed: {
    rates: function () {
      return this.allrates
        .filter((e) => e.type === "giftcards")
        .sort((a, b) => parseInt(a.minQuantity) - parseInt(b.minQuantity));
    },
  },
  mounted() {
    this.getRates();
  },
};
</script>