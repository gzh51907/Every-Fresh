/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-10 17:05:33
 * @LastEditTime: 2019-10-15 14:23:16
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue';
import Vuex from 'vuex';
import cart from './cart';
import common from './common';
Vue.use(Vuex);


const store = new Vuex.Store({
    modules:{
        cart,common
    }
});

export default store;