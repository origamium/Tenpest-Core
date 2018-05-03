const path = require("path");
module.exports = {
    entry: {
        "index" : "./src/index.ts",
        "worker" : "./src/worker.ts",
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
        extensions: [".tsx", ".ts", ".js"]
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist')
    }
};
