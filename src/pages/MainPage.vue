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
          v-if="activeComponent === 'CardsList'">
        <template #default="slotProps">
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
import {products} from "@/fixtures/products";
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
      activeComponent: 'SortableTable',
      products,
      tableConfig
    }
  },
  methods: {
    showTableView() {
      this.activeComponent = 'SortableTable';
    },
    showGridView() {
      this.activeComponent = 'CardsList';
    },
    updateCart() {

    },
    updateWishList() {

    }
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
