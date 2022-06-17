<template>
  <div>
    <intro-snap></intro-snap>
  </div>
</template>

<script>
import IntroSnap from "@/components/Home/IntroSnap";
export default {
  name: "MainPage",
  components: {IntroSnap},
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>