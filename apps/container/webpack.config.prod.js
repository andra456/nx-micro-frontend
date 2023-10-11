const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');
const { withModuleFederation } = require('@nx/react/module-federation');
const envRemotes = 'http://localhost';

const baseConfig = require('./module-federation.config');
const prodConfig = {
  ...baseConfig,
  remotes: [
    ['feature-custom-onprem', `${envRemotes}:4202/`],
    ['feature', `${envRemotes}:4201/`],
  ],
};
const plugin = composePlugins(withNx(), withReact(), withModuleFederation(prodConfig));

// Nx plugins for webpack to build config object from Nx options and context.
module.exports = plugin;
