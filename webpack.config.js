const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); 
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    entry: './src/js/app.js',
    output:{
        filename: 'static/bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    module:{
        rules:[
            {
                test: /\.html$/,
                include: path.resolve(__dirname, 'src/views'),
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
            filename: 'static/style.css', 
            path:path.resolve(__dirname, 'dist')
        }),
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