import React from "react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import "./Contact.scss";

const Contact = () => {
	return (
		<div className="app__contact">
			<motion.div
				whileInView={{ opacity: [0, 1] }}
				transition={{ duration: 2.5 }}
				className="contact__info"
			>
				<span className="hero-text">Let's Work Something Together.</span>
				<span className="p-text">
					Discover how we can make your business grow
				</span>
				<button className="info-icon">
						{" "}
						<p>Contact Us</p>{" "}
						<span>
							<BsArrowRight />
						</span>
					</button>
			</motion.div>
		</div>
	);
};

export default Contact;
