import React from "react";
import "isomorphic-fetch";
import dynamic from "next/dynamic";
import Layout from "../layouts/main";

const List = dynamic({
	loader: () => import("../components/List")
});

export default class extends React.Component {
	static async getInitialProps() {
		const req = await fetch(`https://api.hackerwebapp.com/news`);
		const stories = await req.json();
		return { stories };
	}

	render() {
		return (
			<Layout title="News">
				<h2 className="big-title">Latest News</h2>
				<List stories={this.props.stories} />
			</Layout>
		);
	}
}
