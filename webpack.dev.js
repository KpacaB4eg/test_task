const {merge} = require('webpack-merge');
const webpackConfig = require('./webpack.config');
const DotenvPlugin = require('webpack-dotenv-plugin');

module.exports = merge(webpackConfig, {
    mode: "development",
    entry: "./src/index.tsx",
    plugins: [
        new DotenvPlugin({
            path: './.env.development',
            sample: './.env.development',
        }),
    ],
});