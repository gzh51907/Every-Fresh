import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../pages/Home.vue';
import Cart from '../pages/Cart.vue';
import Classify from '../pages/Classify.vue';
import Discover from '../pages/Discover.vue';
import Mine from '../pages/Mine.vue';

let router = new VueRouter({
    routes:[
        {
            name: 'home',
            path: '/home',
            component: Home,
        },
        {
            path: '/',
            redirect: '/home'
        },
        {
            name: 'cart',
            path: '/cart',
            component: Cart
        },
        {
            name: 'classify',
            path: '/classify',
            component: Classify,
        },
        {
            name: 'discover',
            path: '/discover',
            component: Discover,
        },
        {
            name: 'mine',
            path: '/mine',
            component: Mine,
        },
    ]
})
export default router;