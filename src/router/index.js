/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-10 17:05:33
 * @LastEditTime: 2019-10-18 11:14:23
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
import AboutUs from '../pages/AboutUs.vue';
import Address from '../pages/Address.vue';
import Order from '../pages/Order.vue';
import Security from '../pages/Security.vue';
import Help from '../pages/Help.vue';
import Feedback from '../pages/Feedback.vue';
import Mineaddress from '../pages/Mineaddress.vue';
import Reg from '../pages/R.vue';
import Detail from '../pages/Detail.vue';
import Search from '../pages/Search.vue'
import Article from '../pages/Article.vue';
import store from '../store';

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
            component: Cart,
            meta:{
                requiresAuth:true
            }
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
            meta:{
                requiresAuth:true
            }
        },
        {
            name: 'address',
            path: '/address',
            component: Address,
            meta:{
                requiresAuth:true
            }
        },
        {
            name: 'order',
            path: '/order',
            component: Order,
            meta:{
                requiresAuth:true
            }
        },
        {
            name: 'security',
            path: '/security',
            component: Security,
            meta:{
                requiresAuth:true
            }
        },
        {
            name: 'feedback',
            path: '/feedback',
            component: Feedback,
            meta:{
                requiresAuth:true
            }
        },
        {
            name: 'help',
            path: '/help',
            component: Help,
            meta:{
                requiresAuth:true
            }
        },
        {
            name: 'mineaddress',
            path: '/mineaddress',
            component: Mineaddress,
            meta:{
                requiresAuth:true
            }
        },
        {
            name: 'detail',
            path: '/detail',
            component: Detail,
        },
        {
            name: 'search',
            path: '/search',
            component: Search,
        },
        {
            name:'article',
            path:'/discover/article',
            component:Article
        }
    ]
});

// 全局路由守卫
router.beforeEach(async function(to,from,next){
    if(to.meta.requiresAuth){
        let User = localStorage.getItem('username');
        if(User){
            // let res = await store.dispatch('checkLogin');
            // console.log('res:',res)
            // if(res === 400){
            //     next({
            //         path:'/login',
            //         query:{
            //             targetURL: to.fullPath
            //         }
            //     });
            // }else{
            //      next();
            // }
           next();
        }else{
            console.log(to.fullPath)
            router.push({
                path:'/login',
                query:{
                    targetURL:to.fullPath
                }
            })
            
        }
   
    }else{
        next();
    }
})
export default router;