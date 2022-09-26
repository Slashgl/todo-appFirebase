import React from "react";
import { Routes, Route } from "react-router-dom";
import { firestore } from "./services/firebase";
import { Registration } from "components";

const App = () => {
  return (
    <>
      <Registration firestore={firestore} />
      <Routes>
        <Route path="/" element={<Registration />} />
      </Routes>
    </>
  );
};

export default App;
