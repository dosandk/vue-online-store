<template>
  <div class="page-container">
    <h1 class="page-title">Cart</h1>
    <TheCart :items="products" />
  </div>
</template>

<script>
import TheCart from "@/components/TheCart";
import {products} from "@/fixtures/products";

export default {
  name: "CartPage",
  data () {
    return {
      products
    }
  },
  components: {
    TheCart
  }
}
</script>

<style scoped>

</style>
