import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "services/firebase";
import App from "./App";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BrowserRouter>{App()}</BrowserRouter>);
