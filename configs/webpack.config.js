var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var StyleLintPlugin = require('stylelint-webpack-plugin');
var paths = require('./paths');
var components = require('./components');
var packageJson = require(paths.pkg);

components.index = paths.index;

module.exports = {
  entry: components,
  output: {
    path: paths.dist,
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
        ],
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
  externals: ['react'],
  plugins: [
    new StyleLintPlugin({
      configFile: paths.stylelintConfig,
      context: paths.src,
      files: '**/*.styled.js',
      syntax: 'scss'
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
