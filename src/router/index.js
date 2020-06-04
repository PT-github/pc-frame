/*
 * @Author: PT
 * @Date: 2020-05-31 21:52:04
 * @LastEditors: PT
 * @LastEditTime: 2020-06-04 18:19:29
 * @Description: file content
 */ 
import Vue from 'vue'
import vueRouter from 'vue-router'
import VueRouter from 'vue-router'
console.log('process.env.PUB_PROJECTNAME', process.env.PUB_PROJECTNAME)
Vue.use(vueRouter)

const routes = [
  {
    path: '/test',
    component: () => import(/* webpackChunkName: "test" */'@/views/test/test')
  }
]

export default new VueRouter({
  base: process.env.PUB_PROJECTNAME ? `/${process.env.PUB_PROJECTNAME}/` : '/',
  routes
})