<template>
  <div class="row">
    <!-- <h3>Shocks u really need to show up</h3> -->
    <app-stock
      v-for="stock in stocks"
      :key="stock.id"
      :stock="stock"
    ></app-stock>
  </div>
</template>

<script>
import stock from "./Stock.vue";
export default {
  components: {
    appStock: stock,
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
