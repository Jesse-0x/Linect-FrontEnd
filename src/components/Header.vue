<template>
  <div class="relative top-0 h-14"></div>
  <div class="flex top-0 fixed items-center right-0 left-0 h-12 rounded-b-3xl shadow-lg lg:mx-0 bg-green-50/75 shadow-green-200/25 ">

    <!-- Main Icon -->
    <router-link to="/" class="flex-none items-center space-x-1 p-1 ml-4">
      <img src="../assets/TMP_ICON.png" class="h-12 w-12" alt="Linect Icon">
    </router-link>
    <span class="flex-1 text-2xl font-mono indent-1  ">Linect</span>

    <!--Menus-->
    <div class="flex absolute left-48 ml-auto invisible items-center lg:flex sm:visible mr-3 ">
      <nav class="text-sm font-bold leading-6 text-gray-700 dark:text-gray-200">
        <ul class="flex space-x-8 text-gray-700">
          <li><router-link class="hover:text-green-500 dark:hover:text-green-400 transition ease-in-out" to="/">Home</router-link></li>
          <li><router-link class="hover:text-green-500 dark:hover:text-green-400 transition ease-in-out" to="/applications">Applications</router-link></li>
          <li><router-link class="hover:text-green-500 dark:hover:text-green-400 transition ease-in-out" to="/requests">Requests</router-link></li>
          <li><router-link class="hover:text-green-500 dark:hover:text-green-400 transition ease-in-out" to="/forums">Forums</router-link></li>
          <li><router-link class="hover:text-green-500 dark:hover:text-green-400 transition ease-in-out" to="/supports">Supports</router-link></li>
        </ul>
      </nav>
    </div>

    <!--News-->
    <router-link  v-if="news"
        class="ml-3 mr-5 hidden overflow-hidden items-center rounded-full bg-green-100 py-1 px-5 text-xs font-medium leading-5 text-green-600 hover:bg-green-400/20 dark:text-green-400 xl:flex lg:visible transition ease-in-out transform transition-all duration-300"
        to="/update">
      <strong class="font-bold">Linect 1.0</strong>
      <svg width="2" height="2" fill="currentColor" aria-hidden="true" class="ml-2 text-green-600 dark:text-green-50">
        <circle cx="1" cy="1" r="1"></circle>
      </svg>
      <span class="ml-2">New support to the user requests</span>
      <svg width="3" height="6" class="ml-3 overflow-visible text-green-300 dark:text-green-400" aria-hidden="true"><path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
    </router-link>

    <!--Search Bar-->
    <label v-if="search"
           class="relative block right-10 lg:visible invisible transform transition-all duration-300">
      <span class="sr-only">Search</span>
      <span class="absolute inset-y-0 right-0 flex items-center pr-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-slate-100" fill="none" viewBox="0 0 20 20" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </span>
      <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-green-300 rounded-2xl py-2 pl-3 pr-20 shadow-sm focus:outline-none focus:border-green-500 focus:ring-green-500 focus:ring-1 sm:text-sm transition ease-in-out" placeholder="search" type="text" name="search"/>
    </label>

    <!-- Login Button -->
    <router-link v-if="signup" class="flex-none right-0 mr-2 w-24 py-2 rounded-full border-0 invisible md:visible bg-green-100 text-sm text-center font-semibold text-green-600 hover:bg-green-200 transition ease-in-out" to="/registrations">Sign up</router-link>
    <router-link v-if="signup" class="flex-none right-0 mr-7 w-14 py-2 rounded-full border-0 invisible md:visible text-sm text-center font-semibold text-green-600 hover:text-green-700" to="/login">Login</router-link>

    <!--  Design for Phone viewing  -->
    <div class="absolute flex right-0 bg-green-700 h-10 w-10 mr-4 visible md:hidden">

    </div>
  </div>
</template>

<script>

export default {
  name: "PageHeader",
  props: {
    signup:{
      type: Boolean,
      default: true
    },
    search: {
      type: Boolean,
      default: true
    },
    news: {
      type: Boolean,
      default: true
    }
  },
}

//High maintenance costs XDDDDD
// Ahhhhhhh NVM XDDDDDDDDDDDDDD
// Okay again... High Maintenance cost XD - Jun 25 3:28PM
// Yea very High.... Can't resolve the problem right now...... - Jun 25 7:39PM
// Okay this time will be the last time.... I promise... - June 25 8:10PM
// Yea now everything is working well right now. - June 25 9:22PM
// pretty good. XDDDDD Not really thought I probably not a very good front end developer...  - June 28 10:16PM
// veryveryvery high maintenance costs.XD - June 28 10:16PM
// Here really pretty much become one place I wrote diary XDD. - June 28 10:17PM
</script>

<style scoped>

</style>