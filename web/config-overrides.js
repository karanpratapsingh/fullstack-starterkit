const { override } = require('customize-cra');
const { alias, configPaths } = require('react-app-rewire-alias');

module.exports = override(alias({ ...configPaths('tsconfig.paths.json') }));
