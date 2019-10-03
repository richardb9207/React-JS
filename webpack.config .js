const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

moduele.exports={
    entry:"./src/index.js",
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
    },
    resolve:{
        extensions:['.js','.jsx'],
    },
    moduele:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                },
            },
            {
                test: /\.html$/,
                use:[
                    {
                        loader: 'html-loader',
                    },
                ]
            },
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: './public/index.hmtl',
            filename: './index.html'
        })
    ]
}