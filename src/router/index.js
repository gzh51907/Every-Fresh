/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-10 17:05:33
 * @LastEditTime: 2019-10-14 16:23:06
 * @LastEditors: Please set LastEditors
 */
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
import Article from '../pages/Article.vue';

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
            name:'article',
            path:'/discover/article',
            component:Article
        }
    ]
})
export default router;