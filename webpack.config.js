const path = require('path'); //Node's PATH module, which joins two paths together
// console.log(path.join(__dirname, "public"), "<- Gives the relative path we want, up until & including public");

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, "public"),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/, //the question mark makes the s optional (so it checks for scss AND css)
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, "public")
  }
};