<template>
  <div class="page-container">
    <h1 class="page-title">WishList</h1>

    <template v-if="products.length">
      <CardsList :data="products" @update-cart="updateCart">
        <template #default="slotProps">
          <TheCard
            :data="slotProps.data"
            :showFooter="false"
            @updateCart="updateCart"
            @updateWishlist="updateWishList" />
        </template>
      </CardsList>

<!--      <ThePagination />-->
    </template>

    <div v-else>
      There is no data in the wishlist
    </div>
  </div>
</template>

<script>
// import ThePagination from "@/components/ThePagination";
import CardsList from "@/components/CardsList";
import TheCard from "@/components/TheCard";

export default {
  name: "WishlistPage",
  components: {
    // ThePagination,
    CardsList,
    TheCard
  },
  data() {
    return {
      products: this.$store.state.wishList
    }
  },
  methods: {
    updateCart() {
      console.error('updateCart');
    },
    updateWishList() {
      console.error('updateWishList');
    }
  }
}
</script>

<style scoped>
.wish-card-container {
  position: relative;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
</style>
