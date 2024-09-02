const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const {
  resolver: {sourceExts, assetExts},
} =  getDefaultConfig();
const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg', 'js', 'json', 'ts', 'tsx', 'cjs'], // Add 'cjs' as a source extension
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
