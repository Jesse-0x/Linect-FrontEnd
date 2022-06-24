import App from './App'

import Test from './components/Test/HelloWorld.vue'
import Applications from './components/Test/HelloWorld.vue'
import Requests from './components/Test/HelloWorld.vue'
import Forums from './components/Test/HelloWorld.vue'
import Update from './components/Test/HelloWorld.vue'
import About from './components/Test/HelloWorld.vue'
import Developers from './components/Test/HelloWorld.vue'
import Supports from './components/Test/HelloWorld.vue'
import Login from './components/Test/HelloWorld.vue'
import Registrations from './components/Test/HelloWorld.vue'

export default [{
    path: '/',
    component: App,
    children:[
        {
            path: '/test',
            component: Test
        },
        {
            path: '/Applications',
            component: Applications
        },
        {
            path: '/Requests',
            component: Requests
        },
        {
            path: '/Forums',
            component: Forums
        },
        {
            path: '/Update',
            component: Update
        },
        {
            path: '/About',
            component: About
        },
        {
            path: '/Developers',
            component: Developers
        },
        {
            path: '/Supports',
            component: Supports
        },
        {
            path: '/Login',
            component: Login
        },
        {
            path: '/Registrations',
            component: Registrations
        },
        {
            path: '/Business',
            redirect: '----eliminate----'
        },
    ]
}]