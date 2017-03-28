var path = require('path');

var basePath = path.resolve(__dirname, '..');
var src = path.resolve(basePath, './src');

module.exports = {
  basePath: basePath,
  src: src,
  dist: path.resolve(basePath, 'dist'),
  configs: path.resolve(basePath, 'configs'),
  docs: path.resolve(basePath, 'docs'),
  components: path.resolve(src, 'components'),
  themes: path.resolve(src, 'themes'),
  libs: path.resolve(src, 'libs'),
  languages: path.resolve(src, 'languages'),
  index: path.resolve(src, 'index.js'),
  pkg: path.resolve(basePath, 'package.json'),
  eslintConfig: path.resolve(basePath, '.eslintrc'),
  stylelintConfig: path.resolve(basePath, '.stylelintrc.js'),
  babelConfig: path.resolve(basePath, '.babelrc')
};
