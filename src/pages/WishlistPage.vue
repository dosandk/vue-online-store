<template>
  <div class="page-container">
    <h1 class="page-title">WishList</h1>

    <CardsList>
      <template #default="slotProps">
        <TheCard
          :data="slotProps.data"
          @updateCart="updateCart"
          @updateWishlist="updateWishList" />
      </template>
    </CardsList>

    <ThePagination />
  </div>
</template>

<script>
import ThePagination from "@/components/ThePagination";
import CardsList from "@/components/CardsList";
import TheCard from "@/components/TheCard";

export default {
  name: "WishlistPage",
  components: {
    ThePagination,
    CardsList,
    TheCard
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
