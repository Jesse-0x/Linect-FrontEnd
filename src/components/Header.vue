<template>
  <div class="flex fixed items-center right-0 left-0 h-14 rounded-b-2xl shadow-md lg:mx-0 bg-green-50/80 ">

    <!-- Main Icon -->
    <a href="/" class="flex-none items-center space-x-1 p-1 ml-4">
      <img src="/image/TMP_ICON.png" class="h-12 w-12" alt="Linect Icon">
    </a>
    <span class="flex-1 text-2xl font-mono indent-1 tracking-wide ">Linect</span>

    <!--Menus-->
    <div class="flex absolute left-48 ml-auto hidden items-center lg:flex sm:visible mr-3 ">
      <nav class="text-sm font-bold leading-6 text-slate-700 dark:text-slate-200">
        <ul class="flex space-x-8">
          <li><a class="hover:text-green-500 dark:hover:text-green-400 transition ease-in-out" href="/">Home</a></li>
          <li><a class="hover:text-green-500 dark:hover:text-green-400 transition ease-in-out" href="/applications">Applications</a></li>
          <li><a class="hover:text-green-500 dark:hover:text-green-400 transition ease-in-out" href="/requests">Requests</a></li>
          <li><a class="hover:text-green-500 dark:hover:text-green-400 transition ease-in-out" href="/forums">Forums</a></li>
          <li><a class="hover:text-green-500 dark:hover:text-green-400 transition ease-in-out" href="/supports">Supports</a></li>
        </ul>
      </nav>
    </div>

    <!--News-->
    <a  v-if="!visiable"
        class="ml-3 mr-5 hidden overflow-hidden items-center rounded-full bg-green-100 py-1 px-5 text-xs font-medium leading-5 text-green-600 hover:bg-green-400/20 dark:text-green-400 xl:flex lg:visible transition ease-in-out transform transition-all duration-300"
        v-bind:class="wouldchage2"
        data-replace='{"-translate-x-12":"translate-x-0" }'
        href="/update">
      <strong class="font-bold">Linect 1.0</strong>
      <svg width="2" height="2" fill="currentColor" aria-hidden="true" class="ml-2 text-green-600 dark:text-green-50">
        <circle cx="1" cy="1" r="1"></circle>
      </svg>
      <span class="ml-2">New support to the user requests</span>
      <svg width="3" height="6" class="ml-3 overflow-visible text-green-300 dark:text-sky-400" aria-hidden="true"><path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
    </a>

    <!--Search Bar-->
    <label v-if="visiable"
           class="relative block right-10 lg:visible invisible transform transition-all duration-300"
           v-bind:class="wouldchage"
           data-replace='{"-translate-x-12":"translate-x-0" }'>
      <span class="sr-only">Search</span>
      <span class="absolute inset-y-0 right-0 flex items-center pr-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-slate-100" fill="none" viewBox="0 0 20 20" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </span>
      <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-green-300 rounded-2xl py-2 pl-3 pr-20 shadow-sm focus:outline-none focus:border-green-500 focus:ring-green-500 focus:ring-1 sm:text-sm transition ease-in-out" placeholder="search" type="text" name="search"/>
    </label>

    <!-- Login Button -->
    <a class="flex-none right-0 mr-2 w-24 py-2 rounded-full border-0 bg-green-100 text-sm text-center font-semibold text-green-600 hover:bg-green-200 transition ease-in-out" href="/registrations">Sign up</a>
    <a class="flex-none right-0 mr-6 w-14 py-2 rounded-full border-0 text-sm text-center font-semibold text-green-600 hover:text-green-700" href="/login">Login</a>
  </div>
</template>

<script>
function visiable(){
  return window.location.pathname === '/applications'
      | window.location.pathname === '/forums'
      | window.location.pathname === '/requests'
}
function vis(abb){
  console.log(abb)
  return !(abb.includes('/applications')
          || abb.includes('/forums')
          || abb.includes('/requests'))
}
export default {
  name: "PageHeader",
  computed:{
    visiable: function(){
      return visiable()
    },
    //High maintenance costs XDDDDD
    //When
    wouldchage: function(){
      if(visiable() && vis(document.referrer)){
        var rt = true;
      }else{
        rt = false;
      }
      return{
        '-translate-x-12': rt
      }
    },
    wouldchage2: function(){
      if(!visiable() && !vis(document.referrer)){
        var rt = true;
      }else{
        rt = false;
      }
      return{
        '-translate-x-12': rt
      }
    }
  }
}

function doit() {
  var replaced = document.querySelectorAll('[data-replace]');
  for (var i = 0; i < replaced.length; i++) {
    let needreplace = JSON.parse(replaced[i].dataset.replace.replace(/'/g, '"'));
    Object.keys(needreplace).forEach(function (key) {
      replaced[i].classList.remove(key);
      replaced[i].classList.add(needreplace[key]);
    });
  }
}
function doit2(){
  alert(2)
}
//Thanks for https://tonylea.com/animating-tailwind-transitions-on-page-load
window.onload = function(){
  if (visiable() && vis(document.referrer)){
    doit()
    }
  else if(!visiable() && !vis(document.referrer)){
    doit()
  }
}

window.onbeforeunload = function(){
  console.log(2)
  if (visiable() && vis(document.referrer)){
    doit2()
    }
  else if(!visiable() && !vis(document.referrer)){
    doit2()
  }
}

</script>

<style scoped>

</style>