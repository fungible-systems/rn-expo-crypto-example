module.exports = function (api) {
		api.cache(true);
		return {
				presets: ["babel-preset-expo"],
				plugins: [
						[
								'module-resolver',
								{
										alias: {
												'stream': 'stream-browserify',
												'crypto': 'react-native-quick-crypto',
												'buffer': '@craftzdog/react-native-buffer'
										},
								},
						],
						"@babel/plugin-proposal-export-namespace-from",
						"react-native-reanimated/plugin",
						require.resolve("expo-router/babel"),
				],
		};
};
