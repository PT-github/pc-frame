/*
 * @Author: PT
 * @Date: 2020-06-01 15:37:08
 * @LastEditors: PT
 * @LastEditTime: 2020-06-04 10:25:41
 * @Description: resolve配置
 */
const path = require('path')
const config = require('../project.config')
let { alias = {}, extensions = [] } = config.resolve || {}

module.exports = {
  alias: {
    'vue$': 'vue/dist/vue.runtime.esm.js',
    '@': path.resolve(__dirname, '../src'),
    ...alias
  },
  extensions: [ ...extensions, '.js', '.jsx', '.vue', '.json']
}