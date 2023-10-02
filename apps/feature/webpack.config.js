const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');
const { withModuleFederation } = require('@nx/react/module-federation');
const LoadablePlugin = require('@loadable/webpack-plugin')

const baseConfig = require('./module-federation.config');

const config = {
  ...baseConfig,
};
const withLoadable = new LoadablePlugin()
 
// Nx plugins for webpack to build config object from Nx options and context.
module.exports = composePlugins(
    withNx(),
    withReact(),
    withModuleFederation(config),
  )

