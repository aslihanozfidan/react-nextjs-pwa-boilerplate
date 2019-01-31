import React from "react";
import "isomorphic-fetch";
import Layout from "../layouts/main";
import "../styles/news.scss";

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
				<ul className="news">
					{this.props.stories.map((story, index) => (
						<li key={`story-${index}`} className="paragraph">
							<a href={story.url}>{story.title}</a>
						</li>
					))}
				</ul>
			</Layout>
		);
	}
}
