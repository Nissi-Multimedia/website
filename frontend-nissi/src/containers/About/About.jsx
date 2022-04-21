import React from "react";
import { motion } from "framer-motion";
import { images } from "./../../constants";
import { BsArrowRight } from "react-icons/bs";
import "./About.scss";

const About = () => {
	return (
		<>
			<div className="app__about">
				<div className="app__about-image">
					{" "}
					<img src={images.homepage} alt="about" />
				</div>
				<div style={{ flex: 0.1 }}></div>
				<div className="app__about-info">
					<span className="head-text">
						Work with us, <br /> Not for us
					</span>

					<span className="s-text">
						There are more than 100 definitions of marketing. But we understand
						that marketing is what happens in every company here and now;
						finding new solutions and launching new products.
					</span>

					<button className="info-icon">
						{" "}
						<p>Learn More</p>{" "}
						<span>
							<BsArrowRight />
						</span>
					</button>
				</div>
			</div>

			<div className="app__about-extra">
				<div className="extra-head">
					{" "}
					<span>
						Grow with A The Digital <br /> Marketing Agency You <br /> can
						trust?
					</span>
				</div>
				<div className="extra-info">
					<div className="info-space">
						<div className="space-text">
							<span className="s-text">
								Our digital marketing expers have put together thousands of
								successful digital marketing campaigns for businesses looking to
								increase leads, phone calls, transactions, and qualified website
								traffic. They'll do the same for you. Request a free strategy
								proposal and get a game plan for elite revenue generation
							</span>
						</div>

						<div className="space-banner">
							<img src={images.infoSpace} alt="info space" />
						</div>
					</div>

					{/* <div style={{flex:0.1}}></div> */}

					<div className="info-banner">
						<img src={images.infoBanner} alt="info Banner" />
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
