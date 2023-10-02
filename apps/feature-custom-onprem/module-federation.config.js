module.exports = {
  name: 'feature-custom-onprem',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};
