const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 9000,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use:[ 
                      "style-loader",                        
                      "css-loader",
                      "postcss-loader"
                ]
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
});