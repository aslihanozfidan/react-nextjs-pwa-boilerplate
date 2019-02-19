import React from "react";
import Link from "next/link";
import "./index.scss";

export default ({ children }) => (
	<header>
		<h1>{children}</h1>
		<ul>
			<li>
				<Link href="/">
					<a title="Home">Home</a>
				</Link>
			</li>
			<li>
				<Link href="/about">
					<a title="About">About</a>
				</Link>
			</li>
			<li>
				<Link href="/news">
					<a title="News">News</a>
				</Link>
			</li>
			<li>
				<Link href="/gallery">
					<a title="Gallery">Gallery</a>
				</Link>
			</li>
		</ul>
	</header>
);
