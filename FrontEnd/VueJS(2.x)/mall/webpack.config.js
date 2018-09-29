const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); 
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].chunk.js',
    publicPath: '/'
  },
  mode: "development",
  devtool: 'inline-source-map',// 追踪错误和警告(仅用于开发模式)
  // 告知 webpack-dev-server，在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件。
  devServer: {
    contentBase: './dist',
    hot: true //热更新配置(仅用于开发模式)
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader',
          fallback: 'style-loader'
        })
      },
      {
        test: /.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract({
              use: 'css-loader',
              fallback: 'vue-style-loader'
            })
          }
        }
      },
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Vuejs'
    }),
    new ExtractTextPlugin("app.css"),
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(), //使用webpack内置的HMR插件(模块热替换(Hot Module Replacement 或 HMR))(仅用于开发模式)
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true
    })
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@views': path.resolve(__dirname, 'views')
    }
  }
};