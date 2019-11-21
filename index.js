const { dirname } = require('path');

function getPkgDirPath(pkgName) {
  return dirname(require.resolve(`${pkgName}/package.json`));
}

module.exports = (api) => {
  api.chainWebpackConfig(config => {
    config.resolve.alias
      .set('react-router', getPkgDirPath('react-router'))
      .set('react-router-dom', getPkgDirPath('react-router-dom'))
      .set('react-router-config', getPkgDirPath('react-router-config'));
  });
}
