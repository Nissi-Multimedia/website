import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import "./Navbar.scss";
import { images } from "../../constants";

const links = ["About", "Services", "Catalog", "Testimonials", ];

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<div className="app__navbar">
			<div className="app__navbar-logo">
				{/* navbar logo */}
				<img src={images.logoWhite} alt="logo" />
			</div>
			<ul className="app__navbar-links">
				{links.map((item, index) => (
					<li key={`links-${index}`} className="links-item app__flex">
						<a href={`#${item}`}> {item} </a>
					</li>
				))}
			</ul>
			<div className="contact"><a href="contact">Contact Us </a></div>
				
			<div className="app__navbar-menu">
				<HiMenuAlt4 onClick={() => setToggle(true)} />

				{toggle && (
					<motion.div
						whileInView={{ x: [300, 0] }}
						transition={{ duration: 0.15 }}
					>
						<HiX onClick={() => setToggle(false)} />
						<ul>
							{links.map((item, index) => (
								<li key={`links-${index}`} className="app__flex">
									<a
										href={`#${item}`}
									>
										
										{item}
									</a>
								</li>
							))}
						</ul>
					</motion.div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
