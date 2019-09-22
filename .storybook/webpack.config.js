module.exports = function({ config }) {
    config.module.rules.unshift({
      test: /\.stories\.jsx?$/,
      loaders: [ {
         loader: require.resolve('@storybook/source-loader'),
         options: {
            prettierConfig: {
              printWidth: 100,
              singleQuote: false,
            },
          },
        }],
      enforce: 'pre',
    });
  
    return config;
  };