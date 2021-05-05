const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
// const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
// const CopyWebpackPlugin = require('copy-webpack-plugin')

const directory = './'

module.exports = {

  // webpack optimization mode
  mode: (process.env.NODE_ENV === 'development' ? 'development' : 'production'),

  // entry files
  entry: [
    './src/client/index.js' // react
  ],

  // output files and chunks
  output: {
    path: path.resolve(directory, 'build-server'),
    filename: '[name].js',
    publicPath: '/' // to avoid errors in nested routes & sub paths
  },

  // module/loaders configuration
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
      // {
      //     test: /\.scss$/,
      //     use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
      // }
    ]
  },

  // webpack plugins
  plugins: [

    // // extract css to external stylesheet file
    // new MiniCssExtractPlugin( {
    //     filename: 'build-server/styles.css'
    // } ),

    // prepare HTML file with assets
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(directory, 'src/shared/index.html'),
      minify: false
    })

    // // copy static files from `src` to `dist`
    // new CopyWebpackPlugin( {
    //     patterns: [
    //         {
    //             from: path.resolve( directory, 'src/shared/assets' ),
    //             to: path.resolve( directory, 'dist/assets' )
    //         }
    //     ]
    // } ),
  ],

  // resolve files configuration
  resolve: {

    // file extensions
    extensions: ['.js', '.jsx', '.scss']
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
  },

  // development server configuration
  devServer: {
    port: 8080,
    historyApiFallback: true
  },

  // generate source map
  devtool: 'source-map'

}
