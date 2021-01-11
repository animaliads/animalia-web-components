module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../docs/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
  ],
  typescript: {
    check: false,
    checkOptions: {},
  },
};
