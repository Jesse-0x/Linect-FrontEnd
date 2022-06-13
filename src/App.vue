<template>
  <div class="flex h-14 items-center rounded-b-2xl bg-white shadow-md">
    <!--<label class="relative block right-0 lg:hidden">
      <span class="sr-only">Search</span>
      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-slate-100" fill="none" viewBox="0 0 20 20" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </span>
      <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="search" type="text" name="search"/>
    </label>-->
    <a href="/" class="flex text-center">
      <img src="/image/TMP_ICON.png" class="h-12 w-12" alt="Linect Icon">
      <span class="flex-1 text-2xl font-thin indent-3 tracking-widest ">Linect</span>
    </a>
    <a class="absolute right-0 mr-10 w-28 py-2 rounded-full border-0 bg-green-100 text-sm text-center font-semibold text-green-600 hover:bg-green-200" href="/registrations">Sign up</a>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import MainPage from './components/main.vue'
const c = '页面加载于 ' + new Date().toLocaleString()
console.log(c);

export default {
  name: 'App',
  components: {
    //HelloWorld,
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
