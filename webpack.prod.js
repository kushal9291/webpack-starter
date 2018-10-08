const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
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
                      "css-loader"    
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