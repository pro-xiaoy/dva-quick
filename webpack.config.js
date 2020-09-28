module.exports = (webpackConfig, env) => {
  (webpackConfig.resolve.alias = {
    "@": `${__dirname}/src`,
  });
  return webpackConfig;
};
