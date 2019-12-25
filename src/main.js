/*
 * @Author: WangYu
 * @Date: 2019-12-24 18:02:32
 * @LastEditors  : WangYu
 * @LastEditTime : 2019-12-25 11:03:02
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import '../theme/index.css'
Vue.config.productionTip = false
import store from './store/index.js';
import './assets/css/theme/3110B4/index.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
/* eslint-disable no-new */
Vue.use(ElementUI);
new Vue({
  el: '#app',
  components: { App },
  store,
  template: '<App/>'
})
