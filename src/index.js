import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import app from "./App";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BrowserRouter>{app()}</BrowserRouter>);
