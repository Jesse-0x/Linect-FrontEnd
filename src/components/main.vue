<template>
  <div>
    <p> {{ msg() }}</p>
    <button v-on:click="reverseMessage">反转 Message</button>
  </div>
</template>

<script>
export default {
  name: "MainPage",
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>