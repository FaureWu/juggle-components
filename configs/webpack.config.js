var ExtractTextPlugin = require('extract-text-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var StyleLintPlugin = require('stylelint-webpack-plugin');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var paths = require('./paths');
var components = require('./components');

components.index = paths.index;

module.exports = {
  entry: components,
  output: {
    path: paths.dist,
    filename: "[name].js",
    chunkFilename: "[name].js",
    library: "juggle",
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
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[name]__[local]'
              }
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: function() {
                  return [
                    autoprefixer({
                      browsers: [
                        '>1%',
                        'last 4 versions',
                        'Firefox ESR',
                        'not ie < 9', // React doesn't support IE8 anyway
                      ]
                    }),
                    precss
                  ];
                }
              }
            },
            "sass-loader"
          ]
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract(["styles-loader", "css-loader"])
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
      context: paths.src
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
    }),
    new ExtractTextPlugin("[name].css")
  ]
};
