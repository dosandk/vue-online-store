<template>
  <slot></slot>
  <div ref="loader"></div>
</template>

<script>
export default {
  name: "InfinityList",
  mounted () {
    console.error('InfinityList was successfully mounted');
    console.error(this.$refs.loader);
  }
}
</script>

<style scoped>

</style>
