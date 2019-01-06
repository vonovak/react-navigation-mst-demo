module.exports = function(api) {
  api.cache(true);
  return {
    plugins: ['babel-plugin-styled-components'],
    presets: ['babel-preset-expo'],
  };
};
