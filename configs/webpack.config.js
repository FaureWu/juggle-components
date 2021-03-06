var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var StyleLintPlugin = require('stylelint-webpack-plugin');
var path = require('path');
var paths = require('./paths');
var components = require('./components');
var packageJson = require(paths.pkg);

components.index = paths.index;

module.exports = {
  entry: components,
  output: {
    path: paths.basePath,
    filename: "[name].js",
    chunkFilename: "[name].js",
    library: packageJson.name,
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "eslint-loader",
        enforce: "pre",
        include: [
          paths.src,
        ]
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        include: [
          paths.src,
        ]
      },
      {
        test: /\.css?$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          "postcss-loader"
        ],
        include: [
          paths.src
        ]
      },
      {
        test: /\.scss?$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]__[local]"
            }
          },
          "postcss-loader",
          "sass-loader"
        ],
        include: [
          paths.src,
        ]
      }
    ]
  },
  resolve: {
    modules: [
      "node_modules",
      paths.src
    ],
    extensions: [".js", ".jsx"]
  },
  context: paths.basePath,
  plugins: [
    new StyleLintPlugin({
      configFile: path.resolve(paths.basePath, '.stylelintrc.js'),
      context: paths.src,
      syntax: "scss"
    }),
    new UglifyJSPlugin({
      compress: {
        screw_ie8: true, // React doesn't support IE8
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      }
    })
  ]
};
