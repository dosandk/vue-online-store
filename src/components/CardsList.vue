<template>
  <div class="os-products-list">
    <slot v-for="product in products" :data="product"></slot>
  </div>
</template>

<script>
import { products } from '../fixtures/products';

export default {
  name: "CardsList",
  data () {
    return {
      products,
    }
  }
}
</script>

<style scoped>
  .os-products-list {
    display: grid;
    grid-template-columns :repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
    margin: 20px 0;
  }
</style>
