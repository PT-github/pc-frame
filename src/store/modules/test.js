/*
 * @Author: PT
 * @Date: 2020-12-11 16:49:44
 * @LastEditors: PT
 * @LastEditTime: 2020-12-11 16:52:36
 * @Description: file content
 */
export default {
  state: {
    name: ''
  },
  mutations: {
    SET_NAME: (state, name) => {
      state.name = name
    }
  },
  actions: {
    setName: (context, name) => {
      context.commit('SET_NAME', name)
    }
  }
}