var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        helloWorld: [
          'webpack-dev-server/client?http://localhost:8080',
          'webpack/hot/only-dev-server',
          './js/helloworld.js'
        ]
    },
    output: {
        filename: 'public/[name].js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'react-hot!babel',
          exclude: /node_modules/
        }, {
          test: /\.css$/,
          loaders: ['style', 'css'],
          exclude: /node_modules/
        }/*,
        {
          test: /\.sass$/,
          loaders: ['style', 'css', 'sass'],
          exclude: /node_modules/
        }*/
      ]
    }
};
