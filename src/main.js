// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import "./assets/css/base.css";


import "./assets/js/jquery-1.7.2.min.js"
import "./assets/js/TouchSlide.1.1.js"
import "./assets/js/phone.js"
import "./assets/js/movie.js"
import "./assets/js/layer-v3.0.3/layer/layer.js"



import router from "./router.config" 
import axios from "axios"
Vue.prototype.$http=axios;
/* eslint-disable no-new */

import * as types from './store/types'
axios.interceptors.request.use(function (config) {
  // 做点事
  store.dispatch(types.VIEW_LOADING,true)
  return config;
}, function (error) {
  return Promise.reject(error);
});
axios.interceptors.response.use(function (response) {
  // 做点事
  store.dispatch(types.VIEW_LOADING,false)
  return response;
}, function (error) {
  return Promise.reject(error);
});
import store from './store';//引入状态管理

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,store
})
