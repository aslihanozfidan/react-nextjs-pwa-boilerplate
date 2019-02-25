import React from "react";
import dynamic from "next/dynamic";
import Layout from "../layouts/main";

const Image = dynamic({
	loader: () => import("../components/Image")
});

export default class extends React.Component {
	render() {
		const sources = [
			"https://images.unsplash.com/photo-1506112573664-1a1b66d93ff3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80",
			"https://images.unsplash.com/photo-1420802839049-174a867e426c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
			"https://images.unsplash.com/photo-1471940393269-df205607fb2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
			"https://images.unsplash.com/photo-1529840180348-efd52969a4ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
			"https://images.unsplash.com/photo-1472060753336-86c2c29934b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=727&q=80",
			"https://images.unsplash.com/photo-1463998848083-9f2c6a11e97d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1621&q=80",
			"https://images.unsplash.com/photo-1491941700442-88e4841fe2c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
		];
		return (
			<Layout title="Gallery">
				<h2 className="big-title">Gallery</h2>
				<div className="gallery-wrapper">
					<Image sources={sources} effect="blur" />
				</div>
				<style jsx>{`
					.gallery-wrapper {
						column-count: 4;
						column-gap: 1em;
					}

					@media only screen and (max-width: 768px) {
						.gallery-wrapper {
							column-count: 2;
							column-gap: 1em;
						}
					}
				`}</style>
			</Layout>
		);
	}
}
