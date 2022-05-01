import React from "react";
import { images } from "./../../constants";
import { RiSendPlaneFill } from "react-icons/ri";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Footer.scss";

const Footer = () => {
	return (
		<div className="app__footer">
			<div className="footer__main">
				<div className="logo__content">
					<img src={images.footerLogo} alt="logo" />
					<span className="p-text">We bring brands to life. </span>
					<span className="p-text">
						Result driven positioning expertly done.
					</span>
				</div>

				<div className="footer__links">
					<span>Company</span>
					<ul>
						<li>
							<a href="#">About Us</a>
						</li>
						<li>
							<a href="#">Contact Us</a>
						</li>
						<li>
							<a href="#">Pricing</a>
						</li>
					</ul>
				</div>

				<div className="footer__links">
					<span>Support</span>
					<ul>
						<li>
							<a href="#">Privacy Policy</a>
						</li>
						<li>
							<a href="#">Terms of Service</a>
						</li>
						<li>
							<a href="#">Legal</a>
						</li>
					</ul>
				</div>

				<div className="newsLetter">
					<span>Stay up to Date</span>
					<p> Stay in touch and get all the update</p>
					<div className="msg">
						<input placeholder="Your Email Address" />
						<button>
							<RiSendPlaneFill />
						</button>
					</div>
				</div>
			</div>

			<div className="footer__copyright">
				<span>Copyright 2022 Designed By Nissi Multimedia</span>
				<div className="icon__links">
					<a href="#">
						<BsInstagram />
					</a>
					<a href="#">
						<BsLinkedin />
					</a>

				</div>
			</div>
		</div>
	);
};

export default Footer;
