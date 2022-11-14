// Learn more https://docs.expo.io/guides/customizing-metro
const {getDefaultConfig} = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

if (!config.resolver.extraNodeModules) config.resolver.extraNodeModules = {};

module.exports = config
