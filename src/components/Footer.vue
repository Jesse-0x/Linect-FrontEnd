<template>
  <div class="relative flex items-center bottom-0 right-0 left-0 h-14 rounded-t-2xl shadow-inner shadow-green-200/50 lg:mx-0 bg-green-50/80 ">
    <!-- Main Icon -->
    <router-link to="/" class="flex-none items-center space-x-1 p-1 ml-4">
      <img src="../assets/TMP_ICON.png" class="h-12 w-12" alt="Linect Icon">
    </router-link>
    <span class="flex-1 text-2xl font-mono indent-1 tracking-wide "></span>

    <!--Menus-->
    <div class="flex absolute ml-24 hidden items-center lg:flex sm:visible mr-20 md:visible">
      <nav class="text-sm font-bold leading-6 text-gray-700 dark:text-gray-200">
        <ul class="flex space-x-8 text-gray-700">
          <li><router-link class="hover:text-green-500 dark:hover:text-green-400 transition ease-in-out" to="/">Home</router-link></li>
          <li><router-link class="hover:text-green-500 dark:hover:text-green-400 transition ease-in-out" to="/applications">Applications</router-link></li>
          <li><router-link class="hover:text-green-500 dark:hover:text-green-400 transition ease-in-out" to="/requests">Requests</router-link></li>
          <li><router-link class="hover:text-green-500 dark:hover:text-green-400 transition ease-in-out" to="/forums">Forums</router-link></li>
          <li><router-link class="hover:text-green-500 dark:hover:text-green-400 transition ease-in-out" to="/update">Update</router-link></li>
          <li><router-link class="hover:text-green-500 dark:hover:text-green-400 transition ease-in-out" to="/about">About</router-link></li>
          <li><router-link class="hover:text-green-500 dark:hover:text-green-400 transition ease-in-out" to="/developers">Developers</router-link></li>
          <li><router-link class="hover:text-green-500 dark:hover:text-green-400 transition ease-in-out" to="/business">Business</router-link></li>
<!--          <li><router-link class="hover:text-green-500 dark:hover:text-green-400 transition ease-in-out" to="/test" >Test</router-link></li>-->
        </ul>
      </nav>
    </div>
    <span class="flex ml-auto items-center lg:flex mr-5 md:visible text-sm">Linect © 2022. All right reserved</span>
  </div>

</template>

<script>
export default {
  name: "PageFooter"
}
</script>

<style scoped>

</style>