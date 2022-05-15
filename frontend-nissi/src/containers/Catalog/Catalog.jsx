import React from "react";
import { Card } from "./../../components";
import { DragSlider } from "./../../ui";
import { images } from "./../../constants";
import { motion } from "framer-motion";
import "./Catalog.scss";

const imgVariants = {
	offscreen: {
		x: -300,
	},
	onscreen: {
		x: 0,
		transition: {
			type: "spring",
			bounce: 0.5,
			duration: 0.8,
		},
	},
};

const catalog = [
	{
		title: "Wedding Events",
		content:
			"A wedding can be a hassle in so many ways. We ensure that we can ease your mind and capture your beautiful moments",
		image: images.brandImage,
		link: "/",
	},
	{
		title: "Business Documentary",
		content:
			"Captured a documentary of the business district of osu and Ako-adjei of Ghana. Various business higligted on their strengths and focus.",
		image: images.marketingCat,
		link: "/",
	},
	{
		title: "Audio-visual Creatives",
		content: "Capture life's beautiful moments",
		image: images.audioVisualCat,
		link: "/",
	},
	{
		title: "Web Development",
		content: "Envision your ideas, let's make manifest",
		image: images.webUi,
		link: "/",
	},
];

const Catalog = () => {
	return (
		<motion.div
			className="app__catalog"
			initial={{background: '#fff', color: '#000'}}
			whileInView={{ background: ["#fff", "#000"], color: ['#000','#fff'] }}
			transition={{ duration: 1.5, delay: 1.5 }}
		>
			<motion.div
				whileInView={{ opacity: [0, 1], x: [-50, 0, 50, 0] }}
				transition={{ duration: 1 }}
				className="catalog__title"
			>
				<span className="hero-text">Our Recent Works</span> <br />
				<motion.span
					className="p-text"
					whileInView={{
						y: [100, 0],
						opacity: [0, 1],
					}}
					transition={{
						delay: 0.1,
						duration: 1.2,
					}}
				>
					Our team can create amazing web experiences, beginning with deep
					market research, practical strategies, and professional execution.
				</motion.span>
			</motion.div>
			<motion.div
				whileInView={{ opacity: [0, 1], x: [50, 0, -50, 0] }}
				transition={{ duration: 0.3, delay: 0.3 }}
				className="catalog__items"
			>
				<DragSlider slideApperance="fadeIn">
					{catalog.map((item, index) => (
						<Card
							title={item.title}
							content={item.content}
							image={item.image}
							key={index + 1}
						/>
					))}
				</DragSlider>
			</motion.div>
		</motion.div>
	);
};

export default Catalog;
