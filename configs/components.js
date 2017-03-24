var path = require('path');
var paths = require('./paths');

var components = require(paths.pkg).components;
module.exports = Object.keys(components)
  .reduce(function(object, name) {
    object['components/' + name] = path.resolve(paths.components, components[name]);
    return object;
  }, {});
