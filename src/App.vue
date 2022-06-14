<template>
  <page-header></page-header>
<!--  <hello-world msh="Test"></hello-world>-->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import PageHeader from './components/Header'
//import MainPage from './components/main.vue'
const c = '页面加载于 ' + new Date().toLocaleString()
console.log(c);

export default {
  name: 'App',
  components: {
    // HelloWorld,
    PageHeader,
    //MainPage,
  },
  computed: {
    d(){
      return '页面加载于' + new Date().toLocaleString()
    }
  },
  methods:{
    reverseMessage(){
      this.msg = 'a'
    }
  }
}
</script>

<style>
/*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*/
</style>
