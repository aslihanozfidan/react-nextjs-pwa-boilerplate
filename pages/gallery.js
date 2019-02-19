import React from "react";
import dynamic from "next/dynamic";
import Layout from "../layouts/main";

const Image = dynamic({
	loader: () => import("../components/Image")
});

export default class extends React.Component {
	render() {
		return (
			<Layout title="Gallery">
				<h2 className="big-title">Gallery</h2>
				<Image />
			</Layout>
		);
	}
}
