const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry:  __dirname + "/src/index.js", // webpack entry point. Module to start building dependency graph
  output: {
    path: __dirname + '/dist',// Folder to store generated bundle
    filename: "build.js",
    publicPath: '/' // public URL of the output directory when referenced in a browser
  },
  module: {  // where we defined file patterns and their loaders
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: [
          /node_modules/
        ],
      },
      {
        test: /\.html/,
        loader: 'raw-loader'
      },
      {
        test: /\.(scss|sass)$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },
  plugins: [  // Array of plugins to apply to build chunk
    new HtmlWebpackPlugin({
      template: __dirname + "/src/public/index.html",
      filename: "./index.html",
      inject: 'body'
    }),
    new MiniCssExtractPlugin({ filename: 'style-bundle.css' }),
  ],
  devServer: {  // configuration for webpack-dev-shared
    contentBase: './src/public',  //source of static assets
    port: 7700, // port to run dev-shared
  }
};
