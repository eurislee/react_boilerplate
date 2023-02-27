const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/main.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "build"),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.styl$/,
                use: ["style-loader", "css-loader", "stylus-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|webp|svg)$/,
                type: 'asset',
                generator: {
                    filename: 'images/[contentHash][ext]'
                }
            },
            {
                test: /\.(eot|ttf|otf|woff2?)$/,
                type: 'asset',
                generator: {
                    filename: 'fonts/[contentHash][ext]'
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 8 * 1024
                    }
                }
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, "build"),
        },
        port: 3000,
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".styl"],
    }
};