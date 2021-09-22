<template>
  <div class="col-xs-6 col-md-4 p-4">
    <div class="card border-primary ">
      <div class="card card-img">
        <img src="" class="card-img-top" alt="" />
      </div>
      <div class="card-body">
        <div class="card-text">
          <h3>{{ stock.name }}</h3>
          <p>
            Last Price:({{ stock.lastPrice }})<br />
            <small>Old Price: ({{ stock.oldPrice }}) </small>
          </p>
        </div>
        <div
          class="d-flex d-inline-block justify-content-center align-items-center"
        >
          <div class="float-start">
            <label for="quantity">Quantity</label> <br />
            <input type="number" placeholder="Quantity" v-model="quantity" />
          </div>
          <div class="float-end">
            <div class="btn btn-success btn-sm mt-3" @click="buyStock">
              Buy
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0,
    };
  },
  methods: {
    buyStock() {
      const orders = {
        stockId: this.stock.id,
        lastPrice: this.stock.lastPrice,
        oldPrice: this.stock.oldPrice,
        quantity: this.quantity,
      };
      this.quantity = 0;

      console.log(orders);
    },
  },
};
</script>

<style scoped>
.card-body {
  font-family: "Arvo", Arial, Helvetica, sans-serif !important;
}
input {
  width: 50%;
  outline: none;
  focus: none;
  background-color: #ddd;
}
small {
  font-size: 0.5rem;
  color: red;
  text-decoration: line-through;
}
</style>
