const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const directory = './'

const commonConfig = {

  // webpack optimization mode
  mode: (process.env.NODE_ENV === 'development' ? 'development' : 'production'),

  // module/loaders configuration
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        exclude: /node_modules/,
        use: ['file-loader']
      }
    ]
  },

  // webpack plugins
  plugins: [
    // prepare HTML file with assets
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(directory, 'src/shared/index.html'),
      minify: false
    }),

    // copy static files from `src` to `dist`
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(directory, 'src/shared/assets'),
          to: path.resolve(directory, 'build-server/assets')
        }
      ]
    })
  ],

  // resolve files configuration
  resolve: {
    // file extensions
    extensions: ['.js', '.scss', '.css']
  },

  // webpack optimizations
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,

        vendor: {
          chunks: 'all', // both : consider sync + async chunks for evaluation
          name: 'vendor', // name of chunk file
          test: /node_modules/ // test regular expression
        }
      }
    }
  }
}

module.exports = commonConfig
