<template>
  <div class="page-container">
    <h1 class="page-title">Cart</h1>
    <TheCart :items="products" @removeProduct="removeProduct"/>
  </div>
</template>

<script>
import TheCart from "@/components/TheCart";

export default {
  name: "CartPage",
  components: {
    TheCart
  },
  methods: {
    removeProduct(id) {
      this.$store.commit('REMOVE_FROM_CART', id);
    }
  },
  computed: {
    products () {
      return this.$store.state.cart;
    }
  }
}
</script>

<style scoped>

</style>
