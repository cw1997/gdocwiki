const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')

module.exports = function override(config, env) {
  config.plugins = [
    ...config.plugins,
    new SimpleProgressWebpackPlugin(),
  ]
  
  return config;
};
