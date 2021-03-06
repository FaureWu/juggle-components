var path = require('path');

var basePath = path.resolve(__dirname, '..');
var src = path.resolve(basePath, './src');

module.exports = {
  basePath: basePath,
  src: src,
  configs: path.resolve(basePath, 'configs'),
  docs: path.resolve(basePath, 'docs'),
  components: path.resolve(src, 'components'),
  styles: path.resolve(src, 'styles'),
  libs: path.resolve(src, 'libs'),
  index: path.resolve(src, 'index.js'),
  pkg: path.resolve(basePath, 'package.json'),
  eslintConfig: path.resolve(basePath, '.eslintrc'),
  stylelintConfig: path.resolve(basePath, '.stylelintrc.js'),
  babelConfig: path.resolve(basePath, '.babelrc')
};
