import React from "react";
import ReactDOM from "react-dom/client";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

firebase.initializeApp({
  apiKey: "AIzaSyCDsFJASUMSverRpe_ARWPsUavbow7zmL4",
  authDomain: "fir-registration-5ec0c.firebaseapp.com",
  databaseURL: "https://fir-registration-5ec0c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fir-registration-5ec0c",
  storageBucket: "fir-registration-5ec0c.appspot.com",
  messagingSenderId: "253234909171",
  appId: "1:253234909171:web:9e6b38324ccf8acf3e8c86",
});

const firestore = firebase.firestore();

root.render(
  <Provider store={store}>
    <App firestore={firestore} />
  </Provider>
);
