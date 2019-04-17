const path = require('path');
const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
    mode:'development',
    entry:{
        index:'./src/index.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename: '[name].js'
    },
    module:{
        rules: [
            {
                test:/\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
                //use:['style-loader','css-loader']
            },{
                test:/\.(jpg|png|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 500,
                        outputPath: '/images'
                    }
                }]
            },{
                test: /\.(htm|himl)$/i,
                loader: 'html-withimg-loader'
            },{
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options:{
                        presets:["@babel/preset-env"]
                    }
                }],
                exclude:/node_modules/
            }
        ]
    },
    plugins:[
        new HtmlPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html'
        }),
        new ExtractTextPlugin('index.css')
    ],
    devServer:{
        contentBase: path.resolve(__dirname, 'dist'),
        host: 'localhost',
        compress: true,
        port: 8081,
        open: true
    }
}
