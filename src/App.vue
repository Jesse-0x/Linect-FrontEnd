<template>
  <home-dashboard></home-dashboard>
</template>

<script>
import HomeDashboard from "@/components/Dashboard/dashboard";

export default {
  name: 'App',
  components: {
    HomeDashboard
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
