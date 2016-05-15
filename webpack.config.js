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
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }
      ]
    },
    plugins: [
        new ExtractTextPlugin('public/style.css')
    ]
};
