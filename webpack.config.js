const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',  
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
        hot: true, 
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new ESLintPlugin({
            extensions: ['js'],
            fix: true,
            failOnError: false, 
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
             
        ],
    },
};