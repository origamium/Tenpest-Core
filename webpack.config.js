const path = require("path");
module.exports = {
    entry: {
        "index" : "./src/index.ts",
    },
    module: {
        rules: [
            {
                test :/\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        alias: {
            "@data": path.resolve(__dirname, "./src/lib/data"),
            "@events": path.resolve(__dirname, "./srv/lib/events"),
        }
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist')
    }
};
