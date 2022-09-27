<template>
  <div class="page-container">
    <h1 class="page-title">Cart</h1>
    <TheCart :items="products" />
  </div>
</template>

<script>
import TheCart from "@/components/TheCart";

export default {
  name: "CartPage",
  data() {
    return {
      products: this.$store.state.cart
    }
  },
  components: {
    TheCart
  }
}
</script>

<style scoped>

</style>
