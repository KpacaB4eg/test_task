const path = require('path');
const {merge} = require('webpack-merge');
const webpackConfig = require('./webpack.config');
const DotenvPlugin = require('webpack-dotenv-plugin');

module.exports = merge(webpackConfig, {
    mode: "production",
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new DotenvPlugin({
            path: './.env.production',
            sample: './.env.production',
        })
    ],
})