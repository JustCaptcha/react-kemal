module.exports = [
    {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: '/node_modules/'
    },
    {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        // exclude: '/node_modules'
    }
]