const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin');
const htmlPages = require('./htmlpages').files;
const webpack = require('webpack'); 

module.exports = {
    entry: './src/js/app.js',
    output:{
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, 'dist'),  
        publicPath: '/'
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
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'] 
                    }
                  }

            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader:'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/',
                            publicPath: '/images/'
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
                            publicPath: '/fonts/'
                          }
                    }
                ]              
            }
        ]
    },
    plugins: [ 
        new CleanWebpackPlugin(['dist']),  
        ...htmlPages,
        new HtmlBeautifyPlugin({
        config: {
            html: {
                end_with_newline: true,
                indent_size: 1,
                indent_with_tabs: true,
                indent_inner_html: true 
            }
        },
        replace: [ ' type="text/javascript"' ]
    })
  ]
};