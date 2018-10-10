const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); 
const webpack = require('webpack');

module.exports={
    plugins: [ 
        new CleanWebpackPlugin(['dist']),  
        new HtmlWebpackPlugin({ 
            title: 'Main File',
            filename: path.resolve(__dirname, 'dist/index.html'),
            template: path.resolve(__dirname, 'src/views/index.html'),
                
        }),
        new HtmlWebpackPlugin({
            title: 'Blank File',
            filename: path.resolve(__dirname, 'dist/blank.html'),
            template: path.resolve(__dirname, 'src/views/blank.html')
        }),
        new HtmlWebpackPlugin({
            title: 'Blank File',
            filename: path.resolve(__dirname, 'dist/phase_1/file1.html'),
            template: path.resolve(__dirname, 'src/views/phase_1/file1.html')
        }),
        new HtmlWebpackPlugin({
            title: 'Blank File',
            filename: path.resolve(__dirname, 'dist/phase_1/file2.html'),
            template: path.resolve(__dirname, 'src/views/phase_1/file2.html')
        }),
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
}  