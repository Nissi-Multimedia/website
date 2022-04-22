import React from "react";
import "./Catalog.scss";
import { Card } from "./../../components";
import {images} from './../../constants'

const catalog = [
	{
		title: "Brand Image Management",
		content: "We build, grow and manage your brand",
		image: images.brandImage,
	},
	{
		title: "Digital Marketing Activation",
		content: "Unlock your online growth potential",
		image: images.marketingCat,
	},
	{
		title: "Audio-visual Creatives",
		content: "Capture life's beautiful moments",
		image: images.audioVisualCat,
	},
	{
		title: "Web Development",
		content: "Envision your ideas, let's make manifest",
		image: images.webUi,
	},
];

const Catalog = () => {
	return (
		<div className="app__catalog">
			<div className="catalog__title">
				<span className="hero-text">Our Recent Works</span>
			</div>
			<div className="catalog__items">
				{catalog.map((item, index) => (
					<Card title={item.title} content={item.content} image={item.image} />
				))}
			</div>
		</div>
	);
};

export default Catalog;
