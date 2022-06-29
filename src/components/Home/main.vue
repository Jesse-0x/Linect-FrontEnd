<template>
  <page-header :signup="true" :news="true" :search="false"></page-header>
  <div>
    <intro-snap></intro-snap>
    <main-choices></main-choices>
    <HelloWorld></HelloWorld>
  </div>
  <page-footer></page-footer>
</template>
<script>
import IntroSnap from "@/components/Home/IntroSnap";
import PageFooter from "@/components/Footer";
import HelloWorld from "@/components/Test/HelloWorld";
import PageHeader from "@/components/Header";
import MainChoices from "@/components/Home/MainChoices";
export default {
  name: "MainPage",
  components: {MainChoices, HelloWorld, PageHeader, PageFooter, IntroSnap},
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>