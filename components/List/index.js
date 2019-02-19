import React from "react";
import "./index.scss";

export default ({ stories }) => (
	<ul className="list-wrapper">
		{stories.map((story, index) => (
			<li key={`story-${index}`}>
				<a href={story.url}>{story.title}</a>
			</li>
		))}
	</ul>
);
