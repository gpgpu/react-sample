var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');

var config = {
  entry: path.resolve(__dirname, 'js/app.react.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      exclude: [nodeModulesPath]
    }]
  }
};
module.exports = config;
