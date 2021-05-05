const path = require('path');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: path.resolve(__dirname, '../'),
    use: [
      {
        loader: require.resolve('ts-loader'),
        options: { configFile: 'tsconfig-storybook.json' },
      },
    ],
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
