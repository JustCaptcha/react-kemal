import path from 'path';
import webpack from 'webpack';

export default {
    module: {
        rules: [
            {
                loader: "babel-loader",
                test: /\.js$/,
                exclude: '/node_modules/'
            }, 
            {
                test: /\.css$/,
                // use: [   {     loader: MiniCssExtractPlugin.loader,     options: {     }   },
                //   "css-loader" ]
                use: ["style-loader", "css-loader"],
                exclude: '/node_modules'
            }, 
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        outputPath: "static/images"
                    }
                }]
            }, 
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['url-loader?limit=100000']
                // use: [{
                //     loader: "file-loader",
                //     options: {
                //         name: "fonts/[name].[ext]"
                //     }
                // }]
            }, 
            {
                test: /\.(csv|tsv)$/,
                use: ["csv-loader"]
            }, 
            {
                test: /\.xml$/,
                use: ["xml-loader"]
            }
        ]
    }
}