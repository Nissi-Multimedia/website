import React, { useState } from "react";
import { motion, AnimatePresence, Variants, useAnimation } from "framer-motion";

import { images } from "../../constants";
import { BsArrowRight } from "react-icons/bs";
import "./About.scss";

// const imgVariants: Variants = {
// 	offscreen: {
// 		x: -300
// 	},
// 	onscreen: {
// 		x: 0,
// 		transition: {
// 			type: "spring",
// 			bounce: 0.5,
// 			duration: 0.8
// 		}
// 	}
// }

const About = () => {
	const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);

	const divAnimationControls = useAnimation();

	const divAnimationVariants = {
		init: {
			y: 0,
		},
		anim: {
			y: -20,
			transition: {
				type: "tween",
				repeat: 1,
				repeatType: "reverse",
			},
		},
	};

	return (
		<>
			<div className="app__about">
				<div className="app__about-image">
					<motion.img
						initial={{
							x: -100,
							opacity: 0,
						}}
						whileInView={{
							x: 0,
							opacity: 1,
							transition: {
								type: "spring",
								bounce: 0.5,
								duration: 0.7,
							},
						}}
						src={images.homepage}
						alt="about"
					/>
				</div>

				<div style={{ flex: 0.1 }}></div>
				<div className="app__about-info">
					<motion.span
						className="head-text"
						whileInView={{ opacity: [0, 1] }}
						transition={{ duration: 0.8 }}
					>
						Work with us, <br /> Not for us
					</motion.span>

					<motion.span
						className="s-text"
						whileInView={{
							y: [100, 0],
							opacity: [0, 1],
						}}
						transition={{
							delay: 0.2,
							duration: 1.5,
						}}
					>
						There are more than 100 definitions of marketing. But we understand
						that marketing is what happens in every company here and now;
						finding new solutions and launching new products.
					</motion.span>

					<motion.button
						className="info-icon"
						whileInView={{
							y: [100, 0],
							opacity: [0, 1],
						}}
						transition={{
							delay: 0.4,
							duration: 1.6,
						}}
					>
						
						<motion.p whileHover={{marginRight: [10, 20]}} transition={{duration:1}}>Learn More</motion.p>
						<motion.span
							whileHover={{ x: [0, 10] }}
							transition={{ duration: 1.2 }}
						>
							<BsArrowRight />
						</motion.span>
					</motion.button>
				</div>
			</div>

			<div className="app__about-extra">
				<motion.div
					className="extra-head"
					whileInView={{ opacity: [0, 1] }}
					transition={{ duration: 0.8 }}
				>
					{" "}
					<span>
						Grow with A The Digital <br /> Marketing Agency You <br /> can
						trust?
					</span>
				</motion.div>
				<div className="extra-info">
					<div className="info-space">
						<motion.div
							className="space-text"
							whileInView={{ opacity: [0, 1], x: [-80, 0] }}
							transition={{
								type: "spring",
								bounce: 0.3,
								duration: 0.7,
								delay: 0.2,
							}}
						>
							<span className="s-text">
								Our digital marketing expers have put together thousands of
								successful digital marketing campaigns for businesses looking to
								increase leads, phone calls, transactions, and qualified website
								traffic. They'll do the same for you. Request a free strategy
								proposal and get a game plan for elite revenue generation
							</span>
						</motion.div>

						<motion.div
							className="space-banner"
							whileHover={{
								scale: 1.1,
								originX: 0,
							}}
							transition={{ type: "spring", stiffness: 300 }}
						>
							<img src={images.infoSpace} alt="info space" />
						</motion.div>
					</div>

					{/* <div style={{flex:0.1}}></div> */}

					<motion.div
						className="info-banner"
						initial={{ x: 300 }}
						whileInView={{
							x: 0,
							transition: {
								type: "spring",
								stiffness: 300,
								delay: 0.3,
							},
						}}
					>
						<img src={images.infoBanner} alt="info Banner" />
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default About;
