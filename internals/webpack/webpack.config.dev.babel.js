import path from 'path';
import baseConfig from './webpack.config.base.babel.js';
import merge from 'webpack-merge';

export default merge.smart(baseConfig, {
    mode: 'development',
    devtool: "eval-source-map",
    entry: ['./src/assets/js/index.js'],
    output: {
        path: path.resolve(__dirname, '../../dist'),
        filename: 'static/js/bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, "../../public"),
        watchContentBase: true,
        filename: 'bundle.js',
        port: 3000,
        open: true,
        compress: true,
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                pathRewrite: {'^/api': ''}
            }
        },
        historyApiFallback: true
    }

})