const withSass = require("@zeit/next-sass");
const NextWorkboxPlugin = require("next-workbox-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

module.exports = withSass({
	cssLoaderOptions: {
		url: false,
    importLoaders: 1,
	},

	webpack(config, { isServer, buildId, dev }) {
		// Fixes npm packages that depend on `fs` module
		config.node = {
			fs: "empty"
		};

		const workboxOptions = {
			clientsClaim: true,
			skipWaiting: true,
			globPatterns: [
				".next/static/*",
				".next/static/commons/*"
			],
			modifyUrlPrefix: {
				".next": "/_next"
			},
			runtimeCaching: [
				{
					urlPattern: new RegExp("/.*"),
					handler: "networkFirst",
					options: {
						cacheName: "html-cache"
					}
				},
				{
					urlPattern: new RegExp("^https://api.hackerwebapp.com/news"),
					handler: "staleWhileRevalidate",
					options: {
						cacheName: "api-cache",
						cacheableResponse: {
							statuses: [
								200
							]
						}
					}
				},
				{
					urlPattern: /.*\.(?:png|jpg|jpeg|svg|gif)/,
					handler: "cacheFirst",
					options: {
						cacheName: "image-cache",
						cacheableResponse: {
							statuses: [
								0,
								200
							]
						}
					}
				},
				{
					urlPattern: /\.(svg|eot|ttf|woff|woff2)$/,
					handler: "cacheFirst",
					options: {
						cacheName: "static-resources"
					}
				}
			]
		};

		if (!isServer && !dev) {
			config.plugins.push(
				new NextWorkboxPlugin({
					buildId,
					...workboxOptions
				}),
				new WebpackPwaManifest({
					filename: "static/manifest.json",
					name: "Next PWA",
					short_name: "Next-PWA",
					description: "A nextjs PWA demo",
					background_color: "#ffffff",
					theme_color: "#5755d9",
					display: "standalone",
					orientation: "portrait",
					fingerprints: false,
					inject: false,
					start_url: "/",
					ios: {
						"apple-mobile-web-app-title": "Next-PWA",
						"apple-mobile-web-app-status-bar-style": "#5755d9"
					},
					icons: [
						{
							src: path.resolve("static/favicon.ico"),
							sizes: [
								96,
								128,
								192,
								256,
								384,
								512
							],
							destination: "/static"
						}
					],
					includeDirectory: true,
					publicPath: ".."
				})
			);
		}

		return config;
	}
});
