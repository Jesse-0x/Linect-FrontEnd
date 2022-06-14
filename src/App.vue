<template>
  <div class="flex items-center h-14 rounded-b-2xl bg-white shadow-md lg:mx-0 ">

    <!-- Main Icon -->
    <a href="/" class="flex-none items-center space-x-1 p-1 ml-4">
      <img src="/image/TMP_ICON.png" class="h-12 w-12" alt="Linect Icon">
    </a>
    <span class="flex-1 text-2xl font-thin indent-3 tracking-widest ">Linect</span>

    <!--Menus-->
    <div class="flex left-0 ml-auto hidden items-center lg:flex sm:visible mr-3">
      <nav class="text-sm font-bold leading-6 text-slate-700 dark:text-slate-200">
        <ul class="flex space-x-8">
          <li><a class="hover:text-green-500 dark:hover:text-green-400" href="/">Home</a></li>
          <li><a class="hover:text-green-500 dark:hover:text-green-400" href="/applications">Applications</a></li>
          <li><a class="hover:text-green-500 dark:hover:text-green-400" href="/requests">Requests</a></li>
          <li><a class="hover:text-green-500 dark:hover:text-green-400" href="/forums">Forums</a></li>
          <li><a class="hover:text-green-500 dark:hover:text-green-400" href="/supports">Supports</a></li>
        </ul>
      </nav>
    </div>

    <!--News-->
    <a class="ml-3 mr-5 hidden overflow-hidden items-center rounded-full bg-green-100 py-1 px-5 text-xs font-medium leading-5 text-green-600 hover:bg-green-400/20 dark:text-green-400 xl:flex lg:visible" href="/update">
      <strong class="font-bold">Linect 1.0</strong>
      <svg width="2" height="2" fill="currentColor" aria-hidden="true" class="ml-2 text-green-600 dark:text-green-50">
        <circle cx="1" cy="1" r="1"></circle>
      </svg>
      <span class="ml-2">New support to the user requests</span>
      <svg width="3" height="6" class="ml-3 overflow-visible text-green-300 dark:text-sky-400" aria-hidden="true"><path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
    </a>


    <!-- Login Button -->
    <a class="flex-none right-0 mr-10 w-24 py-2 rounded-full border-0 bg-green-100 text-sm text-center font-semibold text-green-600 hover:bg-green-200" href="/registrations">Sign up</a>

  </div>
</template>

<!--<label class="relative block right-0 lg:hidden">
  <span class="sr-only">Search</span>
  <span class="absolute inset-y-0 left-0 flex items-center pl-2">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-slate-100" fill="none" viewBox="0 0 20 20" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  </span>
  <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-green-500 focus:ring-green-500 focus:ring-1 sm:text-sm" placeholder="search" type="text" name="search"/>
</label>-->

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
