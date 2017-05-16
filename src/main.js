// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from '../routerConfig.js'
import VueResource from 'vue-resource'

import './common/style/index.scss'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)

var router = new VueRouter({
    routes,
    mode: 'history'
})

 // 最后挂到vue上
/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
