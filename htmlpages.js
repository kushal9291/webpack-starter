const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const htmlPages = [
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
]
module.exports = {
    files: htmlPages
}