const path = require('path');
const loaders = require('./webpack.loaders');

module.exports = {
  entry: [
    './src/assets/js/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'bundle.js'
  },
  module: {
    rules: loaders
  }
}
