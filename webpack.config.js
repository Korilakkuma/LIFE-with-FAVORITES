const webpack                 = require('webpack');
const MiniCssExtractPlugin    = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: ['./src/main.js', './src/main.css'],
  output: {
    filename: 'app.js',
    path: `${__dirname}/assets/`
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
      filename: 'app.css',
      path: `${__dirname}/assets/`
    }),
    new OptimizeCSSAssetsPlugin({
      cssProcessorOptions: {
        map: {
          inline: false
        }
      }
    })
  ],
  devtool: 'source-map'
};
