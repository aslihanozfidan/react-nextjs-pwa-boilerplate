import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";

export default class Layout extends React.Component {
	render() {
		const { title, description, children, showBack } = this.props;

		return (
			<div>
				<Head>
					<title>{title}</title>
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					<meta name="theme-color" content="#ff6600" />
					<link rel="apple-touch-icon" href="/static/icon.png" />
					<meta name="apple-mobile-web-app-title" content="Hacker News" />
					<meta name="apple-mobile-web-app-status-bar-style" content="default" />
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta name="mobile-web-app-capable" content="yes" />
				</Head>
				<Header />
				{children}
				<Footer />
			</div>
		);
	}
}

Layout.propTypes = {
	title: PropTypes.string
};
