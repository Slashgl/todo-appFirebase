import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

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

export { firestore };
