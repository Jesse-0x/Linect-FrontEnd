import { createApp } from 'vue'
import App from './App.vue'
import  {createRouter, createWebHashHistory} from 'vue-router'
import routes from './routes.js'
import './index.css'

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
