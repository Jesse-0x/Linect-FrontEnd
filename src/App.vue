<template>
  <page-header></page-header>
<!--  <div>-->
<!--&lt;!&ndash;    <router-view v-if="keepAlive" v-slot="{ Component }" >&ndash;&gt;-->
<!--&lt;!&ndash;        <transition name="router-fade" mode="out-in">&ndash;&gt;-->
<!--&lt;!&ndash;          <div>&ndash;&gt;-->
<!--&lt;!&ndash;            <keep-alive>&ndash;&gt;-->
<!--&lt;!&ndash;            <component :is="Component"/>&ndash;&gt;-->
<!--&lt;!&ndash;          </keep-alive>&ndash;&gt;-->
<!--&lt;!&ndash;          </div>&ndash;&gt;-->
<!--&lt;!&ndash;        </transition>&ndash;&gt;-->
<!--&lt;!&ndash;      </router-view>&ndash;&gt;-->
<!--  </div>-->
  <hello-world></hello-world>
  <page-footer></page-footer>
</template>

<script>
 import PageHeader from './components/Header'
 import PageFooter from "@/components/Footer";
 import HelloWorld from "@/components/HelloWorld";
//import MainPage from './components/main.vue'

const c = '页面加载于 ' + new Date().toLocaleString()
console.log(c);

export default {
  name: 'App',
  components: {
     PageFooter,
    HelloWorld,
     PageHeader,
    //MainPage,
  },
  computed: {
    d(){
      return '页面加载于' + new Date().toLocaleString()
    },
    keepAlive(){
      return false//this.route.meta.keepAlive();
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
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.router-fade-enter-active, .router-fade-leave-active {
  transition: opacity .5s ease;
}
.router-fade-enter, .router-fade-leave-active {
  opacity: 0;
}
</style>
