<template>
  <div class="flex items-center bottom-0 right-0 left-0 h-14 rounded-t-2xl shadow-inner shadow-green-200/50 lg:mx-0 bg-green-50/80 ">
    <!-- Main Icon -->
    <a href="/" class="flex-none items-center space-x-1 p-1 ml-4">
      <img src="/image/TMP_ICON.png" class="h-12 w-12" alt="Linect Icon">
    </a>
    <span class="flex-1 text-2xl font-mono indent-1 tracking-wide "></span>

    <!--Menus-->
    <div class="flex absolute ml-24 hidden items-center lg:flex sm:visible mr-20 md:visible">
      <nav class="text-sm font-bold leading-6 text-slate-700 dark:text-slate-200">
        <ul class="flex space-x-8">
          <li><a class="hover:text-green-500 dark:hover:text-green-400 transition ease-in-out" href="/">Home</a></li>
          <li><a class="hover:text-green-500 dark:hover:text-green-400 transition ease-in-out" href="/applications">Applications</a></li>
          <li><a class="hover:text-green-500 dark:hover:text-green-400 transition ease-in-out" href="/requests">Requests</a></li>
          <li><a class="hover:text-green-500 dark:hover:text-green-400 transition ease-in-out" href="/forums">Forums</a></li>
          <li><a class="hover:text-green-500 dark:hover:text-green-400 transition ease-in-out" href="/update">Update</a></li>
          <li><a class="hover:text-green-500 dark:hover:text-green-400 transition ease-in-out" href="/about">About</a></li>
          <li><a class="hover:text-green-500 dark:hover:text-green-400 transition ease-in-out" href="/developers">Developers</a></li>
          <li><a class="hover:text-green-500 dark:hover:text-green-400 transition ease-in-out" href="/business">Business</a></li>
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