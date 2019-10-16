/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-10 15:57:35
 * @LastEditTime: 2019-10-15 15:14:47
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from './router';
import store from './store';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);
import {Icon,IndexBar, IndexAnchor,SwipeCell} from 'vant';
Vue.use(Icon).use(IndexBar).use(IndexAnchor).use(SwipeCell);

import axios from 'axios';
Vue.prototype.$axios = axios;

new Vue({
  store,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
