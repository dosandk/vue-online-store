<template>
  <nav class="os-pagination">
    <a href="#" class="page-link previous" @click.prevent="goToPrevPage" @click="goToPrevPage2">
      <i class="bi bi-chevron-left"></i>
    </a>

    <ul class="page-list">
      <li v-for="(item, index) in getPagesRange()" :key="item" @click.prevent="goToPage(index)">
        <a href="#" :class="['page-link', { active: index === activePageIndex}]">
          {{ index + 1 }}
        </a>
      </li>
    </ul>

    <a href="#" class="page-link next" @click.prevent="goToNextPage">
      <i class="bi bi-chevron-right"></i>
    </a>
  </nav>
</template>

<script>
export default {
  name: "ThePagination",
  data() {
    return {
      pageIndex: 0,
      totalPages: 12,
      activePageIndex: 1
    }
  },
  methods: {
    // TODO: rethink!
    goToPrevPage2 () {
      console.error(111);
    },
    getPagesRange () {
      console.error(1111);
      return new Array(this.totalPages).fill(true);
    },

    goToNextPage () {
      this.goToPage(this.activePageIndex + 1);
    },
    goToPrevPage () {
      this.goToPage(this.activePageIndex - 1);
    },
    goToPage (pageIndex) {
      if (pageIndex === this.activePageIndex) return;
      if (pageIndex > this.totalPages - 1 || pageIndex < 0) return;

      this.activePageIndex = pageIndex;
      this.$emit('page-changed', this.activePageIndex);

      console.error('this.activePageIndex', this.activePageIndex);
    }
  }
}
</script>

<style scoped>
.os-pagination {
  display: flex;
  align-items: center;
}

.os-pagination a {
  line-height: 1;
  text-decoration: none
}

.os-pagination .previous,
.os-pagination .next {
  color: #000
}

.os-pagination .previous {
  margin-right: 15px
}

.os-pagination .next {
  margin-left: 15px
}

.os-pagination .page-list {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  border-radius: 20px
}

.os-pagination .page-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #ededed;
  border-radius: 20px;
  color: #2c2c2c;
  transition: .3s
}

.os-pagination .page-link:hover,
.os-pagination .page-link.active {
  background-color: var(--primary-bg);
  color: #fff
}

</style>


