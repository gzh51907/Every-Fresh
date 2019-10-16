import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../pages/Home.vue';
import Cart from '../pages/Cart.vue';
import Classify from '../pages/Classify.vue';
import Discover from '../pages/Discover.vue';
import Mine from '../pages/Mine.vue';
import Login from '../pages/Login.vue';
import Privacy from '../pages/Privacy.vue';
import Agreement from '../pages/Agreement.vue';
import AboutUs from '../pages/AboutUs.vue';
import Address from '../pages/Address.vue';
import Order from '../pages/Order.vue';
import Security from '../pages/Security.vue';
import Help from '../pages/Help.vue';
import Feedback from '../pages/Feedback.vue';
import Mineaddress from '../pages/Mineaddress.vue';
import Reg from '../pages/R.vue';

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
        {
            name: 'login',
            path: '/login',
            component: Login,
        },
        {
            name: 'reg',
            path: '/reg',
            component: Reg,
        },
        {
            name: 'privacy',
            path: '/privacy',
            component: Privacy,
        },
        {
            name: 'agreement',
            path: '/agreement',
            component: Agreement,
        },
        {
            name: 'aboutus',
            path: '/aboutus',
            component: AboutUs,
        },
        {
            name: 'address',
            path: '/address',
            component: Address,
        },
        {
            name: 'order',
            path: '/order',
            component: Order,
        },
        {
            name: 'security',
            path: '/security',
            component: Security,
        },
        {
            name: 'feedback',
            path: '/feedback',
            component: Feedback,
        },
        {
            name: 'help',
            path: '/help',
            component: Help,
        },
        {
            name: 'mineaddress',
            path: '/mineaddress',
            component: Mineaddress,
        },
    ]
})
export default router;