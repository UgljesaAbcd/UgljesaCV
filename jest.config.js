const path = require('path');

const { createJestConfig } = require('@craco/craco');

const cracoConfig = require('./craco.config.js');
const jestConfig = createJestConfig(cracoConfig);

// module.exports = jestConfig;

module.exports = {
  jestConfig,
  rootDir: '.',
  moduleDirectories: ['node_modules', path.join(__dirname, 'src'), 'shared']
};
