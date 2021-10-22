const path = require("path");
const mode = process.env.NODE_ENV;

module.exports = {
    mode,
    devtool: mode === "development" ? "source-map" : undefined,
    entry: path.join(__dirname, "./src/index.tsx"),
    output: {
        path: path.join(__dirname, "./dist/assets"),
        filename: "index.js",
        chunkFilename: "[chunkhash].chunk.js",
        assetModuleFilename: "[hash][ext][query]",
        publicPath: "/assets/"
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.tsx?$/i,
                loader: "ts-loader"
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    },
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {limit: 8192}
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },
    devServer: {
        port: 80,
        static: {
            directory: path.join(__dirname, "dist")
        },
        hot: false,
        historyApiFallback: true,
        open: true
    }
};