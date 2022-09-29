<template>
  <div class="cart-container">
    <ul class="cart-list">
      <CartItem
          v-for="product in products"
          :key="product.id"
          :data="product"
          @updateTotal="updateTotal"
          @removeProduct="removeProduct"
        />
    </ul>
    <div class="footer">
      <div class="cart-total">
        Total products: <span>{{ totalPrice }}</span>
      </div>
<!--      NOTE: temporary commented-->
<!--      <button class="order-btn os-btn-primary">Order</button>-->
    </div>
  </div>
</template>

<script>
import CartItem from "@/components/CartItem";

const countTotal = (data = []) => {
  return data.reduce((accum, item) => {
    return accum + item.price;
  }, 0);
};

export default {
  name: "TheCart",
  props: ['items'],

  components: {
    CartItem
  },
  data () {
    return {
      products: this.items,
      totalPrice: countTotal(this.items)
    }
  },
  methods: {
    updateTotal (price) {
      this.totalPrice += price;
    },
    removeProduct (id) {
      this.$emit('remove-product', id);
    }
  },
  watch: {
    items (newValue) {
      this.products = newValue;
    }
  }
}
</script>

<style scoped>
.cart-container {
  padding: 10px;
}

.cart-list {
  padding: 0;
  margin: 0;
}

.item-preview img {
  width: 100%;
  max-height: 40px;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cart-total {
  padding: 10px;
}
</style>
