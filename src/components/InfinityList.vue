<template>
  <slot></slot>
  <div ref="loader"></div>
</template>

<script>
export default {
  name: "InfinityList",
  data () {
    return {
      pageIndex: 0,
      observer: null
    }
  },
  mounted() {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 0
    };

    this.observer = new IntersectionObserver((entries) => {
      const [target] = entries;

      if (target.isIntersecting) {
        this.$emit('page-changed', this.pageIndex);
        this.pageIndex += 1;
      }
    }, options);

    if (this.$refs.loader) {
      this.observer.observe(this.$refs.loader);
    }
  },
  // NOTE: commented just for example
  // updated () {
  //   console.error('updated');
  // },
  // unmounted() {
  //   console.error('unmounted');
  // },
  // beforeUnmount() {
  //   console.error('beforeUnmount');
  //   this.observer.disconnect();
  // }
}
</script>
