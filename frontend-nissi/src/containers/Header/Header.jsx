import React from "react";
import "./Header.scss";
import { Navbar } from "./../../components";
import { images } from "./../../constants";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Header = () => {
	const particlesInit = async (main) => {
		// console.log(main);

		// you can initialize the tsParticles instance (main) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(main);
	};

	const particlesLoaded = (container) => {
		// console.log(container);
	};
	return (
		<div id="home">
			<Particles
				id="tsparticles"
				init={particlesInit}
				loaded={particlesLoaded}
				options={{
					fullScreen: {
						enable: false,
						zIndex: -1,
					},
					style: {
						position: "absolute",
					},
					background: {
						color: "#000",
					},
					detectRetina: false,
					fpsLimit: 30,

					particles: {
						color: {
							value: "#fff",
						},
						number: {
							density: {
								enable: true,
								area: 1080,
							},
							limit: 0,
							value: 400,
						},
						opacity: {
							animation: {
								enable: true,
								minimumValue: 0.2,
								speed: 1.5,
								sync: false,
							},
							random: {
								enable: true,
								minimumValue: 0.1,
							},
							value: 1,
						},
						shape: {
							type: "circle",
						},
						size: {
							random: {
								enable: true,
								minimumValue: 0.05,
							},
							value: 2,
						},
					},
				}}
			/>
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
