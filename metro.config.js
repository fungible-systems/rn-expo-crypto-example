// Learn more https://docs.expo.io/guides/customizing-metro
const {getDefaultConfig} = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

if (!config.resolver.extraNodeModules) config.resolver.extraNodeModules = {};

config.resolver.extraNodeModules.stream = require.resolve('stream-browserify');
config.resolver.extraNodeModules.crypto = require.resolve('react-native-quick-crypto');
config.resolver.extraNodeModules.buffer = require.resolve('@craftzdog/react-native-buffer');

module.exports = config
