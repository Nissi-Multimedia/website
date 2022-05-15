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
								Choose us as your digital marketing agency and propel your
								business to new heights with our award-winning digital marketing
								services and technology platform
							</p>
						</motion.div>
					</div>

					<motion.div
						whileInView={{ opacity: [0, 1] }}
						transition={{ duration: 0.5, delayChildren: 0.8 }}
						className="app__header-home-banner"
					>
						<motion.img
							initial={{ scale: 0.5 }}
							animate={{ scale: 1 }}
							transition={{ duration: 0.8 }}
							src={images.homepage}
							style={{
								borderTopLeftRadius: "0.5rem",
								borderBottomLeftRadius: "0.5rem",
							}}
							alt="banner"
						/>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Header;
