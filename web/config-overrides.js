const { alias, aliasJest, configPaths } = require('react-app-rewire-alias');

module.exports = config => alias(configPaths('tsconfig.paths.json'))(config);

module.exports.jest = config => aliasJest(configPaths('tsconfig.paths.json'))(config);
