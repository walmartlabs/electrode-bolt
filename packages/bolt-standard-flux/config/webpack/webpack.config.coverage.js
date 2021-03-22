"use strict";

/**
 * Webpack frontend test (w/ coverage) configuration.
 */
var _ = require("lodash");
var testCfg = require("./webpack.config.test");

module.exports = _.merge({}, testCfg, {
  module: {
    preLoaders: [
      // Manually instrument client code for code coverage.
      // https://github.com/deepsweet/isparta-loader handles ES6 + normal JS.
      {
        test: /(test|client)\/.*\.jsx?$/,
        exclude: /node_modules\//,
        loader: "isparta?{ babel: { stage: 1 } }"
      }
    ],
    loaders: testCfg.module.loaders
  }
});