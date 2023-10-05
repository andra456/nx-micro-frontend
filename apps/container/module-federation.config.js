const envRemotes = process.env.REACT_APP_NOT_SECRET_CODE;
console.log(envRemotes);
const remotes = envRemotes.split(',');
module.exports = {
  name: 'container',
  remotes: ['feature', 'feature-custom-onprem'],
};
