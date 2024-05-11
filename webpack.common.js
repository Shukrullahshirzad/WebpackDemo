const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { title } = require('process');

module.exports = {
    enty: {
        app: './src/index.js',
    },
    plugins: [

        new HtmlWebpackPlugin({
            title: 'Production',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(--dirname, 'dist'),
    },
    
}