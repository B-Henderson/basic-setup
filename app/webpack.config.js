// webpack.config.js


module.exports = {
  entry: './src/js/main.js',
  output: {
    path: __dirname + '/resources/js',
    filename: 'bundle.js',
    publicPath: '/resources/js'
  }
}
