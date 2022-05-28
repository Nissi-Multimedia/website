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


const App = () => {
	return (
		<div className="app">
			<Header />
			<About />
			<Services />
			<Catalog />
			{/* <Testimonials /> */}
			<Contact />
			<Footer />
		</div>
	);
};

export default App;
