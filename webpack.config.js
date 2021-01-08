const webpack              = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin   = require('css-minimizer-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: ['./src/main.js', './src/main.css'],
  output: {
    filename: 'app.js',
    path: `${__dirname}/assets/`,
    publicPath: '/assets/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.png$/,
        use: 'url-loader'
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        config : {
          path: './postcss.config.js'
        }
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'app.css'
    }),
    new CssMinimizerPlugin({
      sourceMap: true
    })
  ],
  devtool: 'source-map'
};
