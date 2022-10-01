<template>
  <div class="os-product-card">
    <div class="os-product-img" :style="{backgroundImage: `url(${product.images[0].url})`}"></div>

    <div class="os-product-content">
      <div class="os-product-price-wrapper">
        <div class="os-product-rating">
          <span>{{ product.rating }}</span>
          <i class="bi bi-star"></i>
        </div>

        <div class="os-product-price">{{ product.price }} USD</div>
      </div>

      <h5 class="os-product-title">{{ product.title }}</h5>
      <p class="os-product-description">{{ product.description.slice(0, 50) + '...' }}</p>
    </div>

    <footer class="os-product-footer" v-if="footer">
      <button
          @click="updateWishList"
          :class="['os-btn-default', 'add-to-wishlist-btn', { active: wishListActive }]">
        <i class="bi bi-heart"></i>
        <i class="bi bi-heart-fill"></i>
        Wishlist
      </button>
      <div class="btns-separator"></div>
      <button
          @click="updateCart"
          :class="['os-btn-default', 'add-to-cart-btn', { active: cartActive }]">
        <i class="bi bi-cart"></i>
        <i class="bi bi-cart-check-fill"></i>
        Cart
      </button>
    </footer>
  </div>
</template>

<script>
export default {
  name: "TheCard",
  props: ['data', 'showFooter', 'isExistedInWishList', 'isExistedInCart'],
  data() {
    return {
      product: this.data,
      wishListActive: this.isExistedInWishList,
      cartActive: this.isExistedInCart,
      footer: this.showFooter
    }
  },
  methods: {
    updateCart() {
      this.$emit('update-cart', this.product.id);
    },
    updateWishList() {
      this.$emit('update-wishlist', this.product.id);
    }
  },
  watch: {
    isExistedInWishList (newValue) {
      this.wishListActive = newValue;
    },
    isExistedInCart (newValue) {
      this.cartActive = newValue;
    }
  }
}
</script>

<style scoped>
.os-product-card {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.13);
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  display: grid;
  align-content: space-between;
  grid-template-rows: 0.5fr 0.5fr 40px;
}

.os-product-img {
  display: flex;
  height: 150px;
  justify-content: center;
  margin: 12px 12px 0;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center
}

.os-product-content {
  padding: 10px 20px;
}

.os-product-price-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px
}

.os-product-rating {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  max-width: 70px;
  padding: 6px 12px;
  border-radius: 3px;
  background-color: var(--primary-bg);
  color: #fff;
  font-size: .875rem;
  font-weight: 400
}

.os-product-price-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px
}

.os-product-price {
  color: #2c2c2c;
  font-size: 1.125rem;
  font-weight: 400
}

.os-btn-default.active {
  background-color: var(--primary-bg) !important;
  color: white !important;
}

.os-product-title,
.os-product-description {
  margin: 0;
  font-weight: normal;
  color: #2c2c2c
}

.os-product-title {
  font-size: 1rem;
  margin-bottom: 8px
}

.os-product-description {
  font-size: 0.75rem
}

.os-product-footer {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
}

.os-product-footer button {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0
}

.os-product-footer button i {
  margin-right: 3px;
}

.btns-separator {
  height: 100%;
  width: 1px;
  background: lightgray;
}

.add-to-wishlist-btn .bi-heart-fill {
  display: none;
}

.add-to-cart-btn .bi-cart-check-fill {
  display: none;
}

.add-to-wishlist-btn.active .bi-heart {
  display: none;
}

.add-to-cart-btn.active .bi-cart {
  display: none;
}

.add-to-wishlist-btn.active .bi-heart-fill {
  display: inline-block;
}

.add-to-cart-btn.active .bi-cart-check-fill {
  display: inline-block;
}
</style>
