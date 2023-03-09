<template>
  <sidebar/>
  <main>
    <searchbar/>
    <div class="main-context">
      <slot/>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  margin-left: 20%;
  padding: 3.6vh 3vw 1vw 2.5vw;
}

.main-context {
  height: 100%;
  width: 100%;
  margin-top: 4vw;
  background-color: white;
  border-radius: 1.5vw;
  box-shadow: 6px 10px 9px 2px rgba(0, 0, 0, 0.03);
  padding: 1vw;
}
</style>
