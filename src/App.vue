<template>
  <page-header></page-header>
  <div>
    <router-view v-if="keepAlive" v-slot="{ Component }" >
        <transition name="router-fade" mode="out-in">
          <div>
            <keep-alive>
            <component :is="Component"/>
          </keep-alive>
          </div>
        </transition>
      </router-view>
  </div>
  <page-footer></page-footer>
</template>

<script>
 import PageHeader from './components/Header'
 import PageFooter from "@/components/Footer";
 // import HelloWorld from "@/components/HelloWorld";
 //import MainPage from './components/main.vue'

const c = '页面加载于 ' + new Date().toLocaleString()
console.log(c);

export default {
  name: 'App',
  components: {
     PageFooter,
    // HelloWorld,
     PageHeader,
    //MainPage,
  },
  computed: {
    d(){
      return '页面加载于' + new Date().toLocaleString()
    },
    keepAlive(){
      return true//this.route.meta.keepAlive();
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
/*.v-enter-active,*/
/*.v-leave-active {*/
/*  transition: opacity 0.5s ease;*/
/*}*/

/*.v-enter-from,*/
/*.v-leave-to {*/
/*  opacity: 0;*/
/*}*/

/*.router-fade-enter-active, .router-fade-leave-active {*/
/*  transition: opacity .5s ease;*/
/*}*/
/*.router-fade-enter, .router-fade-leave-active {*/
/*  opacity: 0;*/
/*}*/
</style>
