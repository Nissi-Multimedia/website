import React from "react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import "./card.scss";

const Card = (props) => {
	return (
		<motion.div
			className="app__card"
			key={props.key}
			initial={{ y: 200 }}
			animate={{ y: 0 }}
			transition={{
				type: "spring",
				bounce: 0.5,
				duration: 0.8,
				delay: props.key * 0.2,
			}}
		>
			<div
				className="card-image"
				style={{
					backgroundImage: `url(${props.image})`,
				}}
			>
				{/* <img alt="card" src={props.image} draggable={false}/> */}
			</div>
			<div className="card-info">
				<span className="info-title">{props.title}</span>
				<span className="info-content">{props.content}</span>
				<button className="info-icon">
					{" "}
					<p>Learn More</p>{" "}
					<span>
						<BsArrowRight />
					</span>
				</button>
			</div>
		</motion.div>
	);
};

export default Card;
