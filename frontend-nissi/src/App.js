import React from "react";
import "./App.scss";
import {
	About,
	Header,
	Catalog,
	Contact,
	Footer,
	Services,
	Testimonials,
} from "./containers";

import { Navbar, Skill } from "./components";

const App = () => {
	return (
		<div className="app">
			{/* <Navbar /> */}
			{/* <Skill /> */}
			<Header />
			<About />
			<Services />
			<Catalog />
			<Testimonials />
			<Contact />
			<Footer />
		</div>
	);
};

export default App;
