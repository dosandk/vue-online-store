<template>
  <form>
    <div class="os-form-input use-icon">
      <input id="search-input"
             @change="onChange"
             type="text"
             v-model="userInput"
             placeholder="Search" />
      <label class="bi bi-search input-icon"
             htmlFor="search-input"/>
    </div>
  </form>
</template>

<script>
export default {
  name: "SearchBox",
  data() {
    return {
      // TODO: add two-ways data-binding
      userInput: ''
    }
  },
  methods: {
    onChange() {
      console.error('onChange');
    },
  }
}
</script>

<style scoped>
/* Search Component */
.os-form-input > input {
  width: 100%;
  padding: 5px;
  border: 1px solid #a8acb2;
  font-size: 1.2rem;
  font-weight: 300;
  font-family: "Montserrat", sans-serif;
  box-sizing: border-box;
}

.os-form-input > input:focus,
.os-form-input > input:focus-visible {
  outline: none;
  border: 1px solid #6c757d;
}

.os-form-input.use-icon {
  position: relative
}

.os-form-input.use-icon > input {
  padding-right: 50px
}

.os-form-input.use-icon .input-icon {
  display: flex;
  align-items: center;
  position: absolute;
  height: 100%;
  right: 20px;
  top: 0;
  font-size: 1.375rem;
  color: #606060
}
</style>
