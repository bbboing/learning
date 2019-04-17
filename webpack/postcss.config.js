module: {
    rules: [
        {
            test: /\.css$/,
            use: ExtraTextPlugin.extract({
                fallback: "style-loader",
                use: [{
                    loader: "css-loader",
                    options: {importLoaders: 1}
                },'postcss-loader']
            })
        }
    ]
}