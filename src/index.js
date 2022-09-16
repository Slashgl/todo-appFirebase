import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { firestore } from "./services/firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App firestore={firestore} />);
