import React from "react";
import "isomorphic-fetch";
import Layout from "../layouts/main"

export default class extends React.Component {
	static async getInitialProps() {
		const req = await fetch(`https://api.hackerwebapp.com/news`);
		const stories = await req.json();
		return { stories };
	}

	render() {
		return (
			<div>
				<h1>Latest News</h1>

				{this.props.stories.map((story) => (
					<h4>
						<a href={story.url}>{story.title}</a>
					</h4>
				))}

				<style jsx>{`
					h1 {
						font-family: system-ui;
						font-weight: 300;
						color: #333;
						text-decoration: underline;
					}
					,
					h4 {
						font-family: system-ui;
						color: #000;
					}
					,
					h4 a {
						text-decoration: none;
						font-weight: normal;
					}
					,
					h4 a::before {
						content: "- ";
						font-weight: bold;
					}
				`}</style>
				<style global jsx>{`/* Your Global CSS */`}</style>
			</div>
		);
	}
}
