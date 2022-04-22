import React from "react";
import "./Catalog.scss";
import { Card } from "./../../components";

const catalog = [
	{
		title: "Brand Image Management",
		content: "",
		image: "",
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
