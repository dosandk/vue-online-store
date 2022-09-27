<template>
  <div class="page-container">
    <h1 class="page-title">Products</h1>

    <div class="filters-panel">
      <SearchBox/>
      <div class="list-view-controls">
        <i :class="['bi', 'bi-list', { active: activeComponent === 'SortableTable' }]"
           @click="showTableView"></i>
        <i :class="['bi', 'bi-grid', { active: activeComponent === 'CardsList' }]"
           @click="showGridView"></i>
      </div>
    </div>

    <InfinityList>
      <SortableTable
          v-if="activeComponent === 'SortableTable'"
          :data="products"
          :tableConfig="tableConfig"/>

      <CardsList
          v-if="activeComponent === 'CardsList'"
          :data="products">
        <template v-slot="slotProps">
          <TheCard
              :data="slotProps.data"
              @updateCart="updateCart"
              @updateWishlist="updateWishList"/>
        </template>
      </CardsList>
    </InfinityList>
  </div>
</template>

<script>
import SearchBox from "@/components/SearchBox";
import SortableTable from "@/components/SortableTable";
import CardsList from "@/components/CardsList";

import {tableConfig} from './sortable-table-config';
import InfinityList from "@/components/InfinityList";
import TheCard from "@/components/TheCard";

export default {
  name: "MainPage",
  components: {
    SearchBox,
    SortableTable,
    CardsList,
    InfinityList,
    TheCard
  },
  data() {
    return {
      activeComponent: 'CardsList',
      products: [],
      tableConfig
    }
  },
  methods: {
    async loadProducts() {
      try {
        const response = await fetch(`${process.env.VUE_APP_BACKEND_URL}api/rest/products?_start=0&_end=10`);
        this.products = await response.json();
      } catch (error) {
        console.error(`Something went wrong: ${error.message}`);
        throw new Error(error);
      }
    },
    showTableView() {
      this.activeComponent = 'SortableTable';
    },
    showGridView() {
      this.activeComponent = 'CardsList';
    },
    updateCart() {
      this.$store.commit('ADD_TO_CART', this.products[0]);
    },
    updateWishList() {
      this.$store.commit('ADD_TO_WISHLIST', this.products[1]);
    }
  },
  created() {
    this.loadProducts();
  }
}
</script>

<style scoped>
.list-view-controls {
  font-size: 18px;
  padding: 10px 0;
  text-align: right;
}

.list-view-controls .bi {
  cursor: pointer;
  margin-left: 5px;
}

.list-view-controls .bi.active {
  color: var(--primary-bg);
}

.products-page {
  padding-top: 25px;
}

.filters-panel {
  grid-template-columns: 3fr 1fr;
  grid-gap: 20px;
  display: grid;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  margin: 20px 0;
  box-shadow: 0 2px 8px rgb(0 0 0 / 13%);
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
}
</style>
