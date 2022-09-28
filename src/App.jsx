import React from "react";
import { Routes, Route } from "react-router-dom";
import { firestore } from "./services/firebase";
import { Registration } from "components";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Registration firestore={firestore} />} />
    </Routes>
  );
};

export default App;
