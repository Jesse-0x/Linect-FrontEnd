<template>
  <page-header :signup="true" :news="true" :search="false"></page-header>
  <div>
    <intro-snap></intro-snap>
    <HelloWorld></HelloWorld>
  </div>
  <page-footer></page-footer>
</template>
<script>
import IntroSnap from "@/components/Home/IntroSnap";
import PageFooter from "@/components/Footer";
import HelloWorld from "@/components/Test/HelloWorld";
import PageHeader from "@/components/Header";
export default {
  name: "MainPage",
  components: {HelloWorld, PageHeader, PageFooter, IntroSnap},
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>