import React from "react";
import { images } from "./../../constants";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import "./Services.scss";

const services = [
	{
		title: "Brand Image Management",
		logo: images.branding,
		info: "We create category-defining brands that thrive at the intersection of clarity and purpose, positioned to matter in culture through shared values and goals",
	},
	{
		title: "Digital Marketing Activation",
		logo: images.marketing,
		info: "Nissi is a website design agency that balances minimalistic design, bullet-proof strategy and utility by placing user's needs at the centre of the web design and development process",
	},
	{
		title: "Audio-visual Creatives",
		logo: images.audioVisual,
		info: "Combining agile and development with strategic thinking, our digital products and services bridge the gap between physical and digital experiences to make clients digital ambitions a reality.",
	},
	{
		title: "Web Development",
		logo: images.webDev,
		info: "We produce category-defining advertising and marketing that connects brands with their customers",
	},
];

const Services = () => {
	return (
		<div className="app__services">
			<div className="app__services-title">
				<span className="hero-text">All Services</span>
				<span className="title-text">
					We craft engaging brands and digital experiences that define culture
					and elevate brands to achieve unprecedented growth. Since day one, our
					focus has been on providing strategies and services that position our
					clients to succeed in today’s dynamic, constantly evolving world.
				</span>
			</div>

			<div className="app__services-content">
				{services.map((item, i) => (
					<motion.div
						initial={{
							opacity: 0,
							translateX: i % 2 === 0 ? -50 : 50,
							translateY: -50,
						}}
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
						<motion.div
							className="services-text"
							initial={{ opacity: 0 }}
							whileHover={{ opacity: [0, 1] }}
							transition={{ duration: 0.5 }}
						>
							<span>{item.info}</span>
							<button className="info-icon">
								{" "}
								<motion.p
									whileHover={{ marginRight: [10, 20] }}
									transition={{ duration: 1 }}
								>
									Learn More
								</motion.p>{" "}
								<motion.span
									whileHover={{ x: [0, 10] }}
									transition={{ duration: 1.2 }}
								>
									<BsArrowRight />
								</motion.span>
							</button>
						</motion.div>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default Services;
