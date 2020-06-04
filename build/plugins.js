/*
 * @Author: PT
 * @Date: 2020-06-01 15:23:00
 * @LastEditors: PT
 * @LastEditTime: 2020-06-04 18:16:02
 * @Description: webpack插件配置
 */ 
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const config = require('../project.config')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

let plugins = [
  /* config.plugin('define') */
  new webpack.DefinePlugin({
    'process.env': {
      ENV_CONFIG: '"' + config.env + '"',
      PUB_PROJECTNAME: config.isDevelopment ? '""' : '"' + config.projectName + '"'
    }
  }),
  /* config.plugin('vue-loader') */
  new VueLoaderPlugin(),
  /* config.plugin('html') */
  new HtmlWebpackPlugin(
    Object.assign({
      title: '框架界面', // 模版界面标题
      template: path.resolve(__dirname, '../public/index.html'), // 模版文件（全路径）
      favicon: path.resolve(__dirname, '../public/favicon.ico'), // html的favicon
      inject: true
    }, config.html ? config.html : {})
  ),
  /* config.plugin('hmr') */
  new webpack.HotModuleReplacementPlugin(),
  /* config.plugin('copy') */
  new CopyWebpackPlugin({
    patterns: [
      {
        from: path.resolve(__dirname, '../public'),
        // to: path.join(config.outputDir, 'public'),
        globOptions: {
          ignore: [ 'index.html', '**/favicon.ico' ]
        }
      }
    ]
  })
]
!config.isDevelopment && plugins.push(
  ...[
    new MiniCssExtractPlugin({
      // 如果是前台定义路由，并且在异步导入路由中加入魔法注释webpackChunkName，则导出的文件名为name，否则会使用[id]
      filename: 'css/[name].[hash:7].css',
      chunkFilename: 'css/[name].[chunkhash:7].css'
    }),
    new CleanWebpackPlugin()
  ]
)
module.exports = plugins