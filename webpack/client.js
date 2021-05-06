const path = require('path')

const commonConfig = require('./common')

const directory = './'

module.exports = {
  ...commonConfig,

  target: 'web',

  // entry files
  entry: [
    './src/client/index.js' // react
  ],

  // output files and chunks
  output: {
    path: path.resolve(directory, 'build-client'),
    filename: '[name].js',
    publicPath: '/',
    clean: true
  },

  // development server configuration
  devServer: {
    port: 8080,
    historyApiFallback: true
  },

  // generate source map
  devtool: 'source-map'

}
