const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compilre = webpack(config);

//Tell express to use the webpack-dev-middleware and use the webpack.config.js
// confiugation file as a base
app.use(
    webpackDevMiddleware(compilre, {
        publicPath: config.output.publicPath,
    })
);

// Serv the files on port 3000.
app.listen(3000, function(){
    console.log('Example app listening on port 3000!\n');
})
