const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        minimizer: [
          new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: true // set to true if you want JS source maps
          }),
          new OptimizeCSSAssetsPlugin({})
        ]
      },
    module: {
        rules: [
            {
                test: /\.css$/,
                use:[ 
                      {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          // you can specify a publicPath here
                          // by default it use publicPath in webpackOptions.output
                        }
                      },                        
                      { loader: 'css-loader', options: { importLoaders: 1 } },
                      {
                        loader: 'postcss-loader',
                        options: {
                          config: {
                            ctx: {
                              'postcss-preset-env': {},
                              cssnano: {},
                            }
                          }
                        }
                      }  
                ]
            },
        ]
    },
    plugins: [        
        new MiniCssExtractPlugin({
            filename: 'css/style.css', 
            path:path.resolve(__dirname, 'dist')
        }),
    ]
});