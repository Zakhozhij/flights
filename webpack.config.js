const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

 module.exports = {
    mode:"none",
   entry: './src/js/index.js',
   output: {
     filename: 'main.js',
     path: path.resolve(__dirname, 'dist'),
     assetModuleFilename: 'assets/images/[name].[ext]',
    },
   
   module: {
     rules: [
       {
         test: /\.css$/i,
         use: ['style-loader', 'css-loader'],
       },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
     ],
   },
   
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html',
    inject: 'body',
    filename: 'index.html'
  }),
  new CopyWebpackPlugin({'patterns': [
    {from:'./src/assets/images', to:'assets/images'}
  ]}),

  ],
  optimization: {
    minimize: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },
 };