const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); 
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    entry: './src/js/app.js',
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/static')
    },
    module:{
        rules:[
            {
                test: /\.html$/,
                use:[{
                    loader: 'html-loader',
                    options: {
                        interpolate : true
                        }
                    }]           
            }, 
            {
                test: /\.css$/,
                use:[ 
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          // you can specify a publicPath here
                          // by default it use publicPath in webpackOptions.output
                          publicPath: '../'
                        }
                      },
                        "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']), 
        new MiniCssExtractPlugin({
            filename: 'style.css', 
        }),
        new HtmlWebpackPlugin({
            title: 'Main File',
            filename: path.resolve(__dirname, 'dist/index.html'),
            template: './src/views/index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'Blank File',
            filename: path.resolve(__dirname, 'dist/blank.html'),
            template: path.resolve(__dirname, 'src/views/blank.html')
        })
    ]
 
};