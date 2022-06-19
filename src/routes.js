import App from './App'

import HelloWorld from './components/Test/HelloWorld.vue'

export default [{
    path: '/',
    component: App,
    children:[
        {
            path: '/test',
            component: HelloWorld
        },
        {
            path: '/applications',
            component: HelloWorld
        },
    ]
}]