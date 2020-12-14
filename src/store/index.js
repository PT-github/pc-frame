/*
 * @Author: PT
 * @Date: 2020-12-11 16:47:57
 * @LastEditors: PT
 * @LastEditTime: 2020-12-11 16:53:10
 * @Description: file content
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import test from './modules/test'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    test
  },
  getters
})