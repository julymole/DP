const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    entry: {
        main: "./src/js/index.js",
    },

    output: {
        filename: "[name].bundle.js",
        chunkFilename: "[name].bundle.js",
        publicPath: "/"
    },

    optimization: {
        minimizer: [
            new TerserPlugin({
                sourceMap: true,
                extractComments: false,
            }),
        ],
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src/js'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ]
    },

    resolve: {
        alias: {
            "%modules%": path.resolve(__dirname, "src/blocks/modules")
        }
    },
    plugins: []
};
