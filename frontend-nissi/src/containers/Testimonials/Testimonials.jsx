import React from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircle } from 'react-icons/bs'
import "./Testimonials.scss";

const Testimonials = () => {
	return (
	<div className="app__testimonial">
		<div className="testimonial__image">

		</div>

		<div className="testimonials">
			<div className="testimonialText">
				<span>The entire staff at Nissi has been phenomenal. They are quick with their replies and incredible helpful.</span>
			</div>
			<div className="meta">
				<div className="author">
					<span className="author__name">Martin Jesse</span>
					<span className="author__designation">Marketing Director</span>
				</div>
				<div className="arrows">
					<BsArrowLeftCircleFill />
					<BsArrowRightCircle />
				</div>
			</div>
		</div>
	</div>
	);
};

export default Testimonials;
