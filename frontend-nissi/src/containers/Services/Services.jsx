import React from "react";
import { images } from "./../../constants";
import { AiOutlinePlus } from "react-icons/ai";
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
				{services.map((item, index) => (
					<div key={index} className="content-item" id={`item${index}`}>
						<div className="item-logo">
							<img src={item.logo} alt={index} />
						</div>
						<span>{item.title}</span>
						{item.list.map((litem, id) => (
							<span key={id}>
								<AiOutlinePlus /> {litem}
							</span>
						))}
					</div>
				))}
			</div>
		</div>
	);
};

export default Services;
