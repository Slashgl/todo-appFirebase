import React from "react";
import { Routes, Route } from "react-router-dom";
import { Registration } from "components";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Registration />} />
    </Routes>
  );
};

export default App;
