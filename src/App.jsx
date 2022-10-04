import React from "react";
import { Routes, Route } from "react-router-dom";
import { Registration } from "components";
import HomePage from "./components/homePage";
import { firestore } from "services/firebase";
import Login from "./components/login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Registration firestore={firestore} />} />
      <Route path="/homePage" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
