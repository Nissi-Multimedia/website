import React from "react";
import { images } from "./../../constants";
import { AiOutlinePlus } from "react-icons/ai";
import { motion } from "framer-motion";
import "./Services.scss";

const services = [
	{
		title: "Brand Image Management",
		logo: images.branding,
		list: [
			"Logo Design",
			"Audio - Visual Content",
			"Product Label Design",
			"Flyers",
			"Book Design",
		],
	},
	{
		title: "Digital Marketing Activation",
		logo: images.marketing,
		list: ["Social Media Content", "Music Album Art", "Ad Campaigns"],
	},
	{
		title: "Audio-visual Creatives",
		logo: images.audioVisual,
		list: ["Photography", "Videography", "Video Editing"],
	},
	{
		title: "Web Development",
		logo: images.webDev,

		list: ["UI/UX design", "Web App Development", "Website Management"],
	},
];

const Services = () => {
	return (
		<div className="app__services">
			<div className="app__services-title">
				<span className="hero-text">All Services</span>
			</div>

			<div className="app__services-content">
				{services.map((item, i) => (
					<motion.div
						initial={{ opacity: 0, translateX: i % 2 === 0 ? -50 : 50, translateY: -50 }}
						whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
						transition={{ duration: 0.5, delay: i * 0.3 }}
						key={i}
						className="content-item"
						id={`item${i}`}
					>
						<div className="item-logo">
							<img src={item.logo} alt={i} />
						</div>
						<span>{item.title}</span>
						{item.list.map((litem, id) => (
							<span key={id}>
								<AiOutlinePlus /> {litem}
							</span>
						))}
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default Services;
