const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); 
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const webpack = require('webpack');

module.exports = {
    entry: './src/js/app.js',
    output:{
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 9000,
       // hot: true
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
                        }
                      },  
                      "css-loader"    
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader:'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/'
                          }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader:'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',
                            publicPath: '../fonts/'
                          }
                    }
                ]              
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']), 
        new MiniCssExtractPlugin({
            filename: 'css/style.css', 
            path:path.resolve(__dirname, 'dist')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({ 
            title: 'Main File',
            filename: path.resolve(__dirname, 'dist/index.html'),
            template: path.resolve(__dirname, 'src/views/index.html'),
              
        }),
        new HtmlWebpackPlugin({
            title: 'Blank File',
            filename: path.resolve(__dirname, 'dist/blank.html'),
            template: path.resolve(__dirname, 'src/views/blank.html')
        })
    ]
 
};