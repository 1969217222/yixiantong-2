// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'  // 路由
import store from './store'  // 入口文件

import './assets/styles/border.css'
import './assets/styles/resets.css'
// import './assets/styles/common.scss'
import './assets/js/fastback.js'
import './assets/js/common.js'
import '../src/assets/styles/iconfont.css'


Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
