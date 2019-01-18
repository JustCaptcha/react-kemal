import path from 'path';
import baseConfig from './webpack.config.base.babel.js';
import merge from 'webpack-merge';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';


let pathsToClean = [
    'dist'
];
let cleanOptions = {
    root: path.resolve(__dirname, '../../'),
}

export default merge.smart(baseConfig, {
    mode: 'production',
    devtool: 'none',
    entry: ['./src/assets/js/index.js'],
    output: {
        path: path.resolve(__dirname, '../../dist'),
        filename: 'static/js/bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin(pathsToClean, cleanOptions),
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        })
    ],
})
