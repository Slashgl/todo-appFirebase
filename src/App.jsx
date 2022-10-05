import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, Registration, Login, NewPassword } from "components";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Registration />} />
      <Route path="/homePage" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reset-password" element={<NewPassword />} />
    </Routes>
  );
};

export default App;
