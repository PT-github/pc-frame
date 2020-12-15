/*
 * @Author: PT
 * @Date: 2020-05-30 00:04:47
 * @LastEditors: PT
 * @LastEditTime: 2020-12-15 09:06:04
 * @Description: 项目入口
 */
import Vue from 'vue'
import App from './App'
import './assets/css/base.css'
import util from './utils'
import router from './router'
import store from './store'

import ConUI from 'con-ui'
import 'con-ui/lib/theme-chalk/index.css'

Vue.use(ConUI)

Vue.prototype.$util = util

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')