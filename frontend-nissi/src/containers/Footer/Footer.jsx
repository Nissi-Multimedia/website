import React from "react";
import "./Footer.scss";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import { images } from "./../../constants";

const footer_links = [
	{
		name: "Company",
		links: [
			{
				name: "About Us",
				link: "/About",
			},
			{
				name: "Contact Us",
				link: "/Contact",
			},
			{
				name: "Pricing",
				link: "/pricing",
			},
		],
	},

	{
		name: "Support",
		links: [
			{ name: "Privacy Policy", link: "/Privacy" },
			{ name: "Terms of Service", link: "/Terms" },
			{ name: "Legal", link: "/Legal" },
		],
	},
];

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
				{footer_links.map((item, index) => (
					<div className="footer__links" key={index}>
						<span>{item.name}</span>
						<div>
							{item.links.map((lnk, i) => (
								<li key={i}>
									<a href={lnk.link}>{lnk.name}</a>
								</li>
							))}
						</div>
					</div>
				))}

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
				<span> Copyright &copy; 2022 Designed By Nissi Multimedia </span>
				<div className="icon__links">
					<a href="https://instagram.com/nissimultimedia?igshid=YmMyMTA2M2Y=">
						<BsInstagram />
					</a>
					<a href="https://www.linkedin.com/company/nissi-multimedia/">
						<BsLinkedin />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
