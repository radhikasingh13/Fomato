module.exports = function (api) {
    api.cache(true);
    return {
      presets: ["module:metro-react-native-babel-preset"],
      //...   <=== this three dots caused the problem
      plugins: ["react-native-reanimated/plugin"],
    };
  };
