import React from "react";
import PropTypes from "prop-types";
import Head from "../components/head";
import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/layout.scss";
import "../styles/library.scss";

export default class Layout extends React.Component {
	
	render() {
		const { title, children } = this.props;

		return (
			<div className="main-layout">
				<Head title={title}></Head>
				<Header />
				<section className="content">{children}</section>
				<Footer />
			</div>
		);
	}
}

Layout.propTypes = {
	title: PropTypes.string
};
