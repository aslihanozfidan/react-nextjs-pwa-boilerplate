import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<html lang="en">
				<Head>
					<link rel="manifest" href="../static/manifest.json" />
					<meta name="Description" content="It is a nextjs PWA demo." />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					<meta name="theme-color" content="#fff" />
					<link rel="apple-touch-icon" sizes="180x180" href="../static/favicons/apple-touch-icon.png" />
					<meta name="apple-mobile-web-app-title" content="A demo project" />
					<meta name="apple-mobile-web-app-status-bar-style" content="default" />
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta name="mobile-web-app-capable" content="yes" />
					<link
						href="../static/splash_screens/iphone5_splash.png"
						media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
						rel="apple-touch-startup-image"
					/>
					<link
						href="../static/splash_screens/iphone6_splash.png"
						media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
						rel="apple-touch-startup-image"
					/>
					<link
						href="../static/splash_screens/iphoneplus_splash.png"
						media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)"
						rel="apple-touch-startup-image"
					/>
					<link
						href="../static/splash_screens/iphonex_splash.png"
						media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
						rel="apple-touch-startup-image"
					/>
					<link
						href="../static/splash_screens/iphonexr_splash.png"
						media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
						rel="apple-touch-startup-image"
					/>
					<link
						href="../static/splash_screens/iphonexsmax_splash.png"
						media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
						rel="apple-touch-startup-image"
					/>
					<link
						href="../static/splash_screens/ipad_splash.png"
						media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
						rel="apple-touch-startup-image"
					/>
					<link
						href="../static/splash_screens/ipadpro1_splash.png"
						media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
						rel="apple-touch-startup-image"
					/>
					<link
						href="../static/splash_screens/ipadpro3_splash.png"
						media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)"
						rel="apple-touch-startup-image"
					/>
					<link
						href="../static/splash_screens/ipadpro2_splash.png"
						media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
						rel="apple-touch-startup-image"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
