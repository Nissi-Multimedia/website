import React from "react";
import { IoPulseOutline } from "react-icons/io5";
import "./Skill.scss";

const Skill = () => {
	return (
		<div className="app__about-skill">
			<div className="icon-container">
				<IoPulseOutline />
			</div>
			<div className="skill-info">
				<p className="skill-text">
					{" "}
					The very foundation of our business model is the fact that we love
					what we do{" "}
				</p>

				<p className="skill-text">
					We choose to offer this service because it feeds our passion and
					pushes us to constantly improve our work
				</p>
			</div>
		</div>
	);
};

export default Skill;
