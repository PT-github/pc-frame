/*
 * @Author: PT
 * @Date: 2020-05-30 00:04:47
 * @LastEditors: PT
 * @LastEditTime: 2020-06-05 08:33:45
 * @Description: 项目入口
 */
import Vue from 'vue'
import App from './App'
import './assets/css/base.css'
import router from './router'

import { Button } from 'element-ui'

Vue.use(Button)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')