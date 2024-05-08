const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        print: './src/print.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'output Management',
        }),
    ],
    output: {
        filename: '[name].bundle.js', //this will create different js files based on the entry points created
        path: path.resolve(__dirname, 'dist'),
        clean: true, // will remove all unused files from dist folder
    },
    
};
