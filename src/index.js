/*
 * @Author: PT
 * @Date: 2020-05-30 00:04:47
 * @LastEditors: PT
 * @LastEditTime: 2020-06-04 18:14:32
 * @Description: 项目入口
 */
import Vue from 'vue'
import App from './App'
import './assets/css/base.css'
import router from './router'

console.log('aaaa')

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')