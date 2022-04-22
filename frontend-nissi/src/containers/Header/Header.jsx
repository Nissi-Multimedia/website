import React from "react";
import "./Header.scss";
import { Navbar } from "./../../components";
import { images } from "./../../constants";
import { motion } from "framer-motion";

const Header = () => {
	return (
		<div id="home">
			<Navbar />
			<div className="app__header">
				<div className="app__header-home">
					<div className="app__header-home-hero">
						<motion.div
							whileInView={{ x: [-100, 0], opacity: [0, 1] }}
							transition={{ duration: 1 }}
						>
							<span className="hero-text">
								Drives Revenue <br /> Digital Marketing <br /> Agency That
							</span>
						</motion.div>

						<motion.div
							whileInView={{ opacity: [0, 1] }}
							transition={{ duration: 1 }}
							className="sub"
						>
							<p className="p-text">
								Choose Nissi as your digital marketing agency and propel your
								business to new heights with our award-winning digital marketing
								services and technology platform
							</p>
						</motion.div>
					</div>

					<motion.div
						whileInView={{ opacity: [0, 1] }}
						transition={{ duration: 0.5, delayChildren: 0.5 }}
						className="app__header-home-banner"
					>
						<img src={images.homepage} alt='banner' />
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Header;
