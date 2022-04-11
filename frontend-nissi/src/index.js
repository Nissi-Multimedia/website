import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import "./index.css";

const home = document.getElementById("root");
const root = ReactDOMClient.createRoot(home);

root.render(<App />);
