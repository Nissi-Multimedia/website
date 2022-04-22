import React from "react";
import "./card.scss";

const Card = (props) => {
	return (
		<div className="app__card">
			<div className="card-image">
				<img alt="card" src={props.image} />
			</div>
			<div className="card-info">
				<span className="info-title">{props.title}</span>
				<span className="info-content">{props.content}</span>
			</div>
		</div>
	);
};

export default Card;
