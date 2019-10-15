/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-10 15:57:35
 * @LastEditTime: 2019-10-14 18:57:14
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from './router';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);
import {Icon,IndexBar, IndexAnchor } from 'vant';
Vue.use(Icon).use(IndexBar).use(IndexAnchor);

import axios from 'axios';
Vue.prototype.$axios = axios;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
