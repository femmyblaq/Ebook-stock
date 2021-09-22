<template>
  <div>
    <appStock />
  </div>
</template>

<script>
import stock from "./Stocks/Stock.vue";
export default {
  components: {
    appStock: stock,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
