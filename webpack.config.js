const path = require('path')

const outputPath = path.resolve(__dirname, 'dev')

module.exports = {
  entry: './src/example.tsx',
  resolve: {
    extensions: [
      '.js',
      '.ts',
      '.tsx',
    ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
  },
  output: {
    filename: 'app.js',
    path: outputPath,
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: outputPath,
  },
}
