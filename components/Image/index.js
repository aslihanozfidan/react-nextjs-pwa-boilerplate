import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./index.scss";

export default (props) => (
	<React.Fragment>
		{props.sources.map((item, index) => (
			<div key={`image-${index}`} className="image-wrapper">
				<LazyLoadImage src={item} effect={props.effect} />
			</div>
		))}
	</React.Fragment>
);
