const path = require('path')

const commonConfig = require('./common')

const directory = './'

module.exports = {
  ...commonConfig,

  target: 'node',
  externalsPresets: { node: true },

  // entry files
  entry: [
    './src/server/index.js' // react
  ],

  // output files and chunks
  output: {
    path: path.resolve(directory, 'build-server'),
    filename: '[name].js',
    publicPath: '/', // to avoid errors in nested routes & sub paths
    clean: true
  }
}
